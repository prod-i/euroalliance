<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Страхование', href: '/personal/strahovanie' },
          { title: 'Защита вашего дома' },
        ]"
      />
      <h1>Защита вашего дома</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Дом
        </template>
        <template #text>
          Поможет клиенту компенсировать убытки, причиненные в результате пожара
          или залива, стихийных бедствий, возместит финансовые затраты при
          противоправных действиях третьих лиц, а также включает гражданскую
          ответственность перед соседями.
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <div class="container container--small">
        <h2>Что может быть застраховано</h2>
        <div class="list-shield">
          <ul>
            <li>Жилые каменные строения с годом постройки не ранее 1950 г.</li>
            <li>
              Жилые деревянные дома или дома со смешанными стенами
              (камень+дерево) и/или деревянными перекрытиями – с годом постройки
              не ранее 1980г.
            </li>
            <li>
              Квартиры в многоквартирных каменных домах с годом постройки не
              ранее 1950г
            </li>
          </ul>
        </div>
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Какие услуги входят в программу"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          <div class="list-dotted">
            <ul>
              <li>
                Конструктивные элементы строений: стены, полы, потолок, окна
                (включая оконные блоки и остекления), входные двери, колонны,
                крыша (включая кровлю)
              </li>
              <li>
                Окна (включая оконные блоки и остекления) и входные двери квартир
              </li>
              <li>Внутренняя отделка</li>
              <li>Лекарства, применяемые для лечения в стационаре</li>
              <li>
                Покрытия поверхности стен, пола, потолка отделочными,
                декоративными материалами, межкомнатные двери и т. п
              </li>
              <li>Инженерное оборудование</li>
              <li>Системы водоснабжения, канализации</li>
              <li>
                Электропроводка и т.п. Домашнее имущество Мебель, техника, одежда,
                предметы обихода
              </li>
              <li>Гражданская ответственность</li>
              <li>Ответственность перед соседями</li>
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
                  Параметр
                </p>
              </th>
              <th colspan="3">
                Описание
              </th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr>
              <td>Страховая премия</td>
              <td colspan="4">
                <div class="list-dotted">
                  <ul>
                    <li>
                      Повреждение имущества в результате: пожара, удара молнии,
                      взрыва; воздействия жидкости; стихийных бедствий; внешнего
                      воздействия; противоправных действий третьих лиц;
                      террористического акта
                    </li>
                    <li>
                      Гражданская ответственность за причинение вреда
                      жизни/здоровью/имуществу третьих лиц
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>Осмотр</td>
              <td colspan="3">
                Без осмотра и без описи домашнего имущества
              </td>
            </tr>
          </tbody>
          <tbody class="table-head">
            <tr>
              <td>Объект страхования</td>
              <td style="text-align: center">
                Вариант 1
              </td>
              <td style="text-align: center">
                Вариант 2
              </td>
              <td style="text-align: center">
                Вариант 3
              </td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>
                При страховании строений
                <br>
                <small>
                  конструктивные элементы, внутренняя отделка, инженерные сети и
                  оборудование
                </small>
              </td>
              <td style="text-align: center">
                60 000 ₽
              </td>
              <td style="text-align: center">
                120 000 ₽
              </td>
              <td style="text-align: center">
                190 000 ₽
              </td>
            </tr>
            <tr>
              <td>
                Домашнее имущество
              </td>
              <td style="text-align: center">
                60 000 ₽
              </td>
              <td style="text-align: center">
                120 000 ₽
              </td>
              <td style="text-align: center">
                190 000 ₽
              </td>
            </tr>
            <tr>
              <td>
                Гражданская ответственность
              </td>
              <td style="text-align: center">
                60 000 ₽
              </td>
              <td style="text-align: center">
                120 000 ₽
              </td>
              <td style="text-align: center">
                190 000 ₽
              </td>
            </tr>
            <tr>
              <td>
                Общая страховая сумма
              </td>
              <td style="text-align: center">
                <b>180 000 ₽</b>
              </td>
              <td style="text-align: center">
                <b>360 000 ₽</b>
              </td>
              <td style="text-align: center">
                <b>540 000 ₽</b>
              </td>
            </tr>
            <tr>
              <td>
                Страховая премия
              </td>
              <td style="text-align: center">
                999 ₽
              </td>
              <td style="text-align: center">
                1 998 ₽
              </td>
              <td style="text-align: center">
                2 997 ₽
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br>
      <br>

      <small>
        * КСП без активации - договор вступает силу с 15 дня, следующего за
        датой покупки КСП с активацией - при самостоятельной активации договор
        вступает силу с 15 дня, следующего за датой активации при автоматической
        активации договор вступает в силу с 31 дня, следующего за датой оплаты
      </small>

      <br>
      <br>

      <!-- 👉 Информационный блок с серым фоном -->
      <how-to-get-insurance-block>«Защита вашего дома»</how-to-get-insurance-block>

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
    this.$faq.setArrayLength(1)
  }
}
</script>
