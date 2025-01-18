import { defineUserConfig } from "vuepress";
import { hopeTheme } from 'vuepress-theme-hope';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Docs",
      description: "document",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档",
      description: "说明文档",
    },
  },
  
  theme,
  
  // Enable it with pwa
  // shouldPrefetch: false,
});

