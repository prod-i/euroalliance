<template>
  <section class="content">
    <div class="container">
      <!-- 🤟 Хлебные крошки-->
      <ui-breadcrumbs
        :pages="[
          {
            title: 'Банковские карты',
            href: '/personal/karty',
          },
          {
            title: 'Руководство по использованию карты',
          },
        ]"
      />
      <h1>Руководство по использованию банковской карты</h1>
      Все, что нужно знать о карте "ЕВРОАЛЬЯНС" и ее использовании Вы всегда
      можете найти в нашем руководстве

      <br>
      <br>

      <div class="columns">
        <div class="column col-6 sm-col-12">
          <document-card>
            <template #title>
              <a href="#">Руководство по использованию карты</a>
            </template>
            <template #size>
              227 kB
            </template>
          </document-card>
        </div>
      </div>
    </div>
  </section>
</template>
