<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Услуги для бизнеса', href: '/biznesu/uslugi-dlya-biznesa' },
          { title: 'Расчетно-кассовое обслуживание' },
        ]"
      />
      <h1>Расчетно-кассовое обслуживание</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Регистрация залога — это просто!
        </template>
        <template #text>
          <div class="list-shield">
            <ul>
              <li>0₽ открытие и 0₽ ведение</li>
              <li>
                Интернет-банк и мобильное приложение. Управляйте бизнесом онлайн
              </li>
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
      <!-- 👉 Информационная бизнес-карточка -->
      <h3>Все возможности РКО от Банка «ЕВРОАЛЬЯНС»</h3>
      <business-card :reverse="true">
        <template #img>
          <img src="/temp/icon-slim.svg">
        </template>
        <template #text>
          <div class="list-shield">
            <ul>
              <li>
                В кратчайшие сроки открывать расчетные, текущие, бюджетные,
                ссудные и другие счета
              </li>
              <li>
                Получать консультации о порядке проведения банковских операций
              </li>
              <li>
                Осуществлять расчеты в российских рублях и в иностранной
                валюте
              </li>
              <li>Осуществлять куплю-продажу иностранной валюты</li>
              <li>Осуществлять документарные операции</li>
              <li>Поручать банку выполнение функций валютного контроля</li>
              <li>Получать полный комплекс кассовых услуг</li>
            </ul>
          </div>
        </template>
      </business-card>

      <br>
      <br>

      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        <b>Возможность управления счетом через систему «Банк-Клиент»</b> <br>
        Банк предлагает своим Клиентам работать через систему «Банк-Клиент»,
        дающую возможность управления счетом непосредственно из офиса через
        Интернет
      </div>

      <br>
      <br>

      <h3>Документы</h3>
      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Для юридических лиц"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Для индивидуальных предпринимателей"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Тарифы"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          <!-- 👉 Документы -->
          <div>
            <div class="columns columns--cards">
              <div class="column col-6 md-col-12">
                <document-card>
                  <template #title>
                    <a href="#">Аренда индивидуального банковского сейфа</a>
                  </template>
                  <template #size>
                    278 kB
                  </template>
                </document-card>
              </div>
              <div class="column col-6 md-col-12">
                <document-card>
                  <template #title>
                    <a href="#">Тарифы по банковским операциям ЮЛ и ИП с 07.11.2023</a>
                  </template>
                  <template #size>
                    278 kB
                  </template>
                </document-card>
              </div>
            </div>
          </div>
        </faq-item>
      </div>

      <br>
      <br>

      <!-- 👉 Блок с серым фоном -->
      <div class="step-box back-grey">
        <div class="step-box__header">
          <div class="step-box__title">
            Открыть счет для бизнеса просто
          </div>
        </div>
        <div class="step-box__content">
          <ul>
            <li>Отправьте заявку на сайте или по телефону</li>
            <li>Получите консультацию по телефону</li>
            <li>Оформим документы без очередей</li>
          </ul>
        </div>
        <div class="offset-footer">
          <a href="#" class="btn btn--full">Оставить заявку</a>
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
import BusinessCard from '~/components/cards/business-card.vue'
import bankServiceCardData from '~/mocks/bank-service-card-data'

export default {
  components: {
    CardsShowcase,
    BusinessCard
  },
  data () {
    return {
      cardData: bankServiceCardData.list
    }
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(3)
  }
}
</script>
