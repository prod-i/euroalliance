<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'О Банке', href : '/o-banke' },
          { title: 'Банковский надзор' }
        ]"
      />
      <h1>Банковский надзор</h1>

      <page-showcase>
        <template #title>
          С нами — в безопасности!
        </template>
        <template #text>
          Надзор за соблюдением требований законодательства Российской Федерации
          в сфере защиты прав потребителей финансовых услуг осуществляет Служба
          по защите прав потребителей и обеспечению доступности финансовых услуг Банка России
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      Обращение о нарушении действиями (бездействием) кредитной организации законодательства Российской Федерации, а
      также охраняемых законом прав и интересов физических или юридических лиц, может быть направлено для рассмотрения
      в Банк России через интернет-приемную <a href="">cbr.ru/Интернет-приемная</a>

      <br>
      <br>

      <div class="columns">
        <div class="column col-8 md-col-12">
          <div class="call-block center">
            <div class="call-block__title">
              Телефоны контактного центра Центрального банка Российской Федерации
            </div>

            <div class="columns columns--cards">
              <div class="column col-4 sm-col-12">
                <div class="call-item">
                  <div class="call-item__icon">
                    <img src="/temp/icon.svg" alt="" loading="lazy">
                  </div>
                  <div class="call-item__phone">
                    300
                  </div>
                  <div class="call-item__text">
                    бесплатно для звонков с мобильных телефонов
                  </div>
                </div>
              </div>
              <div class="column col-4 sm-col-12">
                <div class="call-item">
                  <div class="call-item__icon">
                    <img src="/temp/icon.svg" alt="" loading="lazy">
                  </div>
                  <div class="call-item__phone">
                    8 800 300 3000
                  </div>
                  <div class="call-item__text">
                    бесплатно для звонков из регионов России
                  </div>
                </div>
              </div>
              <div class="column col-4 sm-col-12">
                <div class="call-item">
                  <div class="call-item__icon">
                    <img src="/temp/icon.svg" alt="" loading="lazy">
                  </div>
                  <div class="call-item__phone">
                    +7 499 300 3000
                  </div>
                  <div class="call-item__text">
                    в соответствии с тарифами оператора
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column col-4 md-col-12">
          <div class="call-block center">
            <div class="call-block__title">
              Банковский надзор
            </div>
            <div class="call-item">
              <div class="call-item__image">
                <img src="/img/bank-russia.svg" alt="" loading="lazy">
              </div>
              <div class="call-item__title">
                Осуществляет <br>
                Служба текущего банковского надзора Банка России
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
