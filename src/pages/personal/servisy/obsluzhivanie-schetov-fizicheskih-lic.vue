<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Сервисы банка', href: '/personal/servisy' },
          {
            title: 'Обслуживание счетов физических лиц',
            href: '/personal/servisy/obsluzhivanie-schetov-fizicheskih-lic',
          },
        ]"
      />
      <h1>Обслуживание счетов физических лиц</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Услуги по обслуживанию
        </template>
        <template #text>
          Банк «ЕВРОАЛЬЯНС» предлагает целый спектр услуг по обслуживанию счетов
          физических лиц. Операции по счетам производятся как в рублях, так и в
          валюте
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div>
        <h2>Операции в рублях</h2>
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

      <div>
        <h2>Операции в валюте</h2>
        <div class="list-shield">
          <ul>
            <li v-for="(item2, idx) in items2" :key="idx">
              {{ item2 }}
            </li>
          </ul>
        </div>
      </div>

      <br>
      <br>

      <h2>Тарифы</h2>
      <div class="columns columns--cards">
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Тарифы по банковским операциям физических лиц с 11.09.2023
                (Головной Банк)</a>
            </template>
            <template #size>
              251 kB PDF
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Тарифы по банковским операциям физических лиц с 11.09.2023
                (Головной Банк)</a>
            </template>
            <template #size>
              251 kB PDF
            </template>
          </document-card>
        </div>
      </div>

      <br>
      <br>

      <h2>Документы</h2>
      <div class="columns columns--cards">
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Анкета физическоголица (при открытии банковского счета или
                вклада)</a>
            </template>
            <template #size>
              251 kB PDF
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Анкета физическоголица (при открытии банковского счета или
                вклада)</a>
            </template>
            <template #size>
              251 kB PDF
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Анкета физическоголица (при открытии банковского счета или
                вклада)</a>
            </template>
            <template #size>
              251 kB PDF
            </template>
          </document-card>
        </div>
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Анкета физическоголица (при открытии банковского счета или
                вклада)</a>
            </template>
            <template #size>
              251 kB PDF
            </template>
          </document-card>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">

export default {

  data () {
    return {
      items: [
        'Открытие и ведение текущих и депозитных счетов',
        'Зачисление на счета поступивших наличных и безналичных денежных средств',
        'Безналичный перевод средств в оплату за товары и услуги',
        'Выдача наличных денежных средств, в том числе заработной платы, зачисленной на счета сотрудников организаций — клиентов Банка (по договорам с предприятиями)',
        'Безналичная конвертация денежных средств; перевод денежных средств без открытия счета'
      ],
      items2: [
        'Выдача наличных денежных средств, в том числе заработной платы, зачисленной на счета сотрудников организаций — клиентов Банка (по договорам с предприятиями)',
        'Безналичная конвертация денежных средств; перевод денежных средств без открытия счета',
        'Безналичный перевод средств в оплату за товары и услуги',
        'Открытие и ведение текущих и депозитных счетов',
        'Зачисление на счета поступивших наличных и безналичных денежных средств'
      ]
    }
  }
}
</script>
