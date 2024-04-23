<template>
  <section class="content content-inside">
    <!-- 👉 showcase -->
    <showcase />

    <div class="offset">
      <div class="container">
        <!-- 🎩 -->
        <div class="head">
          <div class="head-content">
            <div class="head-title">
              Кредитование бизнеса
            </div>
          </div>
        </div>
        <div class="offers">
          <info-card
            v-for="(info, index) in infoData"
            :key="index"
            :title="info.title"
            :description="info.description"
            :link="info.link"
            :img="info.img"
            :items="info.items"
            :custom-class="`offer--long`"
            :buttons-text="['Оформить кредит', 'Рассчитать кредит']"
          />
        </div>
        <div class="offset-footer center">
          <button class="btn btn--full">
            Показать ещё
          </button>
        </div>

        <!-- 👉 Блок с информационными бизнес-карточками -->
        <div class="offset-top">
          <div class="business-cards">
            <business-card>
              <template #img>
                <img src="/temp/icon-slim.svg">
              </template>
              <template #title>
                РКО за 0 ₽
              </template>
              <template #text>
                Текст на рерайт: для юридических лиц, занимающихся экспортом,
                импортом или только собирающихся начать внешнеэкономическую
                деятельность Банк "ЕВРОАЛЬЯНС" предлагает полный спектр услуг
                по ВЭД и валютному контролю. Банк "ЕВРОАЛЬЯНС" оказывает
                консультации при оформлении всех документов, касающихся ВЭД —
                300 символов
              </template>
              <template #btn>
                <nuxt-link
                  to="/biznesu/uslugi-dlya-biznesa/rko"
                  class="btn btn--fixed btn--mobile"
                >
                  Подробнее
                </nuxt-link>
              </template>
            </business-card>

            <business-card>
              <template #img>
                <img src="/temp/icon-slim.svg">
              </template>
              <template #title>
                Депозиты для юридических лиц
              </template>
              <template #text>
                Текст на рерайт: для юридических лиц, занимающихся экспортом,
                импортом или только собирающихся начать внешнеэкономическую
                деятельность Банк "ЕВРОАЛЬЯНС" предлагает полный спектр услуг
                по ВЭД и валютному контролю ВЭД и валютному контролю контролю
                —250 символов
              </template>
              <template #btn>
                <nuxt-link
                  to="/biznesu/uslugi-dlya-biznesa/depozity-dlya-yuridicheskih-lic"
                  class="btn btn--fixed btn--mobile"
                >
                  Подробнее
                </nuxt-link>
              </template>
            </business-card>

            <business-card>
              <template #img>
                <img src="/temp/icon-slim.svg">
              </template>
              <template #title>
                Зарплатный проект
              </template>
              <template #text>
                Для юридических лиц, занимающихся экспортом, импортом или
                только собирающихся начать внешнеэкономическую деятельность
                Банк "ЕВРОАЛЬЯНС" предлагает полный спектр услуг по ВЭД и
                валютному контролю. Банк "ЕВРОАЛЬЯНС" оказывает консультации
                при оформлении всех документов, касающихся ВЭД.
              </template>
              <template #btn>
                <nuxt-link
                  to="/biznesu/uslugi-dlya-biznesa/zarplatnyj-proekt"
                  class="btn btn--fixed btn--mobile"
                >
                  Подробнее
                </nuxt-link>
              </template>
            </business-card>

            <business-card>
              <template #img>
                <img src="/temp/icon-slim.svg">
              </template>
              <template #title>
                ВЭД и валютный контроль
              </template>
              <template #text>
                Для юридических лиц, занимающихся экспортом, импортом или
                только собирающихся начать внешнеэкономическую деятельность
                Банк "ЕВРОАЛЬЯНС" предлагает полный спектр услуг по ВЭД и
                валютному контролю. Банк "ЕВРОАЛЬЯНС" оказывает консультации
                при оформлении всех документов, касающихся ВЭД.
              </template>
              <template #btn>
                <nuxt-link
                  to="/biznesu/uslugi-dlya-biznesa/ved"
                  class="btn btn--fixed btn--mobile"
                >
                  Подробнее
                </nuxt-link>
              </template>
            </business-card>

            <business-card>
              <template #img>
                <img src="/temp/icon-slim.svg">
              </template>
              <template #title>
                Аккредитивы
              </template>
              <template #text>
                Для юридических лиц, занимающихся экспортом, импортом или только
                собирающихся начать внешнеэкономическую деятельность Банк
                "ЕВРОАЛЬЯНС" предлагает полный спектр услуг по ВЭД и валютному
                контролю. Банк "ЕВРОАЛЬЯНС" оказывает консультации при
                оформлении всех документов, касающихся ВЭД.
              </template>
              <template #btn>
                <nuxt-link
                  to="/biznesu/uslugi-dlya-biznesa/akkreditivy"
                  class="btn btn--fixed btn--mobile"
                >
                  Подробнее
                </nuxt-link>
              </template>
            </business-card>

            <business-card>
              <template #img>
                <img src="/temp/icon-slim.svg">
              </template>
              <template #title>
                Эквайринг
              </template>
              <template #text>
                Принимайте онлайн-платежи удобным вашим клиентам способом и
                выведите бизнес на новый уровень
              </template>
              <template #btn>
                <nuxt-link
                  to="/biznesu/uslugi-dlya-biznesa/ekvajring-dlya-biznesa"
                  class="btn btn--fixed btn--mobile"
                >
                  Подробнее
                </nuxt-link>
              </template>
            </business-card>

            <business-card>
              <template #img>
                <img src="/temp/icon-slim.svg">
              </template>
              <template #title>
                Кредит под залог недвижимости
              </template>
              <template #text>
                Текст на рерайт: для юридических лиц, занимающихся экспортом,
                импортом или только собирающихся начать внешнеэкономическую
                деятельность Банк "ЕВРОАЛЬЯНС" предлагает полный спектр услуг
                по ВЭД и валютному контролю. Банк "ЕВРОАЛЬЯНС" оказывает
                консультации при оформлении всех документов, касающихся ВЭД —
                300 символов
              </template>
              <template #btn>
                <nuxt-link
                  to="/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa"
                  class="btn btn--fixed btn--mobile"
                >
                  Подробнее
                </nuxt-link>
              </template>
            </business-card>
          </div>
        </div>
      </div>
    </div>

    <cards-showcase :card-data="cardData">
      <template #title>
        Полный комплекс услуг для бизнеса
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
<script lang="ts">
import Showcase from '~/components/showcase/index.vue'
import bankClientCardData from '~/mocks/bank-client-card-data'
import BusinessCard from '~/components/cards/business-card.vue'
import AnyQuestionsBlock from '~/components/blocks/any-questions-block.vue'
import infoCreditsBusinessData from '~/mocks/info-credits-business-data'
import InfoCard from '~/components/cards/info-card.vue'
import CardsShowcase from '~/components/cards-showcase/index.vue'

export default {
  components: {
    BusinessCard,
    Showcase,
    AnyQuestionsBlock,
    InfoCard,
    CardsShowcase
  },
  data () {
    return {
      cardData: bankClientCardData.list,
      infoData: infoCreditsBusinessData
    }
  }
}
</script>
