<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Страхование', href: '/personal/strahovanie' },
          { title: 'Здоровье под защитой' },
        ]"
      />
      <h1>Здоровье под защитой</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Альтернатива полису ДМС
        </template>
        <template #text>
          Страховой продукт «Защита вас и ваших близких» - это возможность
          позаботиться о себе и самых близких людях и получить достойную
          денежную компенсацию, если вы или кто-то из вашего окружения
          пострадает в результате несчастного случая.
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div class="table">
        <table>
          <thead>
            <tr>
              <th>Заголовок</th>
              <th>
                Базовый
                <small>
                  1 застрахованный, <br>
                  от 18 до 80 лет
                </small>
              </th>
              <th>
                Комфорт
                <small>
                  1 застрахованный, <br>
                  от 18 до 80 лет
                </small>
              </th>
              <th>
                Семейная
                <small>
                  до 3-х застрахованных, <br>
                  от 0 до 80 лет
                </small>
              </th>
            </tr>
          </thead>
          <tbody class="table-head">
            <tr>
              <td colspan="4" style="text-align: center">
                Диагностика
              </td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>
                Гинекология, урология, кардиология, эндокринология, неврология, дерматология, гастроэнтерология,
                аллергология
              </td>
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
            </tr>
            <tr>
              <td>Педиатрия</td>
              <td />
              <td />
              <td>
                <div class="check" />
              </td>
            </tr>
          </tbody>
          <tbody class="table-head">
            <tr>
              <td colspan="4" style="text-align: center">
                Лечение
              </td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>Амбулаторное</td>
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
            </tr>
            <tr>
              <td>Дневной стационар</td>
              <td />
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
            </tr>
            <tr>
              <td>Стационар полного пребывания</td>
              <td />
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
            </tr>
            <tr>
              <td>ЭКО</td>
              <td />
              <td />
              <td />
            </tr>
          </tbody>
          <tbody class="table-head">
            <tr>
              <td colspan="4" style="text-align: center">
                Онлайн-консультация
              </td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>Терапевт дежурный</td>
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
            </tr>
            <tr>
              <td>Гинеколог, уролог, кардиолог, невролог, эндокринолог, гастроэнтеролог, аллерголог</td>
              <td />
              <td />
              <td>
                <div class="check" />
              </td>
            </tr>
            <tr>
              <td>
                Оториноларинголог, психолог, дерматолог, дерматологовенеролог, андролог, травматолог, онколог,
                маммолог
              </td>
              <td />
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
            </tr>
            <tr>
              <td>
                Педиатр, репродуктолог, нутрициолог
              </td>
              <td />
              <td />
              <td>
                <div class="check" />
              </td>
            </tr>
          </tbody>
          <tbody class="table-head">
            <tr>
              <td colspan="4" style="text-align: center">
                Прочее
              </td>
            </tr>
          </tbody>
          <tbody class="table-body">
            <tr>
              <td>
                Транспортные расходы и расходы на проживание
              </td>
              <td />
              <td>
                <div class="check" />
              </td>
              <td>
                <div class="check" />
              </td>
            </tr>
            <tr>
              <td>
                Страховая защита
              </td>
              <td style="text-align: center">
                40 000 ₽
              </td>
              <td style="text-align: center">
                50 000 ₽
              </td>
              <td style="text-align: center">
                до 120 000 ₽
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Как работает программа"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          <div class="list-dotted">
            <ul>
              <li>Оформите интересующую программу «Выбери здоровье»</li>
              <li>
                В случае возникновения медицинских показаний в течение срока
                действия полиса обратитесь в сервисную компанию по телефонам:
                <span>8 (800) 600 45 99 (звонок по России бесплатный) 8 (495) 797 79
                  33</span>
              </li>
              <li>Предоставьте необходимые документы в сервисную компанию</li>
              <li>
                Получите через сервисную компанию заключение независимых экспертов
                для подтверждения диагноза, а также предложение по оптимальному
                плану лечения и подбору подходящей клиники
              </li>
              <li>
                Получите медицинские услуги, предусмотренные договором страхования
                (например, лечение и реабилитацию в клинике по программе «Выбери
                здоровье ПЛЮС»).
              </li>
            </ul>
          </div>
          <br>

          <!-- 👉 Информационный блок с коричневым фоном -->
          <div class="information center">
            Для заключения договора страхования не требуются справки и/или
            предварительный медицинский осмотр; С перечнем документов можно
            ознакомиться в Правилах страхования. Партнер программы – ООО «СМС»,
            ОГРН 1095003000256. Страховую услугу предоставляет ООО
            «РСХБ-Страхование жизни» (г. Москва, Гагаринский пер., д. 3)
          </div>
        </faq-item>

        <faq-item
          title="Что делать при наступлении страхового случая?"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          <div class="list-dotted">
            <ul>
              <li>
                В кратчайший срок обратитесь к врачу и неукоснительно соблюдайте
                его рекомендации с целью уменьшения последствий страхового случая.
              </li>
              <li>
                Не позднее 31 дня с момента, когда вам стало известно о
                наступлении события, имеющего признаки страхового случая,
                <nuxt-link to="">
                  подайте заявление
                </nuxt-link>
                на осуществление
                страховой выплаты
              </li>
              <li>
                Для установления факта наступления страхового случая и принятия
                решения об осуществлении страховой выплаты, предоставьте
                документы, указанные в пункте 11
                <nuxt-link to="">
                  Полиса
                </nuxt-link>
              </li>
              <li>
                Подать заявление на осуществление страховой выплаты и документы вы
                можете следующими способами:
                <ul>
                  <li>
                    <nuxt-link to="">
                      Через личный кабинет на сайте
                    </nuxt-link>
                  </li>
                  <li>
                    <a href="#">Нарочно в ближайший офис страховой компании или по почте</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </faq-item>
      </div>

      <br>

      <!-- 👉 Информационный блок с серым фоном -->
      <how-to-get-insurance-block>«Здоровье под защитой»</how-to-get-insurance-block>

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
