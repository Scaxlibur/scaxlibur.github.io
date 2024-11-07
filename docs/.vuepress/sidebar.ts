import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa6-brands:readme", link: "https://scaxlibur.github.io/reading/" },
    // 指定显示页面
    /*
    {
      text: "🧰 应用手册",
      icon: "",
      prefix: "/apps/",
      link: "",
      collapsible: true,
      children: [
        "Applist.md",
        "toolbox.md",
        {
          text: "其他",
          icon: "fa6-solid:code-compare",
          collapsible: true,
          children: ["design.md"],
        },
      ],
    },
    */
    {
      text: "🏗️ 网站部署",
      icon: "",
      prefix: "/网站部署/",
      link: "",
      collapsible: true,
      children: [
        "Static.md",
        "CloudServices.md",
        "VPS.md",
        {
          text: "部署工具",
          icon: "fa6-brands:windows",
          collapsible: true,
          children: ["GitHub.md", "Cloudflare.md", "MySQL.md", "DNS.md"],
        },
      ],
    },
    {
      text: "🔡 嵌入式开发",
      icon: "",
      prefix: "/嵌入式开发/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🗒️ 博客文章",
      icon: "",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🧰 NAS、服务器和软路由",
      icon: "",
      prefix: "/NAS、服务器和软路由/",
      link: "",
      collapsible: true,
      children: [
        "README.md",
        /*
        {
          text: "其他",
          icon: "fa6-solid:code-compare",
          collapsible: true,
          children: ["design.md"],
        },
        */
      ],
    },
  ],
  // 专题区（独立侧边栏）
  //"/NAS、服务器和软路由/NAS/": "structure",
  // 如果你不想使用默认侧边栏，可以按照路径自行设置。但需要去掉下方配置中的注释，以避免博客和时间轴出现异常。_posts 目录可以不存在。
  /*"/_posts/": [
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ], */
});
