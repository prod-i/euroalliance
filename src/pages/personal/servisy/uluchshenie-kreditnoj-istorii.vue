<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Сервисы банка', href: '/personal/servisy' },
          {
            title: 'Улучшение кредитной истории',
            href: '/personal/servisy/uluchshenie-kreditnoj-istorii',
          },
        ]"
      />
      <h1>Улучшение кредитной истории</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Как исправить кредитную историю?
        </template>
        <template #text>
          Кредитная история - это карточка заёмщика, в которую записываются все
          операции с кредитами: какой банк выдавал, сколько есть долгов и
          вовремя ли платит гражданин
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div class="columns columns--cards">
        <div class="column col-6 sm-col-12">
          <div class="information information--grey information--back">
            <h2>Что делать?</h2>
            Истории хранятся в специальных организациях — бюро кредитных историй
            (БКИ). Если банк хочет проверить надежность клиента, он отправляет
            туда запрос.
            <br>
            <br>
            Если вы столкнулись с тем что вы не можете получить кредит в банке,
            то возможно у вас плохая кредитная история
          </div>
        </div>
        <div class="column col-6 sm-col-12">
          <div class="information information--grey information--back">
            <h2>Как проверить?</h2>
            Если вы столкнулись с тем что вы не можете получить кредит в банке,
            то возможно у вас плохая кредитная история. <br>
            Есть множество платных сервисов для проверки, но мы рекомендуем
            обратится в банк ЕВРОАЛЬЯНС с запросом о проверке и дальнейшему
            улучшению кредитной истории
          </div>
        </div>
      </div>

      <br>
      <br>

      <div class="container container--small">
        <h2>Улучшить кредитную историю можно следующими способами</h2>
        <div class="list-shield">
          <ul>
            <li>
              Возьмите небольшой потребительский кредит в банке ЕВРОАЛЬЯНС и
              погасите его без просрочек. Так вы докажете свою
              платежеспособность
            </li>
            <li>
              Оформите
              <nuxt-link to="/personal/karty/bez-procentov">
                кредитную карту
              </nuxt-link>
              в банке ЕВРОАЛЬЯНС и расплачивайтесь ею как можно чаще, чтобы
              увеличить свой кредитный рейтинг. Главное, не забывайте вовремя
              вносить платежи
            </li>
            <li>
              Если у вас есть немного свободных денег, откройте
              <nuxt-link to="/personal/vklady">
                вклад
              </nuxt-link> в банке, где
              вы планируете кредитоваться в будущем. Это повысит вашу репутацию.
            </li>
          </ul>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        Важно помнить, что улучшить кредитную историю вы можете только
        своевременно и в полном объеме гасив кредитные обязательства
      </div>
    </div>
  </section>
</template>
