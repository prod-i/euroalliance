<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Раскрытие информации', href: '/raskrytie-informacii' },
          { title: 'Информация о процентных ставках' },
        ]"
      />
      <h1>Информация о процентных ставках</h1>
      Информация о процентных ставках по договорам банковского вклада с
      физическими лицами в соответствии с Указанием Банка России от 27.02.2014г.
      № 3194-У
      <br>
      <br>

      <!-- 👉 Документы -->
      <div>
        <h3>Документы</h3>
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
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Приложение к заявлению на овердрафт</a>
              </template>
              <template #size>
                77 kB
              </template>
            </document-card>
          </div>
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Приложение №4 Анкета для получения в пользование..</a>
              </template>
              <template #size>
                77 kB
              </template>
            </document-card>
          </div>
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
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Приложение к заявлению на овердрафт</a>
              </template>
              <template #size>
                77 kB
              </template>
            </document-card>
          </div>
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Приложение №4 Анкета для получения в пользование..</a>
              </template>
              <template #size>
                77 kB
              </template>
            </document-card>
          </div>
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
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Приложение к заявлению на овердрафт</a>
              </template>
              <template #size>
                77 kB
              </template>
            </document-card>
          </div>
          <div class="column col-6">
            <document-card>
              <template #title>
                <a href="#">Приложение №4 Анкета для получения в пользование..</a>
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
