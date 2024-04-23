<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Банк-клиент', href: '/biznesu/bank-klient' },
          {
            title: 'Полный комплекс услуг для бизнеса',
          },
        ]"
      />
      <h1>Полный комплекс услуг для бизнеса</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Система дистанционного обслуживания
        </template>
        <template #text>
          Система дистанционного обслуживания клиентов «БАНК-КЛИЕНТ» поможет
          вашему бизнесу существенно уменьшить затраты и увеличить оперативность
          при работе с Банком
        </template>
        <template #link>
          <nuxt-link class="btn btn--full btn--white" to="">
            Войти в iBank2 ??
          </nuxt-link>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Все возможности системы интернет-банк"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Предварительная регистрация и установка системы банк-клиент"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Выбор ip-адреса"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Безопасность"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Услуга SMS-подтверждение платежей"
          :is-active="$faq.activeIndexes[4]"
          @click="$faq.toggleActive(4)"
        >
          Какой-то текст
        </faq-item>
      </div>
      <br>
      <br>
      <!-- 👉 Документы -->
      <div>
        <h3>Регламент</h3>
        <div class="columns columns--cards">
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Регламент обслуживания клиентов в системеБАНК-КЛИЕНТ версия
                  2.7</a>
              </template>
              <template #size>
                277 kB
              </template>
            </document-card>
          </div>
        </div>
      </div>

      <br>
      <br>

      <div>
        <h3>Информация</h3>
        <div class="columns columns--cards">
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Регламент обслуживания клиентов в системеБАНК-КЛИЕНТ версия
                  2.7</a>
              </template>
              <template #size>
                277 kB
              </template>
            </document-card>
          </div>
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Состав представляемой информации по валютным
                  операциям</a>
              </template>
              <template #size>
                277 kB
              </template>
            </document-card>
          </div>
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Состав представляемой информации по валютным
                  операциям</a>
              </template>
              <template #size>
                277 kB
              </template>
            </document-card>
          </div>
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Состав представляемой информации по валютным
                  операциям</a>
              </template>
              <template #size>
                277 kB
              </template>
            </document-card>
          </div>
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Состав представляемой информации по валютным
                  операциям</a>
              </template>
              <template #size>
                277 kB
              </template>
            </document-card>
          </div>
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Состав представляемой информации по валютным
                  операциям</a>
              </template>
              <template #size>
                277 kB
              </template>
            </document-card>
          </div>
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Состав представляемой информации по валютным
                  операциям</a>
              </template>
              <template #size>
                277 kB
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
    this.$faq.setArrayLength(5)
  }
}
</script>
