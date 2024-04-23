<template>
  <section class="content back-grey">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Страхование' }]" />
      <h1>Страхование</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Страхование
        </template>
        <template #text>
          В соответствие с Федеральным законом «О страховании вкладов в банках
          Российской Федерации» № 177-ФЗ
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <insurance-block />
    </div>
  </section>
</template>
<script>
import InsuranceBlock from '~/components/blocks/insurance-block.vue'

export default {
  components: {
    InsuranceBlock
  }
}
</script>
