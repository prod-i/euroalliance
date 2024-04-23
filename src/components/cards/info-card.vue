<template>
  <div :class="`offer ${customClass}`">
    <div class="offer-image">
      <img :src="img" :alt="title" width="700" height="400" loading="lazy">
    </div>
    <div class="offer-content">
      <div class="offer-text">
        <div class="offer-header">
          <div class="offer-title">
            {{ title }}
          </div>
          <div class="offer-info">
            {{ description }}
          </div>
        </div>
      </div>
      <div class="offer-price">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="offer-price__item"
        >
          <div class="offer-price__title">
            {{ item.title }}
          </div>
          <div class="offer-price__value">
            от <span>{{ item.sum }}</span>
          </div>
        </div>
      </div>
      <div class="offer-order">
        <nuxt-link :to="link" class="btn btn--small btn--white btn--mobile-large">
          {{ buttonsText[0] }}
        </nuxt-link>
        <nuxt-link :to="link" class="btn btn--small btn--white btn--mobile-large">
          {{ buttonsText[1] }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

interface Item {
  title: string;
  sum: string;
}

export default {
  props: {
    customClass: {
      type: String as PropType<string>,
      default: ''
    },
    title: {
      type: String as PropType<string>,
      required: true
    },
    description: {
      type: String as PropType<string>,
      required: true
    },
    link: {
      type: String as PropType<string>,
      required: true
    },
    img: {
      type: String as PropType<string>,
      required: true
    },
    items: {
      type: Array as PropType<Item[]>,
      required: true
    },
    buttonsText: {
      type: Array as PropType<string[]>,
      required: true
    }
  }
}
</script>
