<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Банк-клиент', href: '/biznesu/bank-klient' },
          {
            title: 'Мобильный банк для бизнеса',
          },
        ]"
      />
      <h1>Мобильный банк для бизнеса</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Система дистанционного обслуживания
        </template>
        <template #text>
          Мобильное приложение Евроальянс Бизнес - это бесплатное приложение для
          управления счетами вашей организации со смартфона
        </template>
        <template #link>
          <div class="app">
            <a href="#" class="app-link app-link--color">
              <img
                src="/img/app-google-color.svg"
                alt=""
                width="146"
                height="46"
                loading="lazy"
              >
            </a>
            <a href="#" class="app-link app-link--color">
              <img
                src="/img/app-store-color.svg"
                alt=""
                width="146"
                height="46"
                loading="lazy"
              >
            </a>
          </div>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        <b>Важно</b> <br>
        Чтобы начать работать через мобильное приложение нужно подключиться к
        бесплатному сервису Мобильный банк
      </div>
      <br>
      <br>
      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Все возможности мобильного банка для бизнеса"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Как подключить услугу мобильный банк"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Доступ сотрудников клиента к сервису мобильный банк"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Установка приложения  «евроальянс бизнес»"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Создание ключа серверной подписи"
          :is-active="$faq.activeIndexes[4]"
          @click="$faq.toggleActive(4)"
        >
          Какой-то текст
        </faq-item>
      </div>
    </div>

    <br>
    <br>

    <!-- 👉 Мобильное приложение банка -->
    <app-mobile-block />
  </section>
</template>
<script>
import AppMobileBlock from '~/components/blocks/app-mobile-block.vue'

export default {
  components: {
    AppMobileBlock
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(5)
  }
}
</script>
