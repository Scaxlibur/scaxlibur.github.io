import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。
export default navbar([
  { text: "博客", icon: "fa6-solid:blog", link: "/blog" },
  {
    text: "折腾",
    icon: "fa6-solid:bars-staggered",
    prefix: "/",
    children: [
      {
        text: "NAS",
        icon: "bi:hdd-network",
        link: "NASServerRouter/NAS/",
      },
      /*
      {
        text: "服务器",
        icon: "fa6-classic:server",
        link: "NASServerRouter/server/",
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
    text: "工具",
    icon: "fa6-solid:toolbox",
    children: [
      {text: "ChatGPT SC",icon: "fa6-solid:bolt",link: "https://www.aishort.top/",},
      { text: "IMGPrompt", icon: "fa6-solid:image", link: "https://prompt.newzone.top/" },
      { 
        text: "PPT模板",
        icon: "fa6-solid:image",
        children: [
          {
            text: "PPT超市",
            link: "https://www.pptsupermarket.com/" 
          },
          {
            text: "第一PPT",
            link: "https://www.1ppt.com/" 
          },
        ]
      },
    ],
  },
  {
    text: "教程",
    icon: "material-symbols:menu-book-outline",
    children: [
      {
        text: "Docker教程",
        icon: "teenyicons:docker-outline",
        link: "https://yeasy.gitbook.io/docker_practice",
      },
      { text: "编程语言教程",
        icon: "mingcute:computer-line",
        link: "https://www.runoob.com/" 
      },      
    ]
  },
  {
    text: "For Joy",
    icon: "tdesign:joyful",
    children: [
      { text: "数字艺术馆",
        icon: "mdi:paint-outline",
        link: "https://useum.org/" 
      },
      { text: "光影绘画",
        icon: "fluent-emoji-high-contrast:paintbrush",
        link: "http://weavesilk.com/" 
      },
    ]
  }
]);
