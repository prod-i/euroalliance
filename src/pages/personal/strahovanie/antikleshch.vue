<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Страхование', href: '/personal/strahovanie' },
          { title: 'Антиклещ' },
        ]"
      />
      <h1>Антиклещ</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Антиклещ
        </template>
        <template #text>
          Клещи опасны тем, что переносят инфекционные заболевания, которые
          могут привести к инвалидности или смерти
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div>
        <h2>Что делать при обнаружении клеща?</h2>
        При обнаружении клеща на коже очень важно вовремя выявить, попала ли в
        кровь инфекция и начать лечение. Страховка «Защита от клеща» включает
        качественную медицинскую помощь при укусе или наползании насекомого, а
        также денежные выплаты
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Медицинские услуги включают"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          <div class="list-dotted">
            <ul>
              <li>Удаление клеща и исследование клеща</li>
              <li>Медицинская помощь при укусе или наползании клеща</li>
              <li>Скорая медицинская помощь при необходимости</li>
              <li>Лечение в стационаре</li>
              <li>Реабилитация после лечения</li>
            </ul>
          </div>
        </faq-item>
        <faq-item
          title="Преимущества программы"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          <div class="list-dotted">
            <ul>
              <li>Лечение на сумму до 3 000 000 ₽</li>
              <li>Выплата до 100 000 ₽</li>
              <li>Включены все переносимые клещами инфекции</li>
              <li>Без ограничений по возрасту</li>
              <li>Большой выбор клиник без ограничения на посещение</li>
            </ul>
          </div>
        </faq-item>
      </div>

      <br>
      <br>

      <div class="table">
        <table>
          <thead>
            <tr>
              <th>
                <p style="text-align: left">
                  Риски
                </p>
              </th>
              <th>Вариант 1</th>
              <th>Вариант 2</th>
            </tr>
          </thead>
          <tbody class="table-head">
            <tr>
              <td>Срок страхования</td>
              <td colspan="2">
                <p style="text-align: center">
                  1 год
                </p>
              </td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>Страховая премия, тариф «Детский»/«Взрослый»</td>
              <td>399 ₽</td>
              <td>499 ₽</td>
            </tr>
            <tr>
              <td>Страховая сумма</td>
              <td>1 500 000 ₽</td>
              <td>3 000 000 ₽ ДМС + 100 000 ₽ НС </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br>
      <br>

      <!-- 👉 Информационный блок с серым фоном -->
      <how-to-get-insurance-block>«Антиклещ»</how-to-get-insurance-block>

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
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(2)
  }
}
</script>
