<template>
  <div class="showcase">
    <client-only>
      <Splide ref="splide" :options="splideOptions" @splide:move="onSplideMove">
        <SplideSlide v-for="n in 4" :key="n">
          <div class="showcase-content">
            <picture>
              <source srcset="/temp/showcase.jpg" media="(min-width: 768px)">
              <source srcset="/temp/showcase-mobile.jpg" media="(min-width: 320px)">
              <img src="/temp/showcase.jpg" alt="">
            </picture>
          </div>
        </SplideSlide>
      </Splide>
    </client-only>
    <div class="showcase-navigation">
      <div class="container">
        <div class="showcase-navigation-items">
          <!---->
          <div
            class="showcase-navigation__item"
            :class="{ active: isActive === 0,}"
            @click="changeSlide(0)"
          >
            <div class="showcase-navigation__title">
              Новый мобильный банк
            </div>
            <div class="showcase-navigation__text">
              Новый и обновленный интернет-банк
            </div>
          </div>
          <!---->
          <div
            class="showcase-navigation__item"
            :class="{active: isActive === 1}"
            @click="changeSlide(1)"
          >
            <div class="showcase-navigation__title">
              Кредитная карта с длинным льготным периодом
            </div>
            <div class="showcase-navigation__text">
              120 дней без процентов
            </div>
          </div>
          <!---->
          <div
            :class="{
              'showcase-navigation__item': true,
              active: isActive === 2,
            }"
            @click="changeSlide(2)"
          >
            <div class="showcase-navigation__title">
              Дебетовая карта с бесплатным обслуживанием
            </div>
            <div class="showcase-navigation__text">
              Кешбек до 1 800 ₽ в месяц
            </div>
          </div>
          <!---->
          <div
            class="showcase-navigation__item"
            :class="{active: isActive === 3}"
            @click="changeSlide(3)"
          >
            <div class="showcase-navigation__title">
              Дебетовая карта с бесплатным обслуживанием
            </div>
            <div class="showcase-navigation__text">
              От 3,99 %
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      splideOptions: {
        // Опции слайдера
        arrows: false, // Убрать боковые стрелки
        pagination: false // Убрать пагинацию
      },
      isActive: 0
    }
  },
  methods: {
    onSplideMove (_, index: number) {
      this.isActive = index
    },
    changeSlide (index: number) {
      this.$refs.splide.go(index)
    }
  }
}
</script>
