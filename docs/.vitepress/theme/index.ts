// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import type { Theme } from 'vitepress'

import './styles/index.scss'

import NavLink from './components/NavLink/NavLink.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}

    const { frontmatter } = useData()

    if (frontmatter.value.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('NavLink', NavLink)
  },
} satisfies Theme
