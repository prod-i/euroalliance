<template>
  <div class="columns columns--cards">
    <div
      v-for="{ id, icon, title, link } in cards"
      :key="id"
      class="column col-2-5 lg-col-3 md-col-4 sm-col-12"
    >
      <service-card :card="{ icon, title, link }" />
    </div>
  </div>
</template>

<script>
import ServiceCard from '~/components/cards/service-card.vue'
import serviceCardData from '~/mocks/service-card-data'
export default {
  components: {
    ServiceCard
  },
  props: {
    cards: {
      type: Array
    }
  },
  data () {
    return {
      cardData: serviceCardData
    }
  }
}
</script>
