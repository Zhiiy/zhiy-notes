import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/notes/': [
    {
      text: 'JavaScript 知识',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/notes/js/types' },
        { text: '变量', link: '/notes/js/variable' },
        { text: '操作符', link: '' },
        { text: '垃圾回收', link: '' },
        { text: '函数', link: '' },
        { text: 'this', link: '' },
        { text: '对象、类', link: '' },
        { text: '模块化', link: '' },
      ],
    },
    {
      text: 'HTML/CSS',
      collapsed: false,
    },
    {
      text: '浏览器',
      collapsed: false,
    },
  ],
}
