<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Услуги для бизнеса', href: '/biznesu/uslugi-dlya-biznesa' },
          { title: 'Аккредитивы' },
        ]"
      />
      <h1>Аккредитивы</h1>

      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Платите за ЖКХ картой!
        </template>
        <template #text>
          Безопасные и удобные безналичные расчеты по любым сделкам
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div>
        Документарный аккредитив представляет собой денежное обязательство банка
        принятое на основании поручения покупателя выплатить определённую сумму
        продавцу (физическому или юридическому лицу) в соответствии с условиями,
        указанными в документе
        <br>
        <br>
        Аккредитивы используются для минимизации кредитных рисков (рисков
        неисполнения контрактных обязательств). Он позволяет получить указанную
        в аккредитиве сумму полностью или частями в течении определённого
        периода времени.
        <br>
        <br>
        При этом банк выступает в качестве посредника между продавцом и
        покупателем, так как через него после предоставления документов
        совершается платёж.
      </div>

      <br>
      <br>

      <!-- 👉 Информационная бизнес-карточка -->
      <div>
        <h3>Сделки через документарный аккредитив, Вы получаете</h3>
        <business-card :reverse="true">
          <template #img>
            <img src="/temp/icon-slim.svg">
          </template>
          <template #text>
            <div class="list-shield">
              <ul>
                <li>
                  гарантию платёжеспособности и финансовой обеспеченности
                  покупателя;
                </li>
                <li>
                  стремление со стороны продавца в своевременном исполнении
                  обязательств;
                </li>
                <li>
                  снижение риска неполучения товара, так как оплата по
                  аккредитиву осуществляется только после предоставления в банк
                  документов, свидетельствующих о выполнении продавцом
                  обязательств по контракту;
                </li>
                <li>
                  гарантированность поставки товара в соответствии с
                  номенклатурой, сроками и иными условиями, изложенными в
                  аккредитиве;
                </li>
                <li>правовая и документальная защищённость сторон.</li>
              </ul>
            </div>
          </template>
        </business-card>
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
            Полный перечень операций
          </template>
          <template #text>
            <div class="list-shield">
              <ul>
                <li>открытие аккредитива;</li>
                <li>
                  авизование (извещение) предстоящего открытия аккредитива;
                </li>
                <li>авизования условий аккредитива;</li>
                <li>проверка, приём, отсылка документов по аккредитиву;</li>
                <li>изменение условий аккредитива;</li>
                <li>
                  трансферация аккредитива (перевод в пользу третьего
                  юридического лица)
                </li>
              </ul>
            </div>
          </template>
        </business-card>
      </div>
    </div>

    <br>
    <br>

    <div class="container">
      <h3>
        По поручению клиента на основании расчётных документов банк осуществляет
        действия по получению платежа от плательщика
      </h3>
      Для открытия аккредитива клиенту необходимо обратиться в подразделение
      банка «ЕВРОАЛЬЯНС», в котором у него открыт расчетный счет; заполнить
      заявление, которое должно быть подписано уполномоченными лицами и
      скреплено печатью в соответствии с карточкой образцов подписей и печатей,
      хранящейся в банке
      <br>
      <br>
      По вопросам, связанным с проведением документарных операций, Вы можете
      обратиться к исполнителю
    </div>

    <br>
    <br>

    <div class="back-grey">
      <cards-showcase :card-data="cardData">
        <template #title>
          Полный комплекс услуг для бизнеса
        </template>
      </cards-showcase>
      <any-questions-block />
    </div>
  </section>
</template>
<script lang="ts">
import CardsShowcase from '~/components/cards-showcase/index.vue'
import BusinessCard from '~/components/cards/business-card.vue'
import AnyQuestionsBlock from '~/components/blocks/any-questions-block.vue'
import bankServiceCardData from '~/mocks/bank-service-card-data'

export default {
  components: {
    CardsShowcase,
    BusinessCard,
    AnyQuestionsBlock
  },
  data () {
    return {
      cardData: bankServiceCardData.list
    }
  }
}
</script>
