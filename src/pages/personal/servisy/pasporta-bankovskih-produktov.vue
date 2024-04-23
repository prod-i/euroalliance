<template>
  <section class="content">
    <div class="container">
      <ui-breadcrumbs
        :pages="[
          { title: 'Сервисы банка', href: '/personal/servisy' },
          {
            title: 'Паспорта банковских продуктов',
            href: '/personal/servisy/pasporta-bankovskih-produktov',
          },
        ]"
      />
      <h1>Паспорта банковских продуктов</h1>
      <div class="offset-top offset--small">
        <!-- 👉 FAQ Items -->
        <div class="faq-items">
          <faq-item
            title="Вклады"
            :is-active="$faq.activeIndexes[0]"
            @click="$faq.toggleActive(0)"
          >
            Какой-то текст
          </faq-item>
          <faq-item
            title="Банковские карты"
            :is-active="$faq.activeIndexes[1]"
            @click="$faq.toggleActive(1)"
          >
            Какой-то текст
          </faq-item>
          <faq-item
            title="Аренда сейфов"
            :is-active="$faq.activeIndexes[2]"
            @click="$faq.toggleActive(2)"
          >
            <div class="columns columns--cards">
              <div class="column col-6 sm-col-12">
                <document-card>
                  <template #title>
                    <a href="#">Аренда индивидуального банковского сейфа</a>
                  </template>
                  <template #size>
                    794 kB
                  </template>
                </document-card>
              </div>
            </div>
          </faq-item>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(3)
  }
}
</script>
