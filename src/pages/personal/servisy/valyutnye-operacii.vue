<template>
  <section class="content">
    <div class="container">
      <!-- 🤟 Хлебные крошки-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Сервисы банка', href: '/personal/servisy' },
          {
            title: 'Валютные операции',
          },
        ]"
      />
      <h1>Валютные операции</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Валютные операции!
        </template>
        <template #text>
          Сервис позволяет зарегистрировать договор залога недвижимости, договор
          на приобретение недвижимости, снятие записей о залоге без личного
          визита в Росреестр или МФЦ
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div>
        <h2>Банк «ЕВРОАЛЬЯНС» предлагает частным лицам операции в валюте</h2>
        <div class="list-shield">
          <ul>
            <li v-for="(item, index) in items" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        <h4>Курсы валют</h4>
        Актуальные курсы валют на сегодняшний день можно узнать
        <a href="#">здесь</a>
      </div>

      <br>
      <br>

      <div>
        <h2>Документы</h2>
        <div class="columns columns--cards">
          <div class="column col-6 sm-col-12">
            <document-card>
              <template #title>
                <a href="#">Типовая форма договора банковского счета для физических
                  лиц</a>
              </template>
              <template #size>
                794 kB
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
  data () {
    return {
      items: [
        'Зачисление на счета поступивших наличных и безналичных денежных средств',
        'Покупка и продажа наличной иностранной валюты',
        'Размен платежного денежного знака иностранного государства на платежный денежный знак того же иностранного государства'
      ]
    }
  }
}
</script>
