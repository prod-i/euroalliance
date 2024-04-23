<template>
  <div class="tab-item" :class="{ 'active': isActive }" @click="$emit('click')">
    {{ title }} <span v-if="count > 0">{{ count }}</span>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue'

export default {
  name: 'TabDefault',
  props: {
    id: {
      type: String as PropType<string>,
      default: null
    },
    title: {
      type: String as PropType<string>,
      required: true
    },
    count: {
      type: Number as PropType<number>,
      default: null
    },
    isActive: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  }
}
</script>
