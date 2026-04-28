---
title: 用 chisel 搭建 WSS 反向 SSH 隧道
date: 2026-04-28
category:
  - 软路由
tag:
  - 折腾
  - SSH
  - 反向代理
  - 远程访问
order: -1
---

## 为什么需要反向 SSH 隧道？

家用网络里经常会遇到一个问题：我想从外面连回家里的机器，但家里的机器不一定有公网 IP，运营商 NAT、校园网、公司网络策略都可能挡在中间。

常见方案有很多，比如内网穿透、Tailscale、ZeroTier、frp。它们都很好用，但有时也会遇到链路抖动、虚拟网卡不稳定、节点之间偶尔连不上的情况。

这时可以换一个思路：让家里的机器主动连出到一个公网入口，再把 SSH 端口反向映射回来。

这就是本文要记录的方案：

```text
内网机器 ──主动连出──> 公网入口 ──反向端口──> 本地 SSH 出口
```

工具使用 [chisel](https://github.com/jpillora/chisel)。它是一个基于 HTTP/WebSocket 的 TCP/UDP 隧道工具，部署简单，适合做轻量级反向 SSH 隧道。

## 目标架构

本文使用的架构如下。所有域名、端口和用户名都用示例值表示，请按自己的环境替换。

```text
内网 Windows / Linux 主机
  └─ chisel client 主动连出
      ↓ HTTPS / WebSocket
公网入口：https://tunnel.example.com
      ↓ Nginx / 反向代理
公网服务器或家用网关
      ↓ HTTP WebSocket upstream
NAS / Linux 服务器：127.0.0.1:39001
  └─ chisel server
      ↓ reverse port
NAS / Linux 本机：127.0.0.1:2222
      ↓ SSH
内网主机：127.0.0.1:22
```

这个方案的重点是：

- 内网主机主动连出，不需要内网主机暴露公网端口。
- 公网入口只负责转发 WebSocket。
- 真正的 SSH 出口只绑定在服务器本机 `127.0.0.1`，不直接暴露到公网。

## 服务端：用 Docker 跑 chisel server

服务端可以放在公网服务器，也可以放在家里 NAS 上，再由网关或反向代理转发进来。

示例 `docker-compose.yml`：

```yaml
services:
  chisel:
    image: jpillora/chisel:latest
    container_name: chisel-wss
    restart: unless-stopped
    command:
      - server
      - --reverse
      - --auth
      - ${CHISEL_AUTH}
      - --port
      - "8080"
    ports:
      # 给反向代理访问的 WebSocket 后端
      - "127.0.0.1:39001:8080"
      # 反向 SSH 出口，只给本机使用
      - "127.0.0.1:2222:2222"
```

`.env`：

```env
CHISEL_AUTH=user:change-this-password
```

启动：

```bash
docker compose up -d
docker compose logs --tail 50 chisel
```

正常情况下，日志里会看到类似内容：

```text
server: Reverse tunnelling enabled
server: User authentication enabled
server: Listening on http://0.0.0.0:8080
```

## 反向代理：把 HTTPS 转到 chisel server

chisel 可以直接跑 HTTP/WebSocket，但公开访问时建议放在 HTTPS 后面。下面是一个 Nginx 示例：

```nginx
server {
    listen 443 ssl http2;
    server_name tunnel.example.com;

    ssl_certificate     /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:39001;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;

        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }
}
```

如果你使用的是 Lucky、Nginx Proxy Manager 或其他图形化反代工具，关键点也一样：

- upstream 指向 chisel server 的 HTTP 端口。
- 开启 WebSocket 转发。
- 不要忘记较长的超时时间。

## 客户端：主动连接公网入口

内网机器上运行 chisel client：

```bash
chisel client \
  --auth user:change-this-password \
  https://tunnel.example.com \
  R:0.0.0.0:2222:127.0.0.1:22
```

含义是：

```text
R:0.0.0.0:2222:127.0.0.1:22
```

让服务端监听反向端口 `2222`，并把流量转发到客户端本机的 `127.0.0.1:22`。

如果你只在服务端 Docker 里把 `2222` 映射到宿主机 `127.0.0.1:2222`，那最终 SSH 仍然只对服务器本机开放。

连接测试：

```bash
ssh -p 2222 user@127.0.0.1
```

如果你需要密钥登录，也可以写成：

```bash
ssh -i ~/.ssh/example_key -p 2222 user@127.0.0.1
```

## Windows 上作为服务常驻

Windows 上可以用任务计划，也可以用 NSSM 把 chisel client 包成服务。相比任务计划，NSSM 的可维护性更好一些。

示例目录：

```text
C:\Tools\chisel\
├── chisel.exe
├── chisel-auth.txt
├── start-chisel.ps1
└── chisel.log
```

`start-chisel.ps1` 示例：

```powershell
$BaseDir = "C:\Tools\chisel"
$Chisel = Join-Path $BaseDir "chisel.exe"
$AuthFile = Join-Path $BaseDir "chisel-auth.txt"
$LogFile = Join-Path $BaseDir "chisel.log"
$Server = "https://tunnel.example.com"
$Remote = "R:0.0.0.0:2222:127.0.0.1:22"

while ($true) {
    $Auth = Get-Content $AuthFile -Raw
    $Auth = $Auth.Trim()

    $Time = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Add-Content $LogFile "[$Time] starting chisel client"

    & $Chisel client --auth $Auth $Server $Remote *>> $LogFile

    $Time = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Add-Content $LogFile "[$Time] chisel exited, restart after 5s"
    Start-Sleep -Seconds 5
}
```

NSSM 配置时可以这样填：

```text
Application: powershell.exe
Arguments: -NoProfile -ExecutionPolicy Bypass -File C:\Tools\chisel\start-chisel.ps1
Startup directory: C:\Tools\chisel
Startup type: Automatic
```

认证文件 `chisel-auth.txt` 需要限制权限，不要放在公开目录里。

## 常见坑

### 1. 客户端地址写 `https://`，不要写 `wss://`

chisel client 的 URL 建议写：

```bash
https://tunnel.example.com
```

它会在内部升级到 WebSocket。直接写 `wss://...` 在某些版本里可能被解析坏，出现奇怪的地址错误。

### 2. chisel server 不一定支持 `--basepath`

有些教程会写：

```text
--basepath /chisel
```

但不是所有版本都支持这个参数。如果容器反复重启，日志里出现：

```text
flag provided but not defined: -basepath
```

就说明当前版本不支持。最简单的做法是：不要挂子路径，直接把域名根路径反代给 chisel server。

### 3. 浏览器 404 不代表坏了

chisel 不是普通网页服务。你用浏览器打开 `https://tunnel.example.com`，看到 404 或空白，并不一定代表隧道失败。

更可靠的检查方式是：

```bash
docker compose ps
docker compose logs --tail 50 chisel
ssh -p 2222 user@127.0.0.1
```

### 4. 不要把 SSH 出口暴露到公网

建议把反向 SSH 出口绑定在服务端本机：

```yaml
- "127.0.0.1:2222:2222"
```

不要写成：

```yaml
- "0.0.0.0:2222:2222"
```

后者会让 SSH 出口直接暴露到公网，风险会高很多。

### 5. 多台机器可以分不同端口

如果有多台内网机器，可以这样规划：

```text
127.0.0.1:2222 -> host-a:22
127.0.0.1:2223 -> host-b:22
127.0.0.1:2224 -> host-c:22
```

每台客户端使用不同的 `R:` 端口即可。

## 安全建议

- 使用强密码作为 chisel auth，必要时定期轮换。
- SSH 禁止密码登录，优先使用密钥。
- 反向 SSH 出口只绑定 `127.0.0.1`。
- 如果反代入口在内网网关后面，尽量限制来源 IP。

## 适合什么场景？

这个方案适合：

- 虚拟组网偶尔不稳定，需要备用 SSH 通道。
- 想用 HTTPS/WebSocket 穿过一些普通网络环境。
- 只需要少量固定端口，不需要完整 Tailnet。

它不适合：

- 大规模组网。
- 需要复杂 ACL / 设备身份管理。
- 对审计、权限和密钥轮换有严格企业级要求的场景。

如果只是给自己的几台机器留一个应急 SSH 通道，chisel 已经足够轻量。

## 总结

chisel 反向 SSH 隧道的核心思路很简单：让内网主机主动连出，把 SSH 端口反向挂到一台可访问的服务器上。

真正需要注意的不是命令本身，而是边界：公网入口只负责 WebSocket，SSH 出口只给本机使用，认证信息不要泄露。

这样，它就可以成为 ZeroTier、Tailscale 或普通内网穿透之外的一条备用通道。
