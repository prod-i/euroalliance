<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Страхование', href: '/personal/strahovanie' },
          { title: 'Спортивная защита' },
        ]"
      />
      <h1>Спортивная защита</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Спортивная защита
        </template>
        <template #text>
          Это полис для детей и взрослых на случай неожиданных травм и
          повреждений. Страховка подойдет для любителей активного отдыха и
          спортсменов
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div class="table">
        <table>
          <thead>
            <tr>
              <th style="text-align: left">
                Заголовок
              </th>
              <th style="text-align: left">
                Спортивные мероприятия
              </th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr>
              <td>
                Смерт в результате НС
                <small>выплата в % от страховой суммы</small>
              </td>
              <td>
                100%
              </td>
            </tr>
            <tr>
              <td>
                Смерт в результате НСиБ
                <small>выплата в % от страховой суммы</small>
              </td>
              <td>
                Отсутствует
              </td>
            </tr>
            <tr>
              <td>
                Инвалидность I, II, III группы
                <small>выплата в % от страховой суммы</small>
              </td>
              <td>
                I группы/«ребёнок-инвалид» — 100% <br>
                II группа — 80% <br>
                III группа — 160%
              </td>
            </tr>
            <tr>
              <td>
                Дополнительные риски
              </td>
              <td>
                Согласно в таблице выплат: в % от страховой суммы иди сублимата
              </td>
            </tr>
            <tr>
              <td>
                Дополнительные риски
                <small>по желанию страховой</small>
              </td>
              <td>
                Телемедицина
              </td>
            </tr>
            <tr>
              <td>
                Страховая сумма в рублях
                <small>по основным рискам</small>
              </td>
              <td>
                а: 30 000 ₽ — 500 000 ₽ <br>
                б: 30 000 ₽ — 1 000 000 ₽
                <small>Зависит от возраста и варианта программы</small>
              </td>
            </tr>
          </tbody>
          <tbody class="table-head">
            <tr>
              <td colspan="2" style="text-align: center">
                Прочие параметры
              </td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>Возраст застрахованного</td>
              <td>
                От 1 года до 69 лет
              </td>
            </tr>
            <tr>
              <td>Срок страхования</td>
              <td>
                От 1 дня до 1 месяца
              </td>
            </tr>
            <tr>
              <td>Начало срока страхования</td>
              <td>
                С момента хаключения
                <small>при страховании на срок менее 22 дней применяется понижающий коэффициент</small>
              </td>
            </tr>
            <tr>
              <td>Период ожидания</td>
              <td>
                Отсутствует
                <small>Или в любой из 90 дней после даты заключения договора по выбору страхователя</small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br>
      <br>

      <div class="columns columns--cards">
        <div class="column col-6 sm-col-12">
          <div class="information information-card information--back information--yellow-light">
            <div class="information-card__content">
              <h3>Стоимость</h3>
              Стоимость зависит от срока, вида спорта и количества
              застрахованных, можно воспользоваться
              <nuxt-link to="">
                калькулятором на сайте
              </nuxt-link>
            </div>
            <div class="information-card__footer">
              <nuxt-link to="" class="btn btn--fixed btn--mobile">
                Рассчитать стоимость страховки
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="column col-6 sm-col-12">
          <div class="information information-card information--back information--yellow-light">
            <div class="information-card__content">
              <h3>Как оформить страховку</h3>
              Приобрести продукт «Спортивная защита» можно в отделениях банка
              <nuxt-link to="/contacts/offices">
                ЕВРОАЛЬЯНС рядом с вами
              </nuxt-link>
            </div>
            <div class="information-card__footer">
              <nuxt-link to="" class="btn btn--fixed btn--mobile">
                Оформить страховку
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <br>

      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        <h4>Информация о партнере <a href="#">«Росгосстрах»</a></h4>
        Страховая услуга: Антиклещ предоставляется страховыми компаниями —
        партнерами Банка. Не является офертой.<br>
        Для получения более подробной информации по страхованию можно получить в
        подразделениях Банка<br>(Головной офис: г. Иваново, ул. Станко. 13,
        телефон 8 (800-70) 0-92-22) и/или на сайте банка www.euroalliance.ru.<br>
        Базовая лицензия ЦБ РФ № 1781 от 18 октября 2018 г. Реклама АО КИБ
        «ЕВРОАЛЬЯНС». Реклама 0+.
      </div>
    </div>
  </section>
</template>
