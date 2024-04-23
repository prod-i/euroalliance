<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[{ title: 'Вклады', href: '/personal/vklady' }]"
      />
      <h1>Вклады</h1>
      <!-- 👉 page-showcase-->
      <page-showcase>
        <template #title>
          Вклады с доходом до 14%
        </template>
        <template #text>
          <div class="list-shield">
            Откройте вклад с пополнением и частичным снятием
          </div>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
    </div>
    <!-- 👉 DepositsBlock-->
    <div class="back-grey offset offset--small">
      <div class="container">
        <!-- 👉 filter-block -->
        <div class="filter-block">
          <div class="filter-block__column">
            <div class="input-group">
              <div class="input-text">
                Хочу вложить
              </div>
              <select class="input select">
                <option value="">
                  10 000 ₽
                </option>
              </select>
            </div>
          </div>
          <div class="filter-block__column">
            <div class="input-group">
              <div class="input-text">
                На срок
              </div>
              <select class="input select">
                <option value="">
                  3 месяца
                </option>
              </select>
            </div>
          </div>
          <div class="filter-block__column">
            <button class="btn btn--full">
              Подобрать
            </button>
          </div>
        </div>

        <deposits-block />
      </div>
    </div>

    <br>
    <br>

    <div class="container">
      <!-- 👉 Информационный блок с серым фоном -->
      <div class="information-showcase">
        <div class="information-showcase__image">
          <img src="/img/icon-vklady.svg" alt="" loading="lazy" width="75" height="75">
        </div>
        <div class="information-showcase__content">
          <h3>Страхование вкладов</h3>
          Система обязательного страхования вкладов (ССВ) – специальная
          государственная программа, реализуемая в соответствии с Федеральным
          законом от 23 декабря 2003 г. № 177-ФЗ «О страховании вкладов в банках
          Российской Федерации» (далее – Федеральный закон №177-ФЗ).
        </div>
        <div class="information-showcase__aside">
          <a href="#" class="btn btn--fixed btn--mobile">Подробнее</a>
        </div>
      </div>
      <br>
      <br>
      <!-- 👉 блок с текстом-->
      <h3>Только возобновление договора</h3>
      Прием не осуществляется. Ознакомиться с перечнем и условиями
      возобновляемых вкладов в рублях можно здесь. Ознакомиться с перечнем и
      условиями возобновляемых вкладов в валюте можно <a href="#">здесь</a>.
      <br>
      <br>
      <h3>Прекращение пролонгации договора</h3>
      C 28 марта 2023 прекращается пролонгация вкладов «Мобильный капитал» и
      «Сберегательный пенсионный».Если Вкладчик не востребовал денежные
      средства в дату окончания срока вклада, сумма вклада перечисляется на
      счет вклада «До востребования», и действие настоящего Договора
      прекращается
    </div>
  </section>
</template>
<script lang="ts">
import DepositsBlock from '~/components/blocks/deposits-block.vue'

export default {
  components: {
    DepositsBlock
  }
}
</script>
