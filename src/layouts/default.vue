<template>
  <div class="wrapper">
    <ui-header
      :user-type="{
        business: /^\/biznesu(\/|$)/.test($route.path),
      }"
    />
    <transition>
      <main class="wrap">
        <Nuxt />
      </main>
    </transition>
    <ui-footer />
    <icon-symbol />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UiFooter from '~/components/ui/footer/index.vue'
import UiHeader from '~/components/ui/header/index.vue'
import IconSymbol from '~/components/ui/icons/icon-symbol/index.vue'

export default Vue.extend({
  components: {
    UiFooter,
    UiHeader,
    IconSymbol
  }
})
</script>
