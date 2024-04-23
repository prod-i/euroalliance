<template>
  <div class="services">
    <nuxt-link :to="card.link" class="services-link" />
    <div class="services-image">
      <img :src="card.icon" :alt="card.title" loading="lazy">
    </div>
    <div class="services-title">
      {{ card.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  props: {
    card: {
      type: Object as PropType<{ icon: string; title: string, link: string}>,
      required: true
    }
  }
}
</script>
