<script lang="ts" setup>
import type { NavItems } from '../../../type/nav'

import { slugify } from '@mdit-vue/shared'
import { computed } from 'vue'

import NavItem from './NavItem.vue'

const props = defineProps<{
  title: string
  items: NavItems[]
}>()

const formatTitle = computed(() => {
  if (!props.title) {
    return ''
  }

  return slugify(props.title)
})
</script>

<template>
  <div class="nav-link">
    <h2 :id="formatTitle">
      {{ title }}
      <a class="header-anchor" :href="`#${formatTitle}`" />
    </h2>

    <div class="nav-link__contain">
      <NavItem v-for="item in items" v-bind="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-link {
  &__contain {
    --nav-gap: 14px;

    display: grid;
    column-gap: var(--nav-gap);
    row-gap: var(--nav-gap);
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-auto-flow: row dense;
  }
}

@each $media, $size in (640px: 180px, 768px: 200px, 1024px: 220px, 1280px: 240px) {
  @media (min-width: $media) {
    .nav-link__contain {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}
</style>
