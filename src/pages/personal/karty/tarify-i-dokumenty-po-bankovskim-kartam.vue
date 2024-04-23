<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Банковские карты', href: '/personal/karty' },
          { title: 'Тарифы и документы по банковским картам' },
        ]"
      />
      <h1>Тарифы и документы по банковским картам</h1>
      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Общие документы"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Документы  по овердрафтам"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Безопасность"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Тарифы"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Лимиты"
          :is-active="$faq.activeIndexes[4]"
          @click="$faq.toggleActive(4)"
        >
          <!-- 👉 Документы -->
          <div class="columns columns--cards">
            <div class="column col-6 sm-col-12">
              <document-card>
                <template #title>
                  <a href="#">Правила по обслуживанию держателей расчетных карт</a>
                </template>
                <template #size>
                  227 kB
                </template>
              </document-card>
            </div>
            <div class="column col-6 sm-col-12">
              <document-card>
                <template #title>
                  <a href="#">Приложение к заявлению на овердрафт</a>
                </template>
                <template #size>
                  77 kB
                </template>
              </document-card>
            </div>
            <div class="column col-6 sm-col-12">
              <document-card>
                <template #title>
                  <a href="#">Приложение №4 Анкета для получения в пользование банковской
                    карты</a>
                </template>
                <template #size>
                  77 kB
                </template>
              </document-card>
            </div>
            <div class="column col-6 sm-col-12">
              <document-card>
                <template #title>
                  <a href="#">Приложение №30 Условия использования мобильного платежного
                    сервиса</a>
                </template>
                <template #size>
                  77 kB
                </template>
              </document-card>
            </div>
            <div class="column col-6 sm-col-12">
              <document-card>
                <template #title>
                  <a href="#">Приложение к заявлению на овердрафт</a>
                </template>
                <template #size>
                  77 kB
                </template>
              </document-card>
            </div>
            <div class="column col-6 sm-col-12">
              <document-card>
                <template #title>
                  <a href="#">Правила по обслуживанию держателей расчетных карт</a>
                </template>
                <template #size>
                  77 kB
                </template>
              </document-card>
            </div>
            <div class="column col-6 sm-col-12">
              <document-card>
                <template #title>
                  <a href="#">Приложение к заявлению на овердрафт</a>
                </template>
                <template #size>
                  77 kB
                </template>
              </document-card>
            </div>
            <div class="column col-6 sm-col-12">
              <document-card>
                <template #title>
                  <a href="#">Приложение к заявлению на овердрафт</a>
                </template>
                <template #size>
                  77 kB
                </template>
              </document-card>
            </div>
            <div class="column col-6 sm-col-12">
              <document-card>
                <template #title>
                  <a href="#">Правила по обслуживанию держателей расчетных карт</a>
                </template>
                <template #size>
                  77 kB
                </template>
              </document-card>
            </div>
          </div>
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
