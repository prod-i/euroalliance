<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Страхование', href: '/personal/strahovanie' },
          { title: 'КАСКО Профессионал' },
        ]"
      />
      <h1>КАСКО Профессионал</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          КАСКО Профессионал
        </template>
        <template #text>
          «Каско Профессионал» — отличная альтернатива обычному полису КАСКО. Он
          стоит дешевле и не требует осмотра автомобиля, а включает в себя не
          только ремонт или выплаты в случае ДТП или падения предметов, но и
          техническую помощь на дороге
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div class="container container--small">
        <h2>Преимущества программы</h2>
        <div class="list-shield">
          <ul>
            <li>
              Дешевле обычного каско, при этом защитит вас и ваш автомобиль при
              ДТП по вине третьих лиц. Обычный полис ОСАГО не поможет, если у
              виновника аварии его не окажется, или он будет поддельным, а
              также, если виновник ДТП находился в состоянии опьянения.
            </li>
            <li>
              Ваш автомобиль будет отремонтирован, либо вы получите выплату до 1
              000 000 рублей при невозможности ремонта
            </li>
            <li>
              Осмотр автомобиля перед заключением договора не требуется, а цена
              будет одинаковой для любого транспортного средства и водителя
            </li>
            <li>
              Застраховать можно иномарки не старше 12 лет и отечественные
              автомобили не старше 7 лет
            </li>
          </ul>
        </div>
      </div>

      <br>
      <br>

      <div>
        <h2>Описание программы</h2>
        При обнаружении клеща на коже очень важно вовремя выявить, попала ли в
        кровь инфекция и начать лечение. Страховка «Защита от клеща» включает
        качественную медицинскую помощь при укусе или наползании насекомого, а
        также денежные выплаты
      </div>

      <br>
      <br>

      <div class="table">
        <table>
          <thead>
            <tr>
              <th>
                <p style="text-align: left">
                  Заголовок
                </p>
              </th>
              <th>Стандарт</th>
              <th>Максимум</th>
            </tr>
          </thead>
          <tbody class="table-body table-rowspan">
            <tr>
              <td>
                Ущерб/Полная гибель в ДТП по вине 3х лиц
              </td>
              <td rowspan="2" style="text-align: center">
                600 000 ₽, но более действительно стоимости ТС
              </td>
              <td rowspan="2" style="text-align: center">
                1 000 000 ₽, но более действительно стоимости ТС
              </td>
            </tr>
            <tr>
              <td>Внешнее воздействие на ТС инородного предмета</td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>Страховая премия</td>
              <td style="text-align: center">
                5 500 ₽
              </td>
              <td style="text-align: center">
                10 000 ₽
              </td>
            </tr>
            <tr>
              <td>Срок страхования</td>
              <td style="text-align: center">
                1 год
              </td>
              <td style="text-align: center">
                1 год
              </td>
            </tr>
          </tbody>
          <tbody class="table-head">
            <tr>
              <td colspan="4" style="text-align: center">
                Прочие параметры
              </td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>Страховая премия</td>
              <td colspan="4">
                <div class="list-dotted">
                  <ul>
                    <li>
                      Коробка квартиры (конструктив) – от 700 000 ₽ до 10 000
                      000 ₽
                    </li>
                    <li>
                      Отделка и оборудование – от 100 000 ₽ до 5 000 000 ₽
                    </li>
                    <li>
                      Мебель, техника, личные вещи, предметы интерьера – от 50
                      000 ₽ до 3 000 000 ₽
                    </li>
                    <li>Ущерб соседям – от 50 000 ₽ до 3 000 000 ₽</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>Медицинская помощь</td>
              <td colspan="4" style="text-align: center">
                Органихация и оказание медицинских услуг в случае травм,
                полученной при ДТП
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br>
      <br>

      <!-- 👉 Информационный блок с серым фоном -->
      <how-to-get-insurance-block>«КАСКО Профессионал»</how-to-get-insurance-block>

      <br>
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
<script lang="ts">
import HowToGetInsuranceBlock from '~/components/blocks/how-to-get-insurance-block.vue'

export default {
  components: {
    HowToGetInsuranceBlock
  }
}
</script>
