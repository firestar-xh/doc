import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://manual.likeyou168.cn", 

  // author: {
  //   name: "Mr.Hu",
  // },

  logo: "/image/faicon.png", 

  repo: "likeyou8888/doc", 

  docsDir: "src", 

  locales: {
    "/": {
      // navbar
      navbar: enNavbar, // 使用已有的英文导航配置

      // sidebar
      sidebar: enSidebar, // 使用已有的英文侧边栏配置

      footer: "默认页脚", // 页脚改为 "默认页脚"
      displayFooter: false, // 隐藏页脚显示

      metaLocales: {
        editLink: "Edit this page on GitHub", // GitHub 编辑链接
      },
    },

    "/zh/": {
      // navbar
      navbar: zhNavbar, // 使用已有的中文导航配置

      // sidebar
      sidebar: zhSidebar, // 使用已有的中文侧边栏配置

      footer: "默认页脚", // 中文页脚内容
      displayFooter: false, // 显示页脚

      metaLocales: {
        editLink: "在 GitHub 上编辑此页", // 中文的 GitHub 编辑链接
      },
    },
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },
  plugins: {
    components: {
      components: [
        "PDF",
        "Share",
        "ArtPlayer",
        "VidStack"
      ],
      componentOptions: {
        artPlayer: {
          fastForward: true,
          screenshot: true,
        }
     }
    },

    icon: {
      prefix: "fa6-solid:",
    },
    
    backToTop: {
      threshold: 200
    },

    search: {
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    },
  },
});
