<template>
  <ul class="breadcrumbs" itemtype="http://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
      <meta itemprop="position" content="1">
      <nuxt-link
        to="/"
        no-prefetch
        itemprop="item"
      >
        <span itemprop="name">
          Главная
        </span>
      </nuxt-link>
    </li>
    <li
      v-for="(item, index) in pages"
      :key="index"
      itemprop="itemListElement"
      itemtype="http://schema.org/ListItem"
    >
      <meta itemprop="position" :content="`${index + 2}`">
      <nuxt-link
        v-if="index < pages.length - 1"
        :to="item.href"
        :title="item.title"
        itemprop="item"
        no-prefetch
      >
        <span itemprop="name">
          {{ item.title }}
        </span>
      </nuxt-link>
      <span v-else itemprop="name">
        <meta itemprop="position" content="3">
        {{ item.title }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Breadcrumb } from '@/types'
/**
 * Компонент хлебных крошек
 * @param pages - массив страниц
 */
export default Vue.extend({
  props: {
    pages: {
      type: Array as PropType<Array<Breadcrumb>>,
      required: true
    }
  }
})
</script>
