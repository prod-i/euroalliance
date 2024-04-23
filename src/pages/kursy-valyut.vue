<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Курсы валют' }]" />
      <h1>Курсы валют</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Курсы валют и обмен
        </template>
        <template #text>
          Текст рерайтеру. Выгодный обмен валют от, информация о курсах обмена
          иностранных валют является справочной и может меняться в течение дня
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
    </div>
    <div class="map-block content-inside">
      <div class="container">
        <div class="map-main">
          <div class="map-main__header">
            Курс валют в
            <div class="map-main__name">
              <span @click="handleSelectOption">
                {{ selected }}
                <svg width="12" height="12" aria-hidden="true">
                  <use xlink:href="#icon-down" />
                </svg>
              </span>
              <ul class="popup-menu" :class="{ show: showPopup }">
                <li
                  v-for="city in cityData.list"
                  :key="city.id"
                  class="popup-menu__item"
                  @click="handleSelected(city.title)"
                >
                  {{ city.title }}
                </li>
              </ul>
            </div>
          </div>
          <div class="map-main__content">
            <exchange-rate class="exchange-table--small" :selected="selected" :city="cityData.list" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ExchangeRate from '~/components/exchange-rate/index.vue'
import exchangeRateData from '~/mocks/exchange-rate-data'

export default {
  components: {
    ExchangeRate
  },
  data () {
    return {
      showPopup: false,
      selected: 'Фурманов',
      cityData: exchangeRateData
    }
  },
  methods: {
    handleSelectOption () {
      this.showPopup = !this.showPopup
    },
    handleSelected (title) {
      this.selected = title
      this.showPopup = false
    }
  }
}
</script>
