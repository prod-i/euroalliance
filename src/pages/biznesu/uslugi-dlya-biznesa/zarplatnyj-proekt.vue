<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Услуги для бизнеса', href: '/biznesu/uslugi-dlya-biznesa' },
          { title: 'Зарплатный проект' },
        ]"
      />
      <h1>Зарплатный проект</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Зарплатный проект
        </template>
        <template #text>
          Снизьте риски при выдаче наличных, обеспечьте конфиденциальность,
          сэкономьте время бухгалтера и уменьшите бумажный документооборот
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
        <div class="list-shield">
          <ul>
            <li>Быстрое зачисление</li>
            <li>
              Выдача карт без визита в банк (сотрудник банка приедет к вам на
              предприятие)
            </li>
            <li>
              Всегда онлайн (Современный интернет-банк для управления зарплатным
              проектом)
            </li>
            <li>
              Без комиссии (Выпускаем карты и зачисляем зарплату бесплатно)
            </li>
          </ul>
        </div>
      </div>
      <br>
      <br>
      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        Для простоты и быстроты осуществления расчетов с банком можно
        использовать систему Банк-Клиент — систему электронного обмена
        информацией в режиме реального времени (on-line), что значительно
        облегчает работу бухгалтера. (информация про клиент-банк и ссылка для
        входа на него)
      </div>
      <br>
      <br>
      <div class="columns columns--cards">
        <div class="column col-6 md-col-12">
          <div class="information information--grey">
            <h3>Преимущества для предприятия</h3>
            <div class="list-shield">
              <ul>
                <li>Комфортное обслуживание в банке. Персональный менеджер</li>
                <li>
                  Зарплатный проект дает предприятию реальную возможность
                  сэкономить
                </li>
                <li>Минимизировать кассовые операции</li>
                <li>
                  Позволяет сохранить конфиденциальность информации о зарплате
                </li>
                <li>
                  Устранить риск, связанный с перевозкой и хранением наличных
                </li>
                <li>
                  Сводятся на «нет» дополнительные расходы на инкассацию,
                  оборудование и содержание кассовых кабин, обработку и хранение
                  документов (ведомостей, квитанций)
                </li>
                <li>
                  Возможность установки банкомата на территории предприятия
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column col-6 md-col-12">
          <div class="information information--grey information--back">
            <h3>Преимущества для сотрудников</h3>
            <div class="list-shield">
              <ul>
                <li>Выплата заработной платы без задержек</li>
                <li>
                  Переводы без комиссий с карты банка на любую карту стороннего
                  банка (до 100 тысяч рублей в месяц)
                </li>
                <li>
                  Бесплатное снятие наличных в любом банкомате страны (до 5
                  операций в месяц)
                </li>
                <li>
                  Карта банка — современный платежный инструмент: покупки в
                  любых магазинах, интернет-покупки, оплата ЖКХ и других
                  платежей через приложение банка
                </li>
                <li>
                  Рабочее приложение банка на любом смартфоне (ссылка на
                  приложение)
                </li>
                <li>Кэш-бек платежной системы МИР</li>
              </ul>
            </div>
          </div>
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
            Зарплатный проект и РКО в одном месте
          </template>
          <template #text>
            <div class="list-shield">
              <ul>
                <li>Индивидуальный менеджер</li>
                <li>Отсутствие комиссии за выплату зарплаты сотрудникам</li>
                <li>Индивидуальные условия на продукты банка</li>
              </ul>
            </div>
          </template>
          <template #btn>
            <nuxt-link to="" class="btn btn--fixed">
              Оставить заявку
            </nuxt-link>
          </template>
        </business-card>
      </div>
    </div>

    <br>
    <br>

    <div class="container">
      <!-- 👉 Документы -->
      <h3>Документы</h3>
      <div class="columns columns--cards">
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Договор банковского счета в валюте</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Состав представляемой информации по валютным операциям</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Договор банковского счета в валюте</a>
            </template>
            <template #size>
              77 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Состав представляемой информации по валютным операциям</a>
            </template>
            <template #size>
              77 kB
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
<script lang="ts">
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
