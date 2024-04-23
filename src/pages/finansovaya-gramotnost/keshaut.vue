<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Финансовая грамотность', href: '/finansovaya-gramotnost' },
          { title: 'Кешаут' },
        ]"
      />
      <h1>Кешаут</h1>
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
      }
    }
  }
}
</script>
