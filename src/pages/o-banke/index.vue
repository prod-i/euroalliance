<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'О Банке «ЕВРОАЛЬЯНС»' }]" />
      <h1>О Банке «ЕВРОАЛЬЯНС»</h1>

      <div class="about-page">
        <div class="about-cover">
          <img src="/img/about-cover.jpg" alt="" loading="lazy" width="1060" height="240">
        </div>

        <div class="about-header center">
          <div class="about-header__title">
            Банк «ЕВРОАЛЬЯНС»
          </div>
          <div class="about-header__text">
            Банк «ЕВРОАЛЬЯНС» основан в городе Иваново 23 апреля 1992 года, имеет Базовую лицензию Банка России № 1781
            от 18.10.18.
          </div>
        </div>

        <div class="columns columns--cards">
          <div class="column col-6 md-col-12">
            <div class="information information-card information--back information--grey">
              <div class="information-card__content">
                <h3>Корпоративным клиентам</h3>
                Текст рерайтеру написать. Если вы столкнулись с тем
                что вы не можете получить кредит в банке, то возможно
                у вас плохая кредитная история
              </div>
              <div class="information-card__footer">
                <nuxt-link to="" class="btn btn--white btn--fixed">
                  Подробнее
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="column col-6 md-col-12">
            <div class="information information-card information--back information--grey">
              <div class="information-card__content">
                <h3>Частным лицам</h3>
                Текст рерайтеру написать. Если вы столкнулись с тем
                что вы не можете получить кредит в банке, то возможно
                у вас плохая кредитная история
              </div>
              <div class="information-card__footer">
                <nuxt-link to="" class="btn btn--white btn--fixed">
                  Подробнее
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="about-box">
          <div class="about-box__content">
            <div class="about-box__title">
              Вклады застрахованны
            </div>
            <div class="about-box__text">
              С 27 января 2005 года Банк является Участником государственной системы обязательного страхования вкладов
              (Свидетельство о включении банка в реестр банков-участников № 500). В 2006 году Банк стал Ассоциированным
              членом платежной системы VISA International. С 1997 года является Членом Ассоциации российских банков
            </div>
          </div>
          <div class="about-box__image">
            <img src="/img/icon-vklady.svg" alt="" width="180" height="180" loading="lazy">
          </div>
        </div>

        <div class="about-box about-box--grey about-box--reverse">
          <div class="about-box__content">
            <div class="about-box__title">
              Головной офис банка: Иваново, ул. Станко, д. 13
            </div>
            <div class="about-box__text">
              Офисная сеть Банка насчитывает 8 подразделений. Дополнительные офисы банка располагаются в городе Иваново,
              в пяти населенных пунктах Ивановской области.
              <br>
              По адресу г. Москва, ул. Кузнецкий Мост, д. 21/5 располагается дополнительный офис «Московский»
            </div>
          </div>
          <div class="about-box__image">
            <img src="/img/about-office.jpg" alt="" loading="lazy">
          </div>
        </div>

        <div class="columns columns--cards">
          <div class="column col-3 md-col-6 sm-col-12">
            <document-card class="square" icon="i">
              <template #title>
                <a href="#">Кредитование</a>
              </template>
            </document-card>
          </div>
          <div class="column col-3 md-col-6 sm-col-12">
            <document-card class="square" icon="i">
              <template #title>
                <a href="#">Вклады</a>
              </template>
            </document-card>
          </div>
          <div class="column col-3 md-col-6 sm-col-12">
            <document-card class="square" icon="i">
              <template #title>
                <a href="#">Банковские карты</a>
              </template>
            </document-card>
          </div>
          <div class="column col-3 md-col-6 sm-col-12">
            <document-card class="square" icon="i">
              <template #title>
                <a href="#">Расчетно-кассовое обслуживание</a>
              </template>
            </document-card>
          </div>
        </div>

        <div class="columns columns--cards">
          <div class="column col-6 sm-col-12">
            <nuxt-link
              to=""
              class="box-link"
            >
              <div class="box-link__image">
                <img src="/temp/icon.svg" alt="" loading="lazy">
              </div>
              <div class="box-link__title">
                Реквизиты и лицензии
              </div>
            </nuxt-link>
          </div>
          <div class="column col-6 sm-col-12">
            <nuxt-link
              to=""
              class="box-link"
            >
              <div class="box-link__image">
                <img src="/temp/icon.svg" alt="" loading="lazy">
              </div>
              <div class="box-link__title">
                Банковский надзор
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
