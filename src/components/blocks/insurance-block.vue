<template>
  <div>
    <!-- 🎩 -->
    <div v-if="$route.path === '/'" class="head">
      <div class="head-content">
        <div class="head-title">
          Страхование
        </div>
      </div>
      <div class="head-aside">
        <div class="tabs tabs--white">
          <nuxt-link to="/personal/strahovanie">
            <div class="tab-item">
              Все продукты
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="columns columns--cards">
      <template
        v-for="{ id, link, title, description, icon, img } in cardData.list"
      >
        <div :key="id" class="column col-3 md-col-4 sm-col-12">
          <insurance-card :card="{ id, link, title, description, icon, img }" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import InsuranceCard from '~/components/cards/insurance-card.vue'
import insuranceCardData from '~/mocks/insurance-card-data'
export default {
  components: {
    InsuranceCard
  },
  data () {
    return {
      cardData: insuranceCardData
    }
  }
}
</script>
