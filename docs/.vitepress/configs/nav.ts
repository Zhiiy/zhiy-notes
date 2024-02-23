import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '导航',
    items: [
      { text: '常用工具库', link: '/nav/lib' },
      { text: '站点导航', link: '/nav/website' },
    ],
  },
  {
    text: '笔记',
    items: [{ text: '日常笔记', link: '' }],
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
