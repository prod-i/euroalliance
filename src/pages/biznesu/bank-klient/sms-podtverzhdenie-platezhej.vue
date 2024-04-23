<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Банк-клиент', href: '/biznesu/bank-klient' },
          { title: 'SMS-подтверждение платежей' },
        ]"
      />
      <h1>SMS-подтверждение платежей</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Услуга «SMS-подтверждение платежей»
        </template>
        <template #text>
          Предназначена для дополнительной защиты системы дистанционного
          обслуживания от несанкционированного доступа к расчетному счету
          корпоративного клиента. Услуга предоставляется Банком бесплатно
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <!-- 👉 Документы -->
      <div>
        <h3>Инструкция</h3>
        <div class="columns columns--cards">
          <div class="column col-6">
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
      </div>
    </div>
  </section>
</template>
