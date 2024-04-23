<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Услуги для бизнеса', href: '/biznesu/uslugi-dlya-biznesa' },
          { title: 'ВЭД и валютный контроль' },
        ]"
      />
      <h1>ВЭД и валютный контроль</h1>

      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Услуги по ВЭД и валютному контролю
        </template>
        <template #text>
          Для юридических лиц, занимающихся экспортом, импортом или только
          собирающихся начать внешнеэкономическую деятельность Банк «ЕВРОАЛЬЯНС»
          предлагает полный спектр услуг по ВЭД и валютному контролю
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <h3>Консалтинг по вопросам ВЭД</h3>
      <div class="list-shield">
        Банк «ЕВРОАЛЬЯНС» оказывает полный спектр услуг по валютным операциям,
        а именно:
        <ul>
          <li>
            открытие и ведение счетов юридических лиц в иностранной валюте
          </li>
          <li>выдача наличной иностранной валюты со счета клиента</li>
          <li>покупка и продажа иностранной валюты</li>
          <li>
            операции по покупке/продаже инвалюты на внутреннем валютном рынке
          </li>
        </ul>
      </div>

      <br>
      <br>

      <h3>Валютный контроль</h3>
      <div class="list-shield">
        <ul>
          <li>выполнение функций агента валютного контроля</li>
          <li>индивидуальный подход</li>
          <li>полное сопровождение</li>
          <li>
            покупка и продажа консультирование в области валютного
            законодательства валюты
          </li>
        </ul>
      </div>

      <br>
      <br>

      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Экспертиза
        </template>
        <template #text>
          Банк «ЕВРОАЛЬЯНС» осуществляет прием на экспертизу денежных знаков
          иностранных государств, подлинность которых вызывает сомнение
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Перечень документов, необходимых для открытия счета"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          <div class="list-dotted">
            <ul>
              <li>заявление на открытие счета;</li>
              <li>
                устав, учредительный договор, свидетельство о государственной
                регистрации (подлинники или копии, заверенные нотариально или в
                регистрирующем органе);
              </li>
              <li>
                свидетельство о постановке на учет в налоговом органе
                (подлинник);
              </li>
              <li>
                решения уполномоченного органа о назначении руководителя и
                главного бухгалтера, решение о создании предприятия (копии,
                удостоверенные печатью и подписью Клиента);
              </li>
              <li>
                образцы подписей и оттиска печати (1 карточка, нотариально
                заверенная);
              </li>
              <li>
                информационное письмо органов госстатистики о присвоении кодов
                (ксерокопия).
              </li>
            </ul>
          </div>
        </faq-item>
      </div>

      <br>
      <br>

      <!-- 👉 Документы -->
      <h3>Документы</h3>
      <div class="columns columns--cards">
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Договор банковского счета в валюте</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Состав представляемой информации по валютным операциям</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Договор банковского счета в валюте</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Состав представляемой информации по валютным операциям</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
      </div>

      <br>
      <br>

      <h3>Приложения</h3>
      <div class="columns columns--cards">
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Состав представляемой информации по валютным операциям</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Аренда сейфов</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Аренда сейфов</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Аренда сейфов</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Состав представляемой информации по валютным операциям</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
        <div class="column col-6 md-col-12">
          <document-card>
            <template #title>
              <a href="#">Аренда сейфов</a>
            </template>
            <template #size>
              278 kB
            </template>
          </document-card>
        </div>
      </div>
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
<script>
import CardsShowcase from '~/components/cards-showcase/index.vue'
import AnyQuestionsBlock from '~/components/blocks/any-questions-block.vue'
import bankServiceCardData from '~/mocks/bank-service-card-data'

export default {
  components: {
    CardsShowcase,
    AnyQuestionsBlock
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
