<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Головной Банк «ЕВРОАЛЬЯНС»' }]" />
      <h1>Головной Банк «ЕВРОАЛЬЯНС»</h1>
      <div class="about-cover">
        <img
          src="/img/about-cover.jpg"
          alt=""
          loading="lazy"
          width="1060"
          height="240"
        >
      </div>

      <br>
      <br>

      <div class="columns columns--cards">
        <div class="column col-4 sm-col-12">
          <document-card class="square" icon="img">
            <template #title>
              <a href="tel:88007009222">8 800 700-92-22</a>
            </template>
            <template #subtitle>
              Единый бесплатный номер по России
            </template>
          </document-card>
        </div>
        <div class="column col-4 sm-col-12">
          <document-card class="square" icon="img">
            <template #title>
              <a href="mailto:info@euroalliance.ru">info@euroalliance.ru</a>
            </template>
            <template #subtitle>
              Пишите письма
            </template>
          </document-card>
        </div>
        <div class="column col-4 sm-col-12">
          <document-card class="square" icon="img">
            <template #title>
              г. Иваново, ул. Станко, дом 13
            </template>
            <template #subtitle>
              153000, Ивановская область
            </template>
          </document-card>
        </div>
      </div>

      <br>
      <br>

      <h2>Режим работы</h2>

      <div class="columns columns--cards">
        <div class="column col-4 lg-col-12">
          <div class="information-time">
            <div class="information-time__title">
              С физическими лицами
            </div>
            <div class="information-time__content">
              <table class="information-time__table">
                <tbody>
                  <tr>
                    <td>Пн-Пт:</td>
                    <td>с 9:00 до 17:30</td>
                  </tr>
                  <tr>
                    <td>Сб:</td>
                    <td>с 10:00 до 13:30</td>
                  </tr>
                  <tr class="last">
                    <td>Вс:</td>
                    <td>Выходной</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="column col-4 lg-col-12">
          <div class="information-time">
            <div class="information-time__title">
              С юридическими лицами и ИП
            </div>
            <div class="information-time__content">
              <table class="information-time__table">
                <tbody>
                  <tr>
                    <td>Пн-Чт:</td>
                    <td>с 9:00 до 17:30</td>
                  </tr>
                  <tr>
                    <td>Пт:</td>
                    <td>с 9:00 до 17:30</td>
                  </tr>
                  <tr>
                    <td>Сб:</td>
                    <td>с 10:00 до 13:30</td>
                  </tr>
                  <tr class="last">
                    <td>Вс:</td>
                    <td>Выходной</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="column col-4 lg-col-12">
          <div class="information-time">
            <div class="information-time__title">
              Доступ к сейфам
            </div>
            <div class="information-time__content">
              <table class="information-time__table">
                <tbody>
                  <tr>
                    <td>Пн-Пт:</td>
                    <td>с 9:00 до 17:30</td>
                  </tr>
                  <tr>
                    <td>Сб:</td>
                    <td>с 10:00 до 13:30</td>
                  </tr>
                  <tr class="last">
                    <td>Вс:</td>
                    <td>Выходной</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <br>

      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        <b>Важно!</b> <br>
        С 11-го по 24-е число месяца суббота — выходной день
      </div>

      <br>

      <div class="columns columns--cards">
        <div class="column col-8 sm-col-12">
          <div class="information-time information-time--hor">
            <div class="information-time__title">
              Обслуживание <br>
              по системе Банк-Клиент
            </div>
            <div class="information-time__content">
              <table class="information-time__table">
                <tbody>
                  <tr>
                    <td>Пн-Пт:</td>
                    <td>с 9:00 до 17:30</td>
                  </tr>
                  <tr>
                    <td>Сб:</td>
                    <td>с 10:00 до 13:30</td>
                  </tr>
                  <tr class="last">
                    <td>Вс:</td>
                    <td>Выходной</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="column col-4 sm-col-12">
          <div class="information-time">
            <div class="information-time__title">
              Обращаем внимание
            </div>
            <div class="information-time__content">
              <div class="information-time__text">
                Используйтеь дистанционный способ передачи платежных поручений через систему интернет-банкинга БАНК-
                КЛИЕНТ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offset-top offset--small content-inside">
      <div class="map-block">
        Тут карта
      </div>
    </div>
  </section>
</template>
