<script lang="ts" setup>
import { withBase } from 'vitepress'

import type { NavItems } from '../../../type/nav'

const props = defineProps<{
  title: NavItems['title']
  icon?: NavItems['icon']
  link: NavItems['link']
  desc?: NavItems['desc']
}>()
</script>

<template>
  <a class="nav-link-item" :href="link" target="_blank">
    <div class="item-box">
      <div class="item-box__header">
        <div v-if="icon && typeof icon === 'string'" class="icon">
          <img :src="withBase(icon)" :alt="title" />
        </div>
        <h5 class="title" :class="{ 'has-icon': !!icon }">{{ title }}</h5>
      </div>
      <p v-if="desc" class="desc">{{ desc }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.nav-link-item {
  --nav-icon-box-size: 40px;
  --nav-icon-size: 25px;
  --nav-box-gap: 10px;

  text-decoration: inherit;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
  }

  .item-box {
    height: 100%;
    padding: var(--nav-box-gap);
    color: var(--vp-c-text-1);

    &__header {
      display: flex;
      align-items: center;

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--nav-icon-box-size);
        height: var(--nav-icon-box-size);
        margin-right: 8px;
        border-radius: 4px;
        background-color: var(--vp-c-default-soft);
        transition: background-color 0.25s;
        img {
          width: var(--nav-icon-size);
          height: var(--nav-icon-size);
        }
      }

      .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bold;
        &:has(.has-icon) {
          line-height: var(--nav-icon-box-size);
        }
      }
    }

    .desc {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5;
      margin: 8px 0 0;
      font-size: 12px;
    }
  }
}
</style>
