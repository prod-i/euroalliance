<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Кредиты', href: '/personal/kredit' },
          { title: 'Кредит наличными' },
        ]"
      />
      <h1>Кредит наличными</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Кредит наличными с реальной ставкой
        </template>
        <template #text>
          <div class="list-shield">
            <ul>
              <li>0% дополнительных комиссий и 0₽ дополнительных страховок</li>
              <li>0% дополнительных комиссий и до 5 лет максимальный срок</li>
            </ul>
          </div>
        </template>
        <template #link>
          <nuxt-link to="" class="btn btn--full btn--white">
            Подать заявку
          </nuxt-link>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
    </div>
    <!-- 👉 Калькулятор -->
    <div class="back-grey offset offset--small">
      <div class="container">
        <calculator-block :calculator-data="data.credit" type="credit" />
      </div>
    </div>

    <br>
    <br>

    <div class="container">
      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Требования к заемщику"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Ставки"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Другие условия"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
      </div>

      <br>
      <br>

      <!-- 👉 Документы -->
      <h3>Документы</h3>
      <div class="columns columns--cards">
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Анкета физического лица на получение кредита</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Приложение к анкете</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Анкета физического лица на получение кредита</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Приложение к анкете</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Анкета физического лица на получение кредита</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
      </div>

      <div class="offset offset--small center">
        <nuxt-link to="" class="btn btn--long btn--full">
          Заполнить заявку
        </nuxt-link>
      </div>
    </div>
    <div class="back-grey">
      <cards-showcase :card-data="cardData.slice(1)">
        <template #title>
          Другие предложения
        </template>
      </cards-showcase>
    </div>
  </section>
</template>
<script>
import CalculatorBlock from '~/components/blocks/calculator-block.vue'
import calculatorData from '~/mocks/calculator-data'
import CardsShowcase from '~/components/cards-showcase/index.vue'
import infoCreditsData from '~/mocks/info-credits-data'

export default {
  components: {
    CalculatorBlock,
    CardsShowcase
  },
  data () {
    return {
      data: calculatorData,
      cardData: infoCreditsData
    }
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(3)
  }
}
</script>
