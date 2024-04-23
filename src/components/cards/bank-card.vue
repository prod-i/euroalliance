<template>
  <div class="card">
    <div class="card-cover">
      <img :src="img" :alt="title" width="460" height="290" loading="lazy">
    </div>
    <div class="card-content">
      <div class="card-title">
        {{ title }}
      </div>
      <div class="card-text">
        <div class="card-text__info">
          {{ description }}
        </div>
        <div class="card-text__list">
          <ul>
            <template v-for="(item, index) in items">
              <li v-if="index < 3" :key="index">
                {{ item }}
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <nuxt-link
          to="/"
          class="btn btn--medium btn--grey btn--mobile-large"
        >
          Оформить карту
        </nuxt-link>
        <nuxt-link
          :to="link"
          class="btn btn--medium btn--white btn--mobile-large"
        >
          Подробнее
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  props: {
    type: {
      type: String as PropType<string>,
      required: true
    },
    title: {
      type: String as PropType<string>,
      required: true
    },
    description: {
      type: String as PropType<string>,
      required: true
    },
    img: {
      type: String as PropType<string>,
      required: true
    },
    link: {
      type: String as PropType<string>,
      required: true
    },
    items: {
      type: Array as PropType<string[]>,
      required: true
    }
  }
}
</script>
