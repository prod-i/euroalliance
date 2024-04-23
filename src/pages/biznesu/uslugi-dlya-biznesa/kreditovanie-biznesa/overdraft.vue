<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Услуги для бизнеса', href: '/biznesu/uslugi-dlya-biznesa' },
          {
            title: 'Кредитование бизнеса',
            href: '/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa',
          },
          { title: 'Овердрафт' },
        ]"
      />
      <h1>Овердрафт</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Кредит для срочных платежей при недостатке средств
        </template>
        <template #text>
          Текст для рерайта
        </template>
        <template #link>
          <nuxt-link to="" class="btn btn--full btn--white">
            Оставить заявку
          </nuxt-link>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div class="columns">
        <div class="column col-3">
          <div class="number-box">
            <div class="number-box__title">
              Ставка в год
            </div>
            <div class="number-box__text">
              от <b>18%</b> годовых
            </div>
          </div>
        </div>
        <div class="column col-3">
          <div class="number-box">
            <div class="number-box__title">
              Сумма
            </div>
            <div class="number-box__text">
              до <b>60 000 000 ₽</b>
            </div>
          </div>
        </div>
        <div class="column col-3">
          <div class="number-box">
            <div class="number-box__title">
              Срок
            </div>
            <div class="number-box__text">
              от <b>10</b> лет
            </div>
          </div>
        </div>
        <div class="column col-3">
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

      <!-- 👉 Информационная бизнес-карточка -->
      <div>
        <business-card>
          <template #img>
            <img src="/temp/icon-slim.svg">
          </template>
          <template #title>
            Цели
          </template>
          <template #text>
            <div class="list-shield">
              <ul>
                <li>Инвестиций в свой бизнес</li>
                <li>
                  Приобретения оборудования, техники, коммерческой недвижимости
                </li>
                <li>Пополнения оборотного капитала</li>
                <li>Рефинансирование задолженности в других банках</li>
                <li>На развитие бизнеса</li>
              </ul>
            </div>
          </template>
        </business-card>
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <h3>Условия</h3>
      <div class="faq-items">
        <faq-item
          title="Цели кредитования"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Сумма и срок"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Отсрочка"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Залог"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Поручительство"
          :is-active="$faq.activeIndexes[4]"
          @click="$faq.toggleActive(4)"
        >
          <h4>Для заемщиков ЮЛ</h4>
          Для заемщиков ЮЛ поручительство физических лиц – собственников
          бизнеса, владеющих долей 20% и более уставного капитала
          <br>
          <br>
          <h4>Для заемщиков ИП</h4>
          поручительство супруга/супруги (в случае если Заемщик не состоит в
          браке, то обязательно предоставление поручительства третьего лица или
          страхование жизни и здоровья Заемщика)
        </faq-item>
        <faq-item
          title="Порядок погашения"
          :is-active="$faq.activeIndexes[5]"
          @click="$faq.toggleActive(5)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Требования к заемщику"
          :is-active="$faq.activeIndexes[6]"
          @click="$faq.toggleActive(6)"
        >
          Какой-то текст
        </faq-item>
      </div>

      <br>
      <br>
      <div class="list-shield">
        <h3>Преимущества кредита в форме «овердрафт»</h3>
        <ul>
          <li>Непрерывность прохождения платежей</li>
          <li>
            Одновременная работа пользователя со справочниками несначисление
            процентов только на объем реально используемых заемных
            средствкольких организаций;
          </li>
          <li>
            Автоматическое погашение кредита за счет поступлений денежных
            средств на расчетный счет
          </li>
          <li>
            Возможность увеличения лимита по овердрафту при увеличении оборотов
            по расчетному счету
          </li>
          <li>
            Соглашение об овердрафтном кредитовании оформляется один раз и
            действует в течение года
          </li>
        </ul>
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
      <br>
      <br>
    </div>
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
    this.$faq.setArrayLength(7)
  }
}
</script>
