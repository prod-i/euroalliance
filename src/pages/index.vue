<template>
  <section class="content content-inside">
    <!-- 👉 showcase -->
    <showcase />
    <!-- 👉 Потребительские кредиты -->
    <div class="offset">
      <div class="container">
        <credits-block />
      </div>
    </div>
    <!-- 👉 Банковские вклады -->
    <div class="offset back-grey">
      <div class="container">
        <deposits-block />
      </div>
    </div>
    <!-- 👉 Карты -->
    <div class="offset">
      <div class="container">
        <div class="head">
          <div class="head-content">
            <div class="head-title">
              Карты
            </div>
          </div>
          <div class="head-aside">
            <nuxt-link to="/personal/karty" class="tab-item">
              Смотреть все карты
            </nuxt-link>
          </div>
        </div>
        <div class="cards">
          <template v-for="(bankCard, index) in bankCardData">
            <bank-card
              v-if="index < 2"
              :key="index"
              :type="bankCard.type"
              :title="bankCard.title"
              :description="bankCard.description"
              :img="bankCard.img"
              :link="bankCard.link"
              :items="bankCard.items"
            />
          </template>
        </div>
      </div>
    </div>
    <div class="offset back-grey">
      <div class="container">
        <!-- 👉 Страхование -->
        <insurance-block />
        <!-- 👉 Калькулятор -->
        <div class="offset-top">
          <calculator-block :calculator-data="data.credit" type="credit" />
        </div>
      </div>
    </div>
    <!-- 👉 Денежные переводы -->
    <div class="offset">
      <div class="container">
        <div class="transfers">
          <div class="transfers-content">
            <div class="head-title">
              Денежные переводы
            </div>
            В офисах Банка «ЕВРОАЛЬЯНС» (кроме ДО «Московский») Вы можете
            осуществить денежные переводы с помощью системы денежных переводов
            <div class="transfers-footer">
              <a href="#" class="btn btn--full">Подробнее</a>
            </div>
          </div>
          <div class="transfers-aside">
            <img
              src="img/korona-pay.svg"
              alt=""
              width="340"
              height="85"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 👉 Мобильное приложение банка -->
    <app-mobile-block />

    <!-- 👉 Курсы обмена валюты -->
    <div class="offset">
      <div class="container">
        <div class="exchange">
          <div class="exchange-aside">
            <div class="head-title">
              Курсы обмена&nbsp;валюты
            </div>
            <div class="input-info">
              обновленно 31 декабря 2023 года в 15:29
            </div>
            <div class="exchange-aside__footer sm-hidden">
              <nuxt-link to="/kursy-valyut" class="btn btn--grey btn--full">
                Узнать курс валют
              </nuxt-link>
            </div>
          </div>
          <div class="exchange-content">
            <exchange-rate :selected="selected" :city="cityData.list" />
          </div>
          <nuxt-link to="/kursy-valyut" class="btn btn--grey btn--full sm-visible">
            Узнать курс валют
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- 👉 Наши сервисы -->
    <cards-showcase :card-data="cardData">
      <template #title>
        Наши сервисы
      </template>
    </cards-showcase>

    <!-- 👉 СЕО-заголовок -->
    <div class="offset">
      <div class="container">
        <div class="head-title">
          СЕО-заголовок
        </div>
        <p>
          В офисах Банка «ЕВРОАЛЬЯНС» (кроме Московского филиала) Вы можете
          осуществить денежные переводы с помощью систем денежных переводов.
          Получайте не только кешбэк с каждой покупки, но и ежемесячный процент
          на остаток. Обслуживание и снятие наличных в банкоматах Евроальянс и
          партнеров — бесплатно при выполнении простых условий. Сделайте первый
          шаг к Прибыли!
        </p>
      </div>
    </div>
    <!-- 👉 Остались вопросы? -->
    <any-questions-block />
  </section>
</template>
<script>
import Showcase from '~/components/showcase/index.vue'
import InsuranceBlock from '~/components/blocks/insurance-block.vue'
import CalculatorBlock from '~/components/blocks/calculator-block.vue'
import CreditsBlock from '~/components/blocks/credits-block.vue'
import DepositsBlock from '~/components/blocks/deposits-block.vue'
import AppMobileBlock from '~/components/blocks/app-mobile-block.vue'
import AnyQuestionsBlock from '~/components/blocks/any-questions-block.vue'
import calculatorData from '~/mocks/calculator-data'
import BankCard from '~/components/cards/bank-card.vue'
import bankCardData from '~/mocks/bank-card-data'
import ExchangeRate from '~/components/exchange-rate/index.vue'
import exchangeRateData from '~/mocks/exchange-rate-data'
import serviceCardData from '~/mocks/service-card-data'
import CardsShowcase from '~/components/cards-showcase/index.vue'

export default {
  components: {
    Showcase,
    InsuranceBlock,
    CalculatorBlock,
    CreditsBlock,
    DepositsBlock,
    AppMobileBlock,
    AnyQuestionsBlock,
    BankCard,
    ExchangeRate,
    CardsShowcase
  },
  data () {
    return {
      data: calculatorData,
      bankCardData,
      selected: 'Фурманов',
      cityData: exchangeRateData,
      cardData: serviceCardData.list
    }
  }
}
</script>
