<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Вклады', href: '/personal/vklady' },
          { title: 'Вклад «Выгодный»' },
        ]"
      />
      <h1>Вклад «Выгодный»</h1>
      <!-- 👉 page-showcase-->
      <page-showcase>
        <template #title>
          Вклад Выгодный. Вкладывай по-крупному
        </template>
        <template #text>
          <div class="list-shield">
            <ul>
              <li>до 12% годовых</li>
              <li>от 10 000 ₽</li>
              <li>срок от 2 месяцев</li>
            </ul>
          </div>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
    </div>
    <!-- 👉 Калькулятор -->
    <div class="back-grey offset offset--small">
      <div class="container">
        <calculator-block :calculator-data="data.deposit" type="deposit" />
      </div>
    </div>

    <br>
    <br>

    <div class="container">
      <div class="columns columns--cards">
        <div class="column col-3 md-col-6">
          <div class="number-box">
            <div class="number-box__title">
              Ставка в год
            </div>
            <div class="number-box__text">
              от <b>12%</b> годовых
            </div>
          </div>
        </div>
        <div class="column col-3 md-col-6">
          <div class="number-box">
            <div class="number-box__title">
              Сумма
            </div>
            <div class="number-box__text">
              до <b>1 000 000 ₽</b>
            </div>
          </div>
        </div>
        <div class="column col-3 md-col-6">
          <div class="number-box">
            <div class="number-box__title">
              Срок
            </div>
            <div class="number-box__text">
              от <b>12</b> месяцев
            </div>
          </div>
        </div>
        <div class="column col-3 md-col-6">
          <div class="number-box">
            <div class="number-box__title">
              Срок рассмотрения
            </div>
            <div class="number-box__text">
              до <b>5</b> дней
            </div>
          </div>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Условия"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Расходование вклад"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Выплата процентов"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Автопродление"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Досрочное востребование вклада"
          :is-active="$faq.activeIndexes[4]"
          @click="$faq.toggleActive(4)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Минимальная гарантированная ставка"
          :is-active="$faq.activeIndexes[5]"
          @click="$faq.toggleActive(5)"
        >
          Какой-то текст
        </faq-item>
      </div>

      <br>
      <br>

      <!-- 👉 Информационный блок с серым фоном -->
      <div class="information-showcase">
        <div class="information-showcase__image">
          <img
            src="/img/icon-vklady.svg"
            alt=""
            loading="lazy"
            width="75"
            height="75"
          >
        </div>
        <div class="information-showcase__content">
          <h3>Страхование вкладов</h3>
          Система обязательного страхования вкладов (ССВ) – специальная
          государственная программа, реализуемая в соответствии с Федеральным
          законом от 23 декабря 2003 г. № 177-ФЗ «О страховании вкладов в банках
          Российской Федерации» (далее – Федеральный закон №177-ФЗ).
        </div>
        <div class="information-showcase__aside">
          <a href="#" class="btn btn--fixed">Подробнее</a>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 Документы -->
      <h3>Документы</h3>
      <div class="columns columns--cards">
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Договор вклада «Выгодный»</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Договор в пользу третьего лица вклад «Выгодный»</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Паспорт вклада «Выгодный»в рублях с 21.12.2023</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 блок с текстом-->
      <h3>Только возобновление договора</h3>
      Прием не осуществляется. Ознакомиться с перечнем и условиями
      возобновляемых вкладов в рублях можно здесь. Ознакомиться с перечнем и
      условиями возобновляемых вкладов в валюте можно <a href="#">здесь</a>.

      <br>
      <br>

      <h3>Прекращение пролонгации договора</h3>
      C 28 марта 2023 прекращается пролонгация вкладов «Мобильный капитал» и
      «Сберегательный пенсионный».Если Вкладчик не востребовал денежные
      средства в дату окончания срока вклада, сумма вклада перечисляется на
      счет вклада «До востребования», и действие настоящего Договора
      прекращается

      <br>
      <br>

      <div class="center">
        <nuxt-link to="" class="btn btn--long btn--full">
          Заполнить заявку
        </nuxt-link>
      </div>
    </div>
    <div class="offset-top offset--small">
      <div class="back-grey">
        <cards-showcase :card-data="cardData.slice(1)">
          <template #title>
            Другие предложения
          </template>
        </cards-showcase>
      </div>
    </div>
  </section>
</template>
<script>
import CalculatorBlock from '~/components/blocks/calculator-block.vue'
import calculatorData from '~/mocks/calculator-data'
import CardsShowcase from '~/components/cards-showcase/index.vue'
import infoDepositsData from '~/mocks/info-deposits-data'

export default {
  components: {
    CalculatorBlock,
    CardsShowcase
  },
  data () {
    return {
      data: calculatorData,
      cardData: infoDepositsData
    }
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(6)
  }
}
</script>
