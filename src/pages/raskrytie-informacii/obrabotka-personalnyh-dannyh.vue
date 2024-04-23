<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Раскрытие информации', href: '/raskrytie-informacii' },
          { title: 'Политика в отношении обработки персональных данных' },
        ]"
      />
      <h1>Политика в отношении обработки персональных данных</h1>

      <br>
      <br>

      <faq-item
        title="Политика конфиденциальности в АО КИБ «ЕВРОАЛЬЯНС»"
        :is-active="$faq.activeIndexes[0]"
        @click="$faq.toggleActive(0)"
      >
        <div class="columns columns--cards">
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Политика конфиденциальности в ао киб «Евроальянс»</a>
              </template>
              <template #size>
                277 kB
              </template>
            </document-card>
          </div>
        </div>
      </faq-item>

      <br>
      <br>

      <faq-item
        title="Политика обработки персональных данных в АО КИБ «ЕВРОАЛЬЯНС»"
        :is-active="$faq.activeIndexes[1]"
        @click="$faq.toggleActive(1)"
      >
        <div class="columns columns--cards">
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Аренда индивидуального банковского сейфа</a>
              </template>
              <template #size>
                277 kB
              </template>
            </document-card>
          </div>
        </div>
      </faq-item>
    </div>
  </section>
</template>
<script>

export default {
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(2)
  }
}
</script>
