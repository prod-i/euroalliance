<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Помощь бизнесу', href: '/biznesu/pomoshch-biznesu' },
          { title: 'Методические рекомендации предпринимателю' },
        ]"
      />
      <h1>Методические рекомендации предпринимателю</h1>

      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Методология
        </template>
        <template #text>
          Банк России специально для предпринимателей разработал понятные
          методические рекомендации, которые способствуют
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div class="columns columns--cards">
        <div class="column col-9 md-col-12">
          <div class="list-shield">
            <h3>Рекомендации</h3>
            <ul>
              <li>
                Снижению напряженности в вопросах применения банками
                «противолегализационных» мер
              </li>
              <li>
                Повышению эффективности (прозрачности) взаимодействия
                предпринимателей с банками
              </li>
              <li>
                Повышению информированности предпринимателей о порядке работы
                межведомственной комиссии, созданной при Банке России
              </li>
            </ul>
          </div>
        </div>
        <div class="column col-3 md-col-12">
          <document-card class="square">
            <template #title>
              <a href="#">Методические рекомендации для предпринимателя</a>
            </template>
            <template #size>
              223 kB
            </template>
          </document-card>
        </div>
      </div>
    </div>
  </section>
</template>
