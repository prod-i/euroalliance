<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Финансовый уполномоченный' }]" />
      <h1>Финансовый уполномоченный</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Федеральный закон от 04.06.2018 N 123-ФЗ
        </template>
        <template #text>
          Финансовый уполномоченный осуществляет досудебное урегулирование
          споров между потребителями финансовых услуг и финансовыми
          организациями
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div>
        <h3>2004 год, рост объемов проводимых операций</h3>
        «Об уполномоченном по правам потребителей финансовых услуг» Вы имеете
        право обратиться к финансовому уполномоченному для решения споров с
        финансовой организацией
        <br>
        Направить обращение финансовому уполномоченному можно на
        <a href="#">официальном сайте финансового уполномоченного</a>

        <br>
        <br>

        <!-- 👉 Ссылки на документы -->
        <div class="columns">
          <div class="column col-6">
            <a href="#" class="box-link">
              <div class="box-link__image">
                <img src="/temp/icon.svg" alt="" loading="lazy">
              </div>
              <div class="box-link__title">
                Официальный сайт финансового уполномоченного
              </div>
            </a>
          </div>
          <div class="column col-6">
            <a htref="#" class="box-link">
              <div class="box-link__image">
                <img src="/temp/icon.svg" alt="" loading="lazy">
              </div>
              <div class="box-link__title">
                Проверить: подлежит ли спор рассмотрению
              </div>
            </a>
          </div>
        </div>
      </div>

      <br>
      <br>

      <div>
        <h3>Адрес и часы приема корреспонденции</h3>
        119017, г. Москва, Старомонетный пер., дом 3. В связи с введением на
        территории г. Москвы режима повышенной готовности из-за коронавируса,
        личный приём граждан временно прекращён. Основными каналами приёма
        обращений являются личный кабинет потребителя финансовых услуг и «Почта
        России»
      </div>

      <br>
      <br>

      <div>
        <h3>Электронная почта</h3>
        <div class="columns columns--cards">
          <div class="column col-3">
            <document-card class="square" icon="img">
              <template #title>
                <a href="#">press@finombudsman.ru</a>
              </template>
              <template #subtitle>
                для судебных запросов и иной корреспонденции от судов
              </template>
            </document-card>
          </div>
          <div class="column col-3">
            <document-card class="square" icon="img">
              <template #title>
                <a href="#">Менеджер отдела продаж</a>
              </template>
              <template #subtitle>
                для обращений СМИ
              </template>
            </document-card>
          </div>
          <div class="column col-3">
            <document-card class="square" icon="img">
              <template #title>
                <a href="#">corporate@finombudsman.ru</a>
              </template>
              <template #subtitle>
                для обращений СМИ
              </template>
            </document-card>
          </div>
          <div class="column col-3">
            <document-card class="square" icon="img">
              <template #title>
                <a href="#">support@finombudsman.ru</a>
              </template>
              <template #subtitle>
                для обращения в техподдержку
              </template>
            </document-card>
          </div>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        <b>Контактный центр: 8 (800) 200-00-10</b> <br>
        Понедельник — Пятница с 8:00 до 20:00 (МСК), кроме нерабочих праздничных
        дней. <br>
        бесплатный звонок из регионов России
      </div>
    </div>
  </section>
</template>
