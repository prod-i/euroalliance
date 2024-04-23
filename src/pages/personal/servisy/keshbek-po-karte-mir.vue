<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Сервисы банка', href: '/personal/servisy' },
          {
            title: 'Кешбек по карте “МИР”',
            href: '/personal/servisy/keshbek-po-karte-mir',
          },
        ]"
      />
      <h1>Кешбек по карте “МИР”</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Кешбек до 20% за покупки по карте «МИР»
        </template>
        <template #text>
          Получайте кешбэк от 2% до 20% за покупки у партнёров по карте МИР
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div class="container container--small">
        <h2>Пользуйтесь всеми возможностями при оплате картой «Мир»:</h2>
        <div class="list-shield">
          <ul>
            <li>Скидки на доставку еды, такси, подписки и многое другое</li>
            <li>Оплата госпошлин без комиссий</li>
            <li>Экономия на поездках в общественном транспорте</li>
          </ul>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 Блок с серым фоном -->
      <div class="step-box back-grey">
        <div class="step-box__header">
          <div class="step-box__title">
            Как получить карту «МИР»
          </div>
          ПС «Мир» регулярно проводит различные акции с банками, магазинами,
          государственными и транспортными компаниями
        </div>
        <div class="step-box__content">
          <ul>
            <li><a href="#">Зарегистрируйте</a> вашу карту «Мир»</li>
            <li><a href="#">Ищите</a> выгодные предложения в вашем городе</li>
            <li>Получайте кешбэк за покупки у партнёров</li>
          </ul>
        </div>
        <div class="offset-footer">
          <a href="#" class="btn btn--full">Оставить заявку</a>
        </div>
      </div>

      <br>
      <br>
    </div>
    <!-- 👉 Остались вопросы? -->
    <any-questions-block />
  </section>
</template>
<script lang="ts">
import AnyQuestionsBlock from '~/components/blocks/any-questions-block.vue'

export default {
  components: {
    AnyQuestionsBlock
  }
}
</script>
