<template>
  <div class="business-card" :class="{ 'business-card--reverse': reverse }">
    <div class="business-card__aside">
      <slot name="img" />
    </div>
    <div class="business-card__content">
      <div v-if="$slots.title" class="business-card__title">
        <slot name="title" />
      </div>
      <div class="business-card__text">
        <slot name="text" />
      </div>
      <div class="business-card__footer">
        <slot name="btn" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  props: {
    reverse: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  }
}
</script>
