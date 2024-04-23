<template>
  <section class="content back-grey">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[{ title: 'Сервисы банка', href: '/personal/servisy' }]"
      />
      <h1>Сервисы банка</h1>
      <services-block :cards="cardData" />
    </div>
  </section>
</template>
<script lang="ts">
import ServicesBlock from '~/components/blocks/services-block.vue'
import serviceCardData from '~/mocks/service-card-data'

export default {
  components: {
    ServicesBlock
  },
  data () {
    return {
      cardData: serviceCardData.list
    }
  }
}
</script>
