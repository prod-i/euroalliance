<template>
  <div class="document" :class="{'no-border': icon === 'pdf'}">
    <div class="document-image">
      <span v-if="icon === 'pdf'">PDF</span>
      <img v-if="icon === 'i'" src="/img/i.png" alt="информационная иконка">
      <img v-if="icon === 'img'" src="/temp/2.png" alt="иконка">
    </div>
    <div class="document-content">
      <span v-if="$slots.size" class="document-info">
        <slot name="size" />
      </span>
      <slot name="title" />
      <div v-if="$slots.subtitle" class="document-description">
        <slot name="subtitle" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String as PropType<string>,
      default: 'pdf'
    }
  }
})
</script>
