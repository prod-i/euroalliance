<template>
  <div v-if="showSearch" class="search-popup">
    <div class="search-popup__overlay" @click.stop="handleCloseSearch" />
    <div class="container">
      <div class="search-popup__content">
        <!-- search-form -->
        <div class="search-form">
          <div class="search-form__input">
            <input type="text" class="input" placeholder="Поиск по сайту">
            <div class="search-form__btn">
              <svg width="16" height="16">
                <use xlink:href="#icon-search" />
              </svg>
            </div>
          </div>
          <button class="btn btn--fixed">
            Найти
          </button>
        </div>
        <!-- search-history -->
        <div class="search-history">
          <div class="search-history__title">
            Популярные запросы
          </div>
          <div class="search-history__result">
            <a href="">Кредитные карты</a>
            <a href="">Дебетовые карты</a>
            <a href="">Автострахование</a>
            <a href="">Рефинансирование</a>
            <a href="">Кредит для пенсионеров</a>
            <a href="">Бесплатное снятие наличных в любом банкомате</a>
            <a href="">Кредитные карты</a>
            <a href="">Дебетовые карты</a>
            <a href="">Автострахование</a>
            <a href="">Рефинансирование</a>
            <a href="">Кредит для пенсионеров</a>
            <a href="">Бесплатное снятие наличных в любом банкомате</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    showSearch: {
      type: Boolean as PropType<Boolean>,
      required: true
    }
  },
  methods: {
    handleCloseSearch () {
      this.$emit('close')
    }
  }
})
</script>
