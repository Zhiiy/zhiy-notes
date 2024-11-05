import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '开发导航', link: '/nav/dev' },
  {
    text: '笔记',
    items: [
      { text: 'JavaScript 知识', link: '/notes/js/types' },
      { text: 'HTML/CSS', link: '/notes/js/types' },
      { text: '浏览器', link: '/notes/js/types' },
    ],
  },
  {
    text: '源码阅读',
    items: [{ text: 'vue2', link: '/' }],
  },
  {
    text: '工作提效',
    items: [],
  },
]
