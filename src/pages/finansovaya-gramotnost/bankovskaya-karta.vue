<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Финансовая грамотность', href: '/finansovaya-gramotnost' },
          { title: 'Банковская карта' },
        ]"
      />
      <h1>Банковская карта</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Заголовок рерайтеру
        </template>
        <template #text>
          Текст рерайтеру система быстрых платежей – это современный и удобный
          способ оплаты покупок с помощью смартфона без использования банковской
          карты
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div>
        <h3>Не сообщайте никому секретные коды карт</h3>
        <!-- 👉 Фрейм с роликом на ютуб -->
        <div class="video">
          <iframe
            src="https://www.youtube.com/embed/EgbpqK1XVFo?si=pI3q6UUtGgZLn17c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>

      <br>
      <br>

      <div>
        <h3>Не сообщайте никому секретные коды карт</h3>
        <!-- 👉 Фрейм с роликом на ютуб -->
        <div class="video">
          <iframe
            src="https://www.youtube.com/embed/EgbpqK1XVFo?si=pI3q6UUtGgZLn17c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>
