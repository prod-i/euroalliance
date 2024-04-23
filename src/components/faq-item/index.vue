<template>
  <div class="faq-item" :class="{ active: isActive }">
    <div class="faq-item__title" @click="$emit('click')">
      {{ title }}
      <svg width="20" height="20" aria-hidden="true">
        <use xlink:href="#icon-down" />
      </svg>
    </div>
    <div class="faq-item__content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    },
    isActive: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  }
})
</script>
