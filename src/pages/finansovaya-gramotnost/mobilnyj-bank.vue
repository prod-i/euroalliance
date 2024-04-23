<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Финансовая грамотность', href: '/finansovaya-gramotnost' },
          { title: 'Мобильный банк' },
        ]"
      />
      <h1>Мобильный банк</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Банк в кармане!
        </template>
        <template #text>
          Для всех держателей карт Банка "ЕВРОАЛЬЯНС" стало доступно новое
          мобильное приложение банка для физических лиц
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
      <div class="container container--small">
        <h2>
          Новое приложение является полноценным мобильным банком, где Вы можете
        </h2>
        <div class="list-shield">
          <ul>
            <li>узнать актуальное состояние счетов (карты, вклады, кредиты)</li>
            <li>пополнять свои карты Банка «ЕВРОАЛЬЯНС» без комиссии</li>
            <li>пополнять вклады и погашать кредиты</li>
            <li>осуществлять переводы с карты на карту</li>
            <li>
              оплачивать коммунальные услуги, налоги и штрафы через QR-код
            </li>
            <li>взаимодействовать с банком во вкладке «Письма»</li>
          </ul>
        </div>
      </div>
    </div>

    <br>
    <br>
    <app-mobile-block />
  </section>
</template>
<script lang="ts">
import AppMobileBlock from '~/components/blocks/app-mobile-block.vue'

export default {
  components: {
    AppMobileBlock
  }
}
</script>
