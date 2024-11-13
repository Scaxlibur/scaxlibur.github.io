import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar(
  {
  "": [
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa6-brands:readme", link: "https://scaxlibur.github.io/reading/" },
    // 指定显示页面
    {
      text: "🔡 嵌入式开发",
      icon: "",
      prefix: "/EmbeddedDevelopment/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🔧 NAS、服务器和路由器",
      prefix: "/",
      collapsible: true,
      children: [
        //"/NASServerRouter/",
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
      ]
    },
    {
      text: "🤡 杂七杂八",
      icon: "",
      prefix: "/whatever/",
      collapsible: true,
      children: "structure",
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
]
}
);
