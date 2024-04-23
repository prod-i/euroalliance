<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Услуги для бизнеса', href: '/biznesu/uslugi-dlya-biznesa' },
          { title: 'Депозиты для юридических лиц' },
        ]"
      />
      <h1>Депозиты для юридических лиц</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Депозит «Классический»
        </template>
        <template #text>
          Больше доход в короткий срок
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

      <h3>Базовые ставки по депозитам</h3>
      <div class="table-round">
        <table>
          <thead>
            <tr>
              <th>
                <p style="text-align: left">
                  Сумма депозита (рубли)
                </p>
              </th>
              <th>2 нед. — 1 мес.</th>
              <th>1-2 мес.</th>
              <th>2-3 мес.</th>
            </tr>
          </thead>
          <tbody class="table-round-body">
            <tr>
              <td>от 1 до 10 млн руб. (включительно)</td>
              <td style="text-align: center">
                9,0%
              </td>
              <td style="text-align: center">
                10,0%
              </td>
              <td style="text-align: center">
                11,0%
              </td>
            </tr>
            <tr>
              <td>от 10 до 30 млн руб.</td>
              <td style="text-align: center">
                10,0%
              </td>
              <td style="text-align: center">
                11,0%
              </td>
              <td style="text-align: center">
                12,0%
              </td>
            </tr>
            <tr>
              <td>от 30 до 100 млн руб.</td>
              <td style="text-align: center">
                12,0%
              </td>
              <td style="text-align: center">
                12,0%
              </td>
              <td style="text-align: center">
                13,0%
              </td>
            </tr>
            <tr>
              <td>свыше 100 млн руб.</td>
              <td style="text-align: center">
                13,0%
              </td>
              <td style="text-align: center">
                13,2%
              </td>
              <td style="text-align: center">
                13,5%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <br>

      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        Определение ставок по депозитам осуществляется решением кредитного
        комитета Банка, в том числе с учетом периодичности выплаты процентов.
      </div>

      <br>
      <br>

      Определение ставок по депозитам с учетом периодичности выплаты процентов
      осуществляется решением кредитного комитета Банка. Пополнение депозита в
      течение срока договора не предусмотрено. Условия досрочного
      востребования определяются договором

      <br>
      <br>

      <h3>Условия</h3>
      <div class="requisites">
        <div class="requisites-item">
          <div class="requisites-item__title">
            Валюта
          </div>
          Рубли Российской Федерации
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Минимальная сумма
          </div>
          1 000 000 ₽
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Пополнение
          </div>
          Не предусмотрено
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Срок
          </div>
          от 14 дней до 90 дней
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Расходные операции
          </div>
          Не предусмотрено
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Выпаты процентов
          </div>
          В конце срока, ежемесячно, с капитализацией
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Досрочные погашения
          </div>
          Определяются договором
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Основной государственный регистрационный номер
          </div>
          Возможна
        </div>
      </div>

      <br>
      <br>

      <div class="faq-items">
        <faq-item
          title="О страховании средств юридических лиц"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
      </div>

      <br>
      <br>

      <h3>Дополнительные услуги</h3>
      <div class="columns columns--cards">
        <div class="column col-4 sm-col-12">
          <document-card class="square" icon="i">
            <template #title>
              Ежемесячно
            </template>
            <template #subtitle>
              для рерайтера в две строки
            </template>
          </document-card>
        </div>
        <div class="column col-4 sm-col-12">
          <document-card class="square" icon="i">
            <template #title>
              Ежеквартально
            </template>
            <template #subtitle>
              для рерайтера в две строки
            </template>
          </document-card>
        </div>
        <div class="column col-4 sm-col-12">
          <document-card class="square" icon="i">
            <template #title>
              По истечении срока
            </template>
            <template #subtitle>
              договора путем перечисления на расчетный счет Клиента
            </template>
          </document-card>
        </div>
      </div>

      <br>
      <br>
      <nuxt-link class="btn btn--full" to="">
        Подать заявку
      </nuxt-link>
    </div>
    <div class="offset-top offset--small">
      <cards-showcase :card-data="cardData">
        <template #title>
          Полный комплекс услуг для бизнеса
        </template>
      </cards-showcase>
    </div>
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
      cardData: bankServiceCardData.list
    }
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(1)
  }
}
</script>
