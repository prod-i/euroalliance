<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Сервисы банка', href: '/personal/servisy' },
          {
            title: 'Индивидуальные сейфы',
          },
        ]"
      />
      <h1>Индивидуальные сейфы</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Аренда сейфов в Банке «ЕВРОАЛЬЯНС» — это:
        </template>
        <template #text>
          <div class="list-shield">
            <ul>
              <li>
                Современное оборудовано в соответствии со стандартами
                безопастности
              </li>
              <li>Охрана 24 часа в сутки</li>
              <li>
                Каждый сейф можно открыть только двумя ключами одновременно
              </li>
            </ul>
          </div>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div class="container container--small center">
        <h2>Вы можете арендовать сейф в офисах Банка</h2>
        Арендная плата за пользование банковским сейфом зависит от размера сейфа
        и срока аренды. <br>
        При себе необходимо иметь паспорт.<br>
        Арендовать сейф могут как граждане, так и юридические лица.
      </div>

      <br>

      <div class="columns columns--cards">
        <div class="column col-4 md-col-12">
          <div class="city-card">
            <div class="city-card__content">
              <div class="city-card__title">
                Иваново
              </div>
              <ul class="city-card__info">
                <li>
                  <span>Головной банк</span>
                  ул. Станко, д.13
                </li>
                <li>
                  <span>ДО «Северный»</span>
                  пр. Ленина, 57
                </li>
              </ul>
            </div>
            <div class="city-card__aside">
              <img
                src="/img/ivanovo.png"
                alt=""
                width="94"
                height="94"
                loading="lazy"
              >
            </div>
          </div>
        </div>
        <div class="column col-4 md-col-12">
          <div class="city-card">
            <div class="city-card__content">
              <div class="city-card__title">
                Москва
              </div>
              <ul class="city-card__info">
                <li>
                  <span>ДО «Московский»</span>
                  ул. Кузнецкий мост, 21/5
                </li>
              </ul>
            </div>
            <div class="city-card__aside">
              <img
                src="/img/msk.png"
                alt=""
                width="94"
                height="94"
                loading="lazy"
              >
            </div>
          </div>
        </div>
        <div class="column col-4 md-col-12">
          <div class="city-card">
            <div class="city-card__content">
              <div class="city-card__title">
                Кинешма
              </div>
              <ul class="city-card__info">
                <li>
                  <span>ДО «Первый Кинешемский»</span>
                  ул. Ленина, 47
                </li>
              </ul>
            </div>
            <div class="city-card__aside">
              <img
                src="/img/kineshma.png"
                alt=""
                width="94"
                height="94"
                loading="lazy"
              >
            </div>
          </div>
        </div>
      </div>

      <br>

      <!-- 👉 Блок с серым фоном -->
      <div class="step-box back-grey">
        <div class="step-box__header">
          <div class="step-box__title">
            Как арендовать банковский сейф
          </div>
          Арендовать сейф могут физические и юридические лица
        </div>
        <div class="step-box__content">
          <ul>
            <li>Заключить договор с банком</li>
            <li>Получить персональную карточку и ключ</li>
            <li>Выбрать размер сейфа</li>
          </ul>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 Документы -->
      <div>
        <h3>Тарифы</h3>
        <div class="columns columns--cards">
          <div class="column col-6 sm-col-12">
            <document-card>
              <template #title>
                <a href="#">Аренда сейфов</a>
              </template>
              <template #size>
                77 kB
              </template>
              <template #subtitle>
                Головной банк в г. Иваново, ул. Станко, 13
              </template>
            </document-card>
          </div>
          <div class="column col-6 sm-col-12">
            <document-card>
              <template #title>
                <a href="#">Приложение к анкете</a>
              </template>
              <template #size>
                77 kB
              </template>
              <template #subtitle>
                ДО «Северный» в г. Иваново, пр. Ленина, 57
              </template>
            </document-card>
          </div>
        </div>
      </div>

      <br>
      <br>

      <div>
        <h3>Формы договоров</h3>
        <div class="columns columns--cards">
          <div class="column col-6 sm-col-12">
            <document-card>
              <template #title>
                <a href="#">Аренда сейфов</a>
              </template>
              <template #size>
                77 kB
              </template>
              <template #subtitle>
                Типовая форма договора аренды индивидуального банковского сейфа
                (для юридических лиц)
              </template>
            </document-card>
          </div>
          <div class="column col-6 sm-col-12">
            <document-card>
              <template #title>
                <a href="#">Приложение к анкете</a>
              </template>
              <template #size>
                77 kB
              </template>
              <template #subtitle>
                Типовая форма договора аренды индивидуального банковского сейфа
                (для юридических лиц)
              </template>
            </document-card>
          </div>
          <div class="column col-6 sm-col-12">
            <document-card>
              <template #title>
                <a href="#">Приложение к анкете</a>
              </template>
              <template #size>
                77 kB
              </template>
              <template #subtitle>
                Типовая форма договора аренды индивидуального банковского сейфа
                (для юридических лиц)
              </template>
            </document-card>
          </div>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Аренда сейфа при совершении сделок купли-продажи"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Условия доступа"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(2)
  }
}
</script>
