<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Финансовая грамотность', href: '/finansovaya-gramotnost' },
          { title: 'Система быстрых платежей' },
        ]"
      />
      <h1>Система быстрых платежей</h1>
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
        <h3>Как работает?</h3>
        Система быстрых платежей позволяет вам моментально отправлять и получать
        деньги, не выходя из дома. Забудьте о комиссиях и задержках - теперь
        ваше время и деньги находятся под вашим полным контролем
        <br>
        <br>
        Попробуйте систему сегодня и убедитесь, что передача денег может быть
        быстрой и беззаботной. Присоединяйтесь и откройте для себя новый уровень
        удобства в финансовых операциях!
      </div>

      <br>
      <br>

      <!-- 👉 Слайдер -->
      <client-only>
        <Splide ref="splide" class="splide--box" :options="splideOptions">
          <SplideSlide v-for="n in 2" :key="n">
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
      }
    }
  }
}
</script>
