import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '导航',
    items: [
      { text: '开发导航', link: '/nav/dev' },
      { text: '站点导航', link: '/nav/website' },
    ],
  },
  {
    text: '笔记',
    items: [],
  },
  {
    text: '源码阅读',
    items: [],
  },
  {
    text: '前端',
    items: [],
  },
]
