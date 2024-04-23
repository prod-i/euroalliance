<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Сервисы банка', href: '/personal/servisy' },
          {
            title: 'Оплата ЖКХ',
            href: '/personal/servisy/oplata-zhkh',
          },
        ]"
      />
      <h1>Оплата ЖКХ</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Услуги ЖКХ
        </template>
        <template #text>
          Держатели карт Банка «ЕВРОАЛЬЯНС» могут оплачивать
          жилищно-коммунальные услуги картой онлайн
        </template>
        <template #link>
          <nuxt-link
            to="/personal/karty/tarify-i-dokumenty-po-bankovskim-kartam"
            class="btn btn--full btn--white"
          >
            Старница с тарифами
          </nuxt-link>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div class="container container--small">
        <h2>Услуги</h2>
        <div class="list-shield">
          <ul>
            <li>В мобильном приложении "Евроальянс", в т.ч. через QR-код</li>
            <li>В интернет- банке «iBank»</li>
            <li>На сайте <a href="#">Городской платежной сети</a></li>
            <li>
              на сайте <a href="#">ГИС ЖКХ</a> (для входа в личный кабинет
              используется подтвержденная учетная запись Портала Госуслуг)
            </li>
          </ul>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Услуги и пошлины, доступные для оплаты"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Все способы оплаты"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
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
    this.$faq.setArrayLength(2)
  }
}
</script>
