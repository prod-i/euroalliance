<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Помощь бизнесу' }]" />
      <h1>Помощь бизнесу Главная</h1>

      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Полезные рекомендации
        </template>
        <template #text>
          Для юридических лиц, занимающихся экспортом, импортом или только
          собирающихся начать внешнеэкономическую деятельность Банк "ЕВРОАЛЬЯНС"
          предлагает полный спектр услуг по ВЭД и валютному контролю. Банк
          "ЕВРОАЛЬЯНС" оказывает консультации при оформлении всех документов,
          касающихся ВЭД.
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <!-- 👉 Блок с информационными бизнес-карточками -->
      <div class="business-cards">
        <business-card>
          <template #img>
            <img src="/temp/icon-slim.svg">
          </template>
          <template #title>
            Банк заблокировал счет. Что делать?
          </template>
          <template #text>
            <div>
              Для юридических лиц, занимающихся экспортом, импортом или только
              собирающихся начать внешнеэкономическую деятельность Банк
              "ЕВРОАЛЬЯНС" предлагает полный спектр услуг по ВЭД и валютному
              контролю. Банк "ЕВРОАЛЬЯНС" оказывает консультации при оформлении
              всех документов, касающихся ВЭД.
            </div>
          </template>
          <template #btn>
            <nuxt-link to="" class="btn btn--fixed">
              Подробнее
            </nuxt-link>
          </template>
        </business-card>

        <business-card>
          <template #img>
            <img src="/temp/icon-slim.svg">
          </template>
          <template #title>
            Список компаний с признаками нелегальной деятельности
          </template>
          <template #text>
            Для юридических лиц, занимающихся экспортом, импортом или только
            собирающихся начать внешнеэкономическую деятельность Банк
            "ЕВРОАЛЬЯНС" предлагает полный спектр услуг по ВЭД и валютному
            контролю. Банк "ЕВРОАЛЬЯНС" оказывает консультации при оформлении
            всех документов, касающихся ВЭД.
          </template>
          <template #btn>
            <nuxt-link to="" class="btn btn--fixed">
              Подробнее
            </nuxt-link>
          </template>
        </business-card>

        <business-card>
          <template #img>
            <img src="/temp/icon-slim.svg">
          </template>
          <template #title>
            Список компаний с признаками нелегальной деятельности
          </template>
          <template #text>
            <div>
              Принимайте онлайн-платежи удобным вашим клиентам способом и
              выведите бизнес на новый уровень
            </div>
          </template>
          <template #btn>
            <nuxt-link to="" class="btn btn--fixed">
              Подробнее
            </nuxt-link>
          </template>
        </business-card>

        <business-card>
          <template #img>
            <img src="/temp/icon-slim.svg">
          </template>
          <template #title>
            Эквайринг - плюсы и минусы
          </template>
          <template #text>
            <div>
              Для юридических лиц, занимающихся экспортом, импортом или только
              собирающихся начать внешнеэкономическую деятельность Банк
              "ЕВРОАЛЬЯНС" предлагает полный спектр услуг по ВЭД и валютному
              контролю. Банк "ЕВРОАЛЬЯНС" оказывает консультации при оформлении
              всех документов, касающихся ВЭД.
            </div>
          </template>
          <template #btn>
            <nuxt-link to="" class="btn btn--fixed">
              Подробнее
            </nuxt-link>
          </template>
        </business-card>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import BusinessCard from '~/components/cards/business-card.vue'

export default {
  components: {
    BusinessCard
  }
}
</script>
