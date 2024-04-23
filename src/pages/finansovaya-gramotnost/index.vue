<template>
  <section class="content back-grey">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Финансовая грамотность' }]" />
      <h1>Финансовая грамотность</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Учитесь правильно распределять средства
        </template>
        <template #text>
          Финансовая грамотность=ваше материальное благополучие. Учитесь
          правильно распределять средства для вашей жизненной стабильности и
          благополучия
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div class="columns columns--cards">
        <div
          v-for="{ id, icon, title, link } in cardData.list"
          :key="id"
          class="column col-2-5 lg-col-3 md-col-4 sm-col-12"
        >
          <service-card :card="{ icon, title, link }" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import ServiceCard from '~/components/cards/service-card.vue'
import finServiceData from '~/mocks/fin-service-data'

export default {
  components: {
    ServiceCard
  },
  data () {
    return {
      cardData: finServiceData
    }
  }
}
</script>
