<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Сервисы банка', href: '/personal/servisy' },
          {
            title: 'Ответы на актуальные вопросы',
            href: '/personal/servisy/otvety-na-aktualnye-voprosy',
          },
          {
            title: 'Вопросы и ответы',
          },
        ]"
      />
      <h1>Вопросы и ответы</h1>
      <!-- 👉 Информационный блок с коричневым фоном -->
      <div class="information information--icon information--i">
        Все ответы основаны на информации, представленной на
        <a href="#">странице</a>
        официального сайта Банка России: «Меры по поддержке граждан и экономики
        в условиях пандемии коронавируса».
      </div>

      <br>
      <br>

      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Для граждан, кредитные каникулы"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Для малого и среднего бизнеса"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Кредит на возобновление деятельности"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          <div class="faq-items">
            <faq-item
              title="На какие периоды разбит кредитный договор на возобновление деятельности"
              :is-active="$faq.activeIndexes[4]"
              @click="$faq.toggleActive(4)"
            >
              Поскольку штат сотрудников был сокращен более чем на 20%, то
              условия базового периода считаются невыполненными.
            </faq-item>
            <faq-item
              title="В каком случае кредитный договор на возобновление деятельности должен быть переведен на период погашения?"
              :is-active="$faq.activeIndexes[5]"
              @click="$faq.toggleActive(5)"
            >
              Поскольку штат сотрудников был сокращен более чем на 20%, то
              условия базового периода считаются невыполненными.
            </faq-item>
            <faq-item
              title="Что нужно сделать для того, чтобы рассчитывать на списание долга по у кредиту на возобновление деятельности?"
              :is-active="$faq.activeIndexes[6]"
              @click="$faq.toggleActive(6)"
            >
              Поскольку штат сотрудников был сокращен более чем на 20%, то
              условия базового периода считаются невыполненными.
            </faq-item>
            <faq-item
              title="В августе 2020 года штат сотрудников сократился на 30%. Что произойдет с кредитом?"
              :is-active="$faq.activeIndexes[7]"
              @click="$faq.toggleActive(7)"
            >
              Поскольку штат сотрудников был сокращен более чем на 20%, то
              условия базового периода считаются невыполненными. В таком случае
              не осуществляется переход на период наблюдения, а наступает период
              погашения. Предприниматель должен будет погасить основной долг и
              проценты по кредиту равными платежами 28 декабря 2020 года, 28
              января и 1 марта 2021 года
            </faq-item>
          </div>
        </faq-item>
        <faq-item
          title="Доступность страховых услуг"
          :is-active="$faq.activeIndexes[3]"
          @click="$faq.toggleActive(3)"
        >
          Какой-то текст
        </faq-item>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(8)
  }
}
</script>
