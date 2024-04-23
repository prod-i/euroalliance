<template>
  <section class="content content-inside">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Сервисы банка', href: '/personal/servisy' },
          {
            title: 'Интернет-банк “iBank”',
          },
        ]"
      />
      <h1>Интернет-банк “iBank”</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          «iBank» от Евроальянс
        </template>
        <template #text>
          Регистрируйтесь в новом интернет-банке «iBank» для держателей карт
          Банка «ЕВРОАЛЬЯНС»!
        </template>
        <template #link>
          <div class="app footer-app">
            <a href="#" class="app-link app-link--color">
              <img
                src="/img/app-google-color.svg"
                alt=""
                width="146"
                height="46"
                loading="lazy"
              >
            </a>
            <a href="#" class="app-link app-link--color">
              <img
                src="/img/app-store-color.svg"
                alt=""
                width="146"
                height="46"
                loading="lazy"
              >
            </a>
          </div>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div>
        <h2>Новый банк — новые возможности</h2>
        В новом интернет-банке появилась возможность совершать операции по
        счетам и картам Банка ЕВРОАЛЬЯНС, включая пополнение вкладов и погашение
        кредитов
      </div>

      <br>
      <br>

      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        Для всех держателей карт банка «ЕВРОАЛЬЯНС» стал доступен новый
        интернет-банк для физических лиц — «iBank» в web-версии по адресу:
        <a href="#">online.euroalliance.ru</a>
      </div>

      <br>
      <br>

      <div>
        <h2>О предыдущем интернет-банке — handybank</h2>
        Обратите внимание, что c 27.12.2021 г. прекращается поддержка системы
        «Handybank» для частных клиентов. Для перехода в новый интернет-банк
        «iBank» потребуется пройти краткую процедуру регистрации тут. Каких-либо
        действий по удалению аккаунта в «Handybank» предпринимать не следует
      </div>

      <br>
      <br>

      <div class="columns columns--cards">
        <div class="column col-4 md-col-12">
          <nuxt-link to="/personal/servisy/ibank" class="column btn btn--full">
            Войти в «iBank» для физических лиц
          </nuxt-link>
        </div>
        <div class="column col-8 md-col-12">
          Если возникли вопросы, звоните по телефону поддержки <br>
          <b>8 800-700-92-22</b> или <b>+7 (4932) 41-25-79</b>
        </div>
      </div>

      <br>
      <br>

      <div>
        <h3>Документы</h3>
        <div class="columns columns--cards">
          <document-card>
            <template #title>
              <a href="#">Правила по предоставлению дистанционного банковского
                обслуживания с использованием системы ibank</a>
            </template>
            <template #size>
              794 kB
            </template>
          </document-card>
        </div>
      </div>
    </div>

    <br>
    <br>

    <!-- 👉 Мобильное приложение банка -->
    <app-mobile-block />
  </section>
</template>
<script lang="ts">
import AppMobileBlock from '~/components/blocks/app-mobile-block.vue'

export default {
  components: {
    AppMobileBlock
  }
}
</script>
