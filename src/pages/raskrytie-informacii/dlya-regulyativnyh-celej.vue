<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Раскрытие информации', href: '/raskrytie-informacii' },
          { title: 'Раскрытие информации для регулятивных целей' },
        ]"
      />
      <h1>Раскрытие информации для регулятивных целей</h1>
      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Раскрытие информации о процентных ставках по договорам банковского вклада с физ. лицами"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          <table class="document-table">
            <tbody>
              <tr>
                <td>
                  Дата размещения
                  15.12.2023
                </td>
                <td>
                  <a href="#">За ноябрь 2023 года</a>
                </td>
              </tr>
            </tbody>
          </table>
        </faq-item>
        <faq-item
          title="Информация о принимаемых рисках, процедурах их оценки, управления рисками и капиталом"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Информация об инструментах капитала"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
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
    this.$faq.setArrayLength(4)
  }
}
</script>
