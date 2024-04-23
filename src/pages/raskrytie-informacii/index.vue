<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Раскрытие информации' }]" />
      <h1>Раскрытие информации</h1>
      <div>
        <h3>Перейти к разделу</h3>
        <div class="list-normal">
          <ul>
            <li>
              <nuxt-link to="/raskrytie-informacii/finansovaya-otchyotnost">
                Финансовая отчетность
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/raskrytie-informacii/o-procentnyh-stavkah">
                Информация о максимальных процентных ставках по вкладам
                физических лиц
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/raskrytie-informacii/o-nalogooblozhenii-inostrannyh-schetov-fatca">
                О налогообложении иностранных счетов (FATCA)
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/raskrytie-informacii/obrabotka-personalnyh-dannyh">
                Политика в отношении обработки персональных данных
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/raskrytie-informacii/dlya-regulyativnyh-celej">
                Раскрытие информации для регулятивных целей
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <br>
      <br>
      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Список лиц и Схема взаимосвязей Банка"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Информация о квалификации и опыте работы руководящего состава"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Устав банка"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Годовые отчеты"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Внутренние документы банка"
          :is-active="$faq.activeIndexes[4]"
          @click="$faq.toggleActive(4)"
        >
          Какой-то текст
        </faq-item>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(5)
  }
}
</script>
