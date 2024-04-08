---
layoutClass: 'nav-layout'
outline: [2, 6]
---

<script setup>
  import { LIB_DATA } from './data.ts'
</script>
<style src="./index.scss"></style>

# 开发导航

<NavLink v-for="{ title, items } in LIB_DATA" :title="title" :items="items" />
