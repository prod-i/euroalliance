<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          {
            title: 'Интернет-банк',
          },
        ]"
      />
      <h1>Интернет-банк</h1>

      <br>
      <br>

      <div class="columns columns--cards">
        <div class="column col-6 sm-col-12">
          <div class="information information--grey information--back">
            <h3>Физическим лицам</h3>
            Доступна мобильная версия, скачивайте приложение «Евроальянс» в
            <a href="#">Google Play</a> и <a href="#">AppStore</a>
            <br>
            <br>
            <nuxt-link class="btn btn--mobile" to="/personal/servisy/ibank">
              Войти в iBank для физических лиц
            </nuxt-link>
          </div>
        </div>
        <div class="column col-6 sm-col-12">
          <div class="information information--grey information--back">
            <h3>Юридическим лицам</h3>
            Попробуйте также и мобильный банк для бизнеса:
            <a href="#">Евроальянс Бизнес</a>
            <br>
            <br>
            <nuxt-link class="btn btn--mobile" to="/biznesu/bank-klient">
              Войти в iBank для бизнеса
            </nuxt-link>
          </div>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Изменения в Правила АО КИБ «ЕВРОАЛЬЯНС» по предоставлению физическим лицам"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Изменения в Регламент обслуживания клиентов в системе «Банк-Клиент» АО КИБ «ЕВРОАЛЬЯНС» "
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
      </div>

      <br>
      <br>

      <!-- 👉 Документы -->
      <div>
        <h3>Документы</h3>
        <div class="columns columns--cards">
          <div class="column col-6 md-col-12">
            <document-card>
              <template #title>
                <a href="#">Правила по предоставлению дистанционного...</a>
              </template>
              <template #size>
                77 kB
              </template>
            </document-card>
          </div>
        </div>
      </div>
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
