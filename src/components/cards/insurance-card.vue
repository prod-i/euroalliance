<template>
  <div class="card-event">
    <div class="card-event__content">
      <div class="card-event__image">
        <img :src="card.icon" :alt="card.title" loading="lazy">
      </div>
      <div class="card-event__text">
        <div class="card-event__title">
          {{ card.title }}
        </div>
        <span>{{ card.description }}</span>
      </div>
      <div class="card-event__footer">
        <nuxt-link
          :to="card.link"
          class="btn btn--white btn--small btn--full"
        >
          Оформить страхование
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  props: {
    card: {
      type: Object as PropType<{
        id: number;
        link: string;
        icon: string;
        title: string;
        description: string;
        img: string;
      }>,
      required: true
    }
  }
}
</script>
