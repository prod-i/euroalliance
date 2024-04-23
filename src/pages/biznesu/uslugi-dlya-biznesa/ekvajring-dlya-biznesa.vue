<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Услуги для бизнеса', href: '/biznesu/uslugi-dlya-biznesa' },
          { title: 'Эквайринг для бизнеса' },
        ]"
      />
      <h1>Эквайринг для бизнеса</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Заголовок баннера
        </template>
        <template #text>
          Принимайте платежи без проблем — решения для вашего бизнеса
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
      <div class="container container--small">
        <h3>
          Установив терминал, предприятие сможет принимать к оплате следующие виды карт
        </h3>
        <div class="list-shield">
          <ul>
            <li>
              Карты международной платежной системы Visa (в том числе Visa Electron)
            </li>
            <li>
              Выдача карт без визита в банк (сотрудник банка приедет к вам на предприятие)
            </li>
            <li>
              Карты международной платежной системы Mastercard (в том числе Cirrus Maestro)
            </li>
            <li>Карты национальной платежной системы Мир</li>
          </ul>
        </div>
      </div>
    </div>

    <br>
    <br>

    <!-- 👉 Информационная бизнес-карточка -->
    <div class="back-grey offset offset--small">
      <div class="container">
        <business-card>
          <template #img>
            <img src="/temp/icon-slim.svg">
          </template>
          <template #title>
            Прием к оплате банковских карт позволит предприятию
          </template>
          <template #text>
            <div class="list-shield">
              <ul>
                <li>Повысить скорость и качество обслуживания клиентов;</li>
                <li>Снизить риски и затраты по работе с наличностью;</li>
                <li>Повысить престиж фирмы в глазах покупателей.</li>
              </ul>
            </div>
          </template>
        </business-card>
      </div>
    </div>

    <br>
    <br>

    <div class="container">
      <div class="container container--small">
        <h3>АО КИБ «ЕВРОАЛЬНС» осуществляет</h3>
        <div class="list-shield">
          <ul>
            <li>
              Установку терминала, необходимого для приема к оплате банковских
              карт;
            </li>
            <li>
              Обучение персонала технике проведения операций с банковскими
              картами;
            </li>
            <li>Обеспечение сервисного обслуживания оборудования</li>
          </ul>
        </div>

        <br>
        <br>

        <h3>Суть зарплатных проектов в следующем</h3>
        При оплате товара или услуги по картам клиентами Вашего предприятия,
        возмещение денежных средств происходит на расчетный счет, открытый в
        Банке, в течение дня, следующего за датой совершения операции
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
  }
}
</script>
