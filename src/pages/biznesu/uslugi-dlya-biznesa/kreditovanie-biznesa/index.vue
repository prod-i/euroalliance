<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Услуги для бизнеса', href: '/biznesu/uslugi-dlya-biznesa' },
          { title: 'Кредитование бизнеса' },
        ]"
      />
      <h1>Кредитование бизнеса</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Кредит для бизнеса на любые цели
        </template>
        <template #text>
          <div class="list-shield">
            <ul>
              <li>Индивидуальный подход к каждому клиенту</li>
              <li>Гибкие условия кредитования</li>
              <li>Рерайтеру написать третье преимущество</li>
            </ul>
          </div>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div>
        <h3>На недвижимость, транспорт, пополнение оборотных средств</h3>
        Банк «ЕВРОАЛЬЯНС» предлагает различные формы кредитования для
        юридических лиц и индивидуальных предпринимателей
      </div>

      <br>
      <br>

      <!-- 👉 Ссылки на документы -->
      <div class="columns columns--cards">
        <div
          v-for="(data, index) in creditsData"
          :key="index"
          class="column col-3 lg-col-4 md-col-6 sm-col-12"
        >
          <document-card class="square" icon="img">
            <template #title>
              <nuxt-link :to="data.link">
                {{ data.title }}
              </nuxt-link>
            </template>
          </document-card>
        </div>
      </div>
    </div>
    <br>
    <br>
    <cards-showcase :card-data="cardData">
      <template #title>
        Полный комплекс услуг для бизнеса
      </template>
    </cards-showcase>
  </section>
</template>
<script>
import CardsShowcase from '~/components/cards-showcase/index.vue'
import bankServiceCardData from '~/mocks/bank-service-card-data'

export default {
  components: {
    CardsShowcase
  },
  data () {
    return {
      creditsData: bankServiceCardData.credits,
      cardData: bankServiceCardData.list
    }
  }
}
</script>
