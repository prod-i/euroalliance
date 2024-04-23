<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Финансовая грамотность', href: '/finansovaya-gramotnost' },
          { title: 'Мошенничество' },
        ]"
      />
      <h1>Мошенничество</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Современный и удобный способ оплаты покупок
        </template>
        <template #text>
          Система быстрых платежей – это современный и удобный способ оплаты
          покупок с помощью смартфона без использования банковской карты
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div>
        <h3>Заголовок</h3>
        Система быстрых платежей позволяет вам моментально отправлять и получать
        деньги, не выходя из дома. Забудьте о комиссиях и задержках - теперь
        ваше время и деньги находятся под вашим полным контролем
      </div>

      <br>
      <br>

      <!-- 👉 Слайдер -->
      <client-only>
        <Splide ref="splide" class="splide--box" :options="splideOptions">
          <SplideSlide v-for="n in 5" :key="n">
            <div class="image-cover">
              <img src="/temp/frame.jpg" alt="" loading="lazy">
            </div>
          </SplideSlide>
        </Splide>
      </client-only>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  data () {
    return {
      splideOptions: {
        // Опции слайдера
        perPage: 1,
        gap: 20
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
