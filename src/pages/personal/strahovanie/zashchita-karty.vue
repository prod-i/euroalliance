<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Страхование', href: '/personal/strahovanie' },
          { title: 'Защита карты' },
        ]"
      />
      <h1>Защита карты</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Заголовок рерайтеру
        </template>
        <template #text>
          Помогает устранить последствия утраты банковской карты,
          несанкционированное списание денежных средств со счета клиента,
          хищение у держателя банковской карты и денежных средств
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div>
        <h2>Удобство</h2>
        Оперативное возмещение утраченных сумм до 150 000 ₽, бесплатная замена
        карты при размагничивании или механическом повреждении
      </div>

      <br>
      <br>

      <div class="table">
        <table>
          <thead>
            <tr>
              <th>
                <p style="text-align: left">
                  Покрытие
                </p>
              </th>
              <th colspan="2">
                Объём покрытия
              </th>
            </tr>
          </thead>
          <tbody class="table-head">
            <tr>
              <td colspan="3" style="text-align: center">
                <small>Лимит возмещения на 1 страховой случай в рамках общей СС</small>
              </td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>
                <b>Риск</b> Утрата банковской карты (действует до первого
                страхового случая)
              </td>
              <td style="text-align: center">
                1 000 ₽
              </td>
              <td style="text-align: center">
                1 000 ₽
              </td>
            </tr>
            <tr>
              <td>
                <b>Риск</b> Несанкционированное списание денежных средств со
                счёта клиента
              </td>
              <td style="text-align: center">
                50 000 ₽
              </td>
              <td style="text-align: center">
                100 000 ₽
              </td>
            </tr>
            <tr>
              <td>
                <b>Риск</b> Утрата банковской карты (действует до первого
                страхового случая)
              </td>
              <td style="text-align: center">
                25 000 ₽
              </td>
              <td style="text-align: center">
                50 000 ₽
              </td>
            </tr>
            <tr>
              <td>
                <b>Риск</b> Утрата банковской карты (действует до первого
                страхового случая)
              </td>
              <td style="text-align: center">
                76 000 ₽
              </td>
              <td style="text-align: center">
                151 000 ₽
              </td>
            </tr>
            <tr>
              <td><b>Стоимость</b></td>
              <td style="text-align: center">
                <b>1 000 ₽</b>
              </td>
              <td style="text-align: center">
                <b>3 000 ₽</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br>
      <br>

      <!-- 👉 Информационный блок с серым фоном -->
      <how-to-get-insurance-block>«Защита карты»</how-to-get-insurance-block>

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
<script>
import HowToGetInsuranceBlock from '~/components/blocks/how-to-get-insurance-block.vue'

export default {
  components: {
    HowToGetInsuranceBlock
  }
}
</script>
