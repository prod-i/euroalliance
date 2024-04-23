<template>
  <section class="content">
    <div class="container">
      <!-- 🤟 Хлебные крошки-->
      <ui-breadcrumbs :pages="[{ title: 'Банковские карты' }]" />
      <h1>Банковские карты</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Банковские карты
        </template>
        <template #text>
          Для всех держателей карт Банка «ЕВРОАЛЬЯНС» стало доступно новое
          мобильное приложение банка для физических лиц
        </template>
        <template #link>
          <nuxt-link
            to="/personal/denezhnye-perevody/perevod-sredstv-s-karty-na-kartu"
            class="btn btn--full btn--white"
          >
            Переводы с карту на карту
          </nuxt-link>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <!-- 👉 CardBlock -->
      <card-block />
    </div>

    <br>
    <br>
    <!-- 👉 AppMobileBlock-->
    <app-mobile-block />

    <br>
    <br>

    <div class="container">
      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Все возможности с картами банка «ЕВРОАЛЬЯНС»"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="О продлении срока действия карт мир"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="О работе платёжных систем visa и mastercard"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
      </div>
    </div>
  </section>
</template>
<script>
import CardBlock from '~/components/blocks/cards-block.vue'
import AppMobileBlock from '~/components/blocks/app-mobile-block.vue'

export default {
  components: {
    CardBlock,
    AppMobileBlock
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(3)
  }
}
</script>
