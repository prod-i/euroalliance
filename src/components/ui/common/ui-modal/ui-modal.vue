<template>
  <transition>
    <div
      v-if="modalShow"
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-overlay" @click.self="close">
        <div class="modal-main" :class="modalSize">
          <div class="modal-title">
            <slot name="title" />
          </div>
          <button
            type="button"
            class="modal-close"
            aria-label="Close modal"
            @click="close"
          >
            <svg width="24" height="24">
              <use xlink:href="#icon-close" />
            </svg>
          </button>
          <div class="modal-content">
            <slot name="body" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UiModal',
  props: {
    modalShow: {
      type: Boolean,
      default: false
    },
    modalSize: {
      type: String,
      default: ''
    }
  },
  watch: {
    modalShow (value) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      const BODY = document.body

      if (value) {
        BODY.style.marginRight = scrollbarWidth + 'px'
        BODY.style.overflow = 'hidden'
      } else {
        BODY.style.marginRight = 0 + 'px'
        BODY.style.overflow = ''
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
})
</script>
