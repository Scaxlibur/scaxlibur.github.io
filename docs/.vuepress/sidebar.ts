import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    // 读书笔记架构更换到 docsify，不能使用相对链接
    {
      text: "读书笔记",
      icon: "fa6-brands:readme",
      link: "https://scaxlibur.github.io/reading/",
    },
    // 指定显示页面
    {
      text: "🔡 嵌入式开发",
      icon: "",
      prefix: "/",
      collapsible: true,
      children: [
        {
          text: "ESP32",
          icon: "ion:hardware-chip-outline",
          link: "EmbeddedDevelopment/ESP32/",
        },
        {
          text: "FreeRTOS",
          icon: "iconoir:multi-mac-os-window",
          link: "EmbeddedDevelopment/FreeRTOS/",
        },
        {
          text: "STM32",
          icon: "ion:hardware-chip-outline",
          link: "EmbeddedDevelopment/STM32/",
        },
        {
          text: "C++的嵌入式开发",
          icon: "vscode-icons:file-type-cpp3",
          link: "EmbeddedDevelopment/2024-11-03-C++嵌入式开发入门.md",
        },
      ],
    },
    {
      text: "🔧 NAS、服务器和路由器",
      prefix: "/",
      collapsible: true,
      children: [
        {
          text: "NAS",
          icon: "bi:hdd-network",
          link: "NASServerRouter/NAS/",
        },
        /*
        {
          text: "服务器",
          icon: "fa6-brands:chrome",
          link: "NASServerRouter/服务器/",
        },
        */
        {
          text: "软路由",
          icon: "fa-solid:wifi",
          link: "NASServerRouter/router/",
        },
      ],
    },
    {
      text: "🗒️ 博客文章",
      icon: "",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: false,
      children: "structure",
    },
    // 专题区（独立侧边栏）
    //"/NASServerRouter/NAS/": "structure",
  ],
});
