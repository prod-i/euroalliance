<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          {
            title: 'Реализация залогов и имущества',
          },
        ]"
      />
      <h1>Реализация залогов и имущества</h1>
      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="г. Иваново, ТЦ «Шоколад»: ул. Лежневская, д. 117, 2 этаж"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          <h4>Продается 2-х этажное здание в центре города</h4>
          <div class="list-dotted">
            <ul>
              <li>
                Общей площадью 500 кв. м., огороженный земельный участок 906 кв.м., на котором расположены 2 гаража
                (площадью 24.7 кв.м. каждый).
              </li>
              <li>Газовое отопление собственной котельной</li>
              <li>Возможность выделения жилых помещений</li>
            </ul>
          </div>
          <br>
          <p>
            Хорошая транспортная доступность, высокая интенсивность движения транспорта, располагается в нескольких
            минутах от остановки общественного транспорта «улица Станционная», имеются асфальтированные подъездные
            дороги, хорошая прилегающая территория
          </p>
          <p>
            Рядом со зданием располагается много магазинов, аптек, ТЦ «Никольский» и «Купеческий», школа и другие
            объекты социальной инфраструктуры
          </p>
          <br>
          <div class="information center">
            Обращаться по телефону 8 (991) 531-90-77
          </div>
          <br>

          <!-- 👉 Слайдер -->
          <client-only>
            <Splide
              ref="splide"
              class="splide--inset"
              :options="splideOptions"
            >
              <SplideSlide v-for="n in 5" :key="n">
                <div class="image-cover">
                  <img src="/temp/image.jpg" alt="" loading="lazy">
                </div>
              </SplideSlide>
            </Splide>
          </client-only>
        </faq-item>
        <faq-item
          title="г. Иваново, ТЦ «Шоколад»: ул. Лежневская, д. 117, 2 этаж"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="г. Иваново, пр-т Ленина, 57: здание 495 кв.м."
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="г. Иваново, ТЦ «Евроленд»"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Земельный участок на берегу р. Волга"
          :is-active="$faq.activeIndexes[4]"
          @click="$faq.toggleActive(4)"
        >
          Какой-то текст
        </faq-item>
      </div>
    </div>

    <br>
    <br>

    <!-- 👉 Остались вопросы? -->
    <any-questions-block />
  </section>
</template>
<script>
import AnyQuestionsBlock from '~/components/blocks/any-questions-block.vue'

export default {
  components: {
    AnyQuestionsBlock
  },
  data () {
    return {
      splideOptions: {
        // Опции слайдера
        perPage: 1,
        gap: 20
      }
    }
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(5)
  }
}
</script>
