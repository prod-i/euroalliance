<template>
  <section class="content">
    <div class="container">
      <!-- 🤟 Хлебные крошки-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Денежные переводы', href: '/personal/denezhnye-perevody' },
        ]"
      />

      <h1>Денежные переводы</h1>

      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Сделайте первый шаг к Прибыли!
        </template>
        <template #text>
          В офисах Банка «ЕВРОАЛЬЯНС» Вы можете осуществить денежные переводы с
          помощью систем денежных переводов.
        </template>
        <template #link>
          <nuxt-link
            to="/personal/denezhnye-perevody/perevod-sredstv-s-karty-na-kartu"
            class="btn btn--full btn--white"
          >
            Переводы с карту на карту
          </nuxt-link>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div class="transfers-blocks">
        <!---->
        <div class="transfer-item">
          <div class="transfer-item__image">
            <img src="/img/korona-pay.svg" alt="" loading="lazy">
          </div>
          <div class="transfer-item__content">
            <div class="transfer-item__title">
              KoronaPay
            </div>
            <div class="transfer-item__text">
              Сервис мгновенных безадресных денежных переводов без открытия
              счета «Золотая Корона – Денежные переводы» – это 48 тыс. пунктов
              обслуживания, расположенных в странах: Абхазия, Азербайджан,
              Беларусь, Вьетнам, Великобритания, Греция, Грузия, Израиль,
              Казахстан, Киргизия, Латвия, Молдова, Монголия, Непал, Россия,
              Таджикистан, Турция, Узбекистан, Украина и Чехия.
            </div>
            <div class="transfer-item__footer">
              <a href="#" class="btn btn--fixed btn--mobile">Подробнее</a>
            </div>
          </div>
        </div>
      </div>

      <div class="offset-top offset--small">
        <!-- 👉 Информационный блок с коричневым фоном -->
        <div class="information information--icon information--i">
          В офисах Банка «ЕВРОАЛЬЯНС» (кроме Московского филиала) Вы можете
          осуществить денежные переводы с помощью систем денежных переводов.
          Получайте не только кешбэк с каждой покупки, но и ежемесячный процент
          на остаток. <br>
          Обслуживание и снятие наличных в банкоматах «ЕВРОАЛЬЯНС» и партнеров —
          бесплатно при выполнении простых условий. Сделайте первый шаг к
          Прибыли!
        </div>
      </div>
    </div>
  </section>
</template>
