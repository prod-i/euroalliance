<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Страхование', href: '/personal/strahovanie' },
          { title: 'Защита квартиры' },
        ]"
      />
      <h1>Защита квартиры</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Заголовок рерайтеру
        </template>
        <template #text>
          Быстрая, простая и комплексная защита квартиры от непредвиденных
          ситуаций
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <!-- 👉 FAQ Items -->
      <h3>Риски</h3>
      <div class="faq-items">
        <faq-item
          title="По имуществу"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          <h4>Ниже перечислены риски</h4>
          <div class="list-dotted list-column-3">
            <ul>
              <li>Пожар</li>
              <li>Удар молнии</li>
              <li>Взрыв</li>
              <li>Аварии инженерных систем</li>
              <li>Проникновение воды из соседних (чужих) помещений</li>
              <li>Стихийные бедствия</li>
              <li>Противоправные действия третьих лиц</li>
              <li>Механическое повреждение от столкновения, удара</li>
            </ul>
          </div>
        </faq-item>
        <faq-item
          title="По ответственности"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          <div class="list-dotted">
            <ul>
              <li>
                Причинение ущерба имуществу соседей, а также их жизни и здоровью
                по вашей вине
              </li>
            </ul>
          </div>
        </faq-item>
      </div>

      <br>
      <br>

      <h3>Сумма и срок</h3>
      <div class="faq-items">
        <faq-item
          title="На какую сумму?"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          <div class="list-dotted">
            <ul>
              <li>
                Коробка квартиры (конструктив) – от 700 000 ₽ до 10 000 000 ₽
              </li>
              <li>Отделка и оборудование – от 100 000 ₽ до 5 000 000 ₽</li>
              <li>
                Мебель, техника, личные вещи, предметы интерьера – от 50 000 ₽
                до 3 000 000 ₽
              </li>
              <li>Ущерб соседям – от 50 000 ₽ до 3 000 000 ₽</li>
            </ul>
          </div>
        </faq-item>
        <faq-item
          title="На какой срок?"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          <div class="list-dotted">
            <ul>
              <li>1, 2, 3 и 12 месяцев</li>
            </ul>
          </div>
        </faq-item>
      </div>

      <br>
      <br>

      <h3>Страхователи и получатели</h3>
      <div class="faq-items">
        <faq-item
          title="Кто может застраховать и получить выплату?"
          :is-active="$faq.activeIndexes[4]"
          @click="$faq.toggleActive(4)"
        >
          <h4>Ниже перечислены риски</h4>
          Гражданин РФ от 18 лет, собственник или проживающий в квартире
          <br>
          <br>
          <h4>Кто может получить выплату?</h4>
          Страхователь, собственник, проживающие в квартире, или соседи в рамках компенсации нанесенного им ущерба <br>
          <nuxt-link to="">
            Ссылка на калькулятор полиса
          </nuxt-link>
        </faq-item>
      </div>
      <br>
      <br>

      <!-- 👉 Информационный блок с серым фоном -->
      <how-to-get-insurance-block>«Защита квартиры»</how-to-get-insurance-block>

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
    this.$faq.setArrayLength(5)
  }
}
</script>
