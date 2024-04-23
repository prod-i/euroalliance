<template>
  <section class="content back-grey">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[{ title: 'Банк-клиент', href: '/biznesu/bank-klient' }]"
      />
      <h1>Полный комплекс услуг для бизнеса</h1>
      <services-block :cards="cardData" />
    </div>
  </section>
</template>
<script lang="ts">
import ServicesBlock from '~/components/blocks/services-block.vue'
import bankClientCardData from '~/mocks/bank-client-card-data'

export default {
  components: {
    ServicesBlock
  },
  data () {
    return {
      cardData: bankClientCardData.list
    }
  }
}
</script>
