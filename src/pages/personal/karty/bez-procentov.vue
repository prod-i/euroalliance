<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Карты', href: '/personal/karty/' },
          { title: 'Кредитная карта – 50 дней без процентов' },
        ]"
      />
      <h1>Кредитная карта – 50 дней без процентов</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Оформите «Кредитную» карту в Банке «ЕВРОАЛЬЯНС» и получите
        </template>
        <template #text>
          <div class="list-shield">
            <ul>
              <li>50 дней без процентов</li>
              <li>индивидуальный лимит</li>
              <li>отсутствует обязательный ежемесячный платеж</li>
            </ul>
          </div>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <!-- 👉 Блок с серым фоном -->
      <div class="step-box back-grey">
        <div class="step-box__header">
          <div class="step-box__title">
            Как это работает
          </div>
        </div>
        <div class="step-box__content">
          <ul>
            <li>Закажите карту в офисе банка, по телефону или оставьте заявку</li>
            <li>Получите индивидуальный лимит денежных средств</li>
            <li>Совершайте покупки и не платите проценты в течение льготного периода</li>
          </ul>
        </div>
        <div class="offset-footer">
          <a href="#" class="btn btn--full">Оставить заявку</a>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Программа для «Кредитной» карты с льготным периодом"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
      </div>

      <br>
      <br>

      <!-- 👉 Информационный блок с зелёным фоном -->
      <div
        class="information-showcase information-showcase--green information-showcase--center"
      >
        <div class="information-showcase__image">
          <img
            src="/img/icon-mir.svg"
            alt=""
            width="75"
            height="75"
            loading="lazy"
          >
        </div>
        <div class="information-showcase__content">
          <h3>Кешбэк до 30% по программе «Привет Мир»</h3>
        </div>
        <div class="information-showcase__aside">
          <a href="#" class="btn btn--fixed">Подробнее</a>
        </div>
      </div>
    </div>

    <br>
    <br>

    <!-- 👉 Мобильное приложение банка -->
    <app-mobile-block />

    <br>
    <br>

    <div class="container">
      <!-- 👉 Ссылки на документы -->
      <div class="columns columns--cards">
        <div class="column col-6 sm-col-12">
          <nuxt-link
            to="/personal/karty/tarify-i-dokumenty-po-bankovskim-kartam"
            class="box-link"
          >
            <div class="box-link__image">
              <img src="/temp/icon.svg" alt="" loading="lazy">
            </div>
            <div class="box-link__title">
              Тарифы и документы по банковским картам
            </div>
          </nuxt-link>
        </div>
        <div class="column col-6 sm-col-12">
          <nuxt-link
            to="/personal/karty/rukovodstvo-po-ispolzovaniyu-bankovskoj-karty"
            class="box-link"
          >
            <div class="box-link__image">
              <img src="/temp/icon.svg" alt="" loading="lazy">
            </div>
            <div class="box-link__title">
              Руководство по использованию карты
            </div>
          </nuxt-link>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Условия"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Требования"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Документы"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          Какой-то текст
        </faq-item>
      </div>
    </div>

    <br>
    <br>

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
import AppMobileBlock from '~/components/blocks/app-mobile-block.vue'
import CardsShowcase from '~/components/cards-showcase/index.vue'
import bankCardData from '~/mocks/bank-card-data'

export default {
  components: {
    AppMobileBlock,
    CardsShowcase
  },
  data () {
    return {
      cardData: bankCardData
    }
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(4)
  }
}
</script>
