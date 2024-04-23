<template>
  <section class="content back-grey">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[{ title: 'Сервисы банка' }]"
      />
      <h1>Сервисы банка</h1>
      <services-block :cards="cardData" />
    </div>
  </section>
</template>
<script lang="ts">
import ServicesBlock from '~/components/blocks/services-block.vue'
import bankServiceCardData from '~/mocks/bank-service-card-data'
export default {
  components: {
    ServicesBlock
  },
  data () {
    return {
      cardData: bankServiceCardData.list
    }
  }
}
</script>
