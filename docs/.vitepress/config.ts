import { defineConfig } from 'vitepress'

import { nav, sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zhiy's notes",
  description: '个人笔记和一些杂七杂八的东西',
  base: '/zhiy-notes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    outline: {
      level: 'deep',
      label: '目录',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Zhiiy' }],
  },
})
