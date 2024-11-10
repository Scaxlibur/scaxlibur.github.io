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
      //"/NASServerRouter/",
      {
        text: "NAS",
        icon: "fa-solid:hard-drive",
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
      /*
      {
        text: "服务/专题",
        icon: "",
        prefix: "",
        children: [
          {
            text: "专题示例",
            icon: "fa6-solid:dice-d20",
            link: "apps/topic/",
          },
        ],
      },
      */
    ],
  },

  {
    text: "工具",
    icon: "fa6-solid:toolbox",
    children: [
      {
        text: "ChatGPT SC",
        icon: "fa6-solid:bolt",
        link: "https://www.aishort.top/",
      },
      { text: "IMGPrompt", icon: "fa6-solid:image", link: "https://prompt.newzone.top/" },
      { text: "多语言翻译", icon: "fa6-solid:language", link: "https://tools.newzone.top/json-translate" },
    ],
  },
]);
