<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'Новости', href: '/news/' },
          { title: 'Потребкредиты: что изменится для заемщиков с 21 января 2024 года' },
        ]"
      />
      <h1>Потребкредиты: что изменится для заемщиков с 21 января 2024 года</h1>

      <div class="news-item__date">
        22 января 2023 г.
      </div>

      <div class="news-detail">
        <div class="news-detail__image md-hidden">
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </div>
        <p>
          <b>С 21 января вступают в силу поправки, внесенные законом № 359-ФЗ от 24 июля 2023 года</b>
        </p>
        <p>
          Новые правила обязывают кредитора указывать не только платежи по кредиту (сумме долга и процентов), но и
          платежи за допуслуги и работы, которые выступают условием выдачи кредита или влияют на такие условия. Таким
          образом, заемщики смогут лучше понимать, сколько и за что они платят банку
        </p>
        <p>
          Если работы не влияют на выдачу кредита, то кредитор должен письменно уведомить заемщика о праве отказаться от
          допуслуг и влиянии отказа на условия кредита
        </p>
        <br>
        <br>
        <p>
          <b>Полная стоимость кредита (ПСК)</b>
        </p>
        <p>
          Это все затраты на обслуживание кредита. Она включает в себя проценты за пользование кредитом, а также
          различные комиссии и другие расходы
        </p>
        <p>
          Придя в банк под влиянием рекламы, обещающей ставку по кредиту в 5% годовых, и увидев ПСК на уровне 20-30%,
          Вам стоит задуматься о том, сколько же ему будет стоить этот кредит в конечном итоге.
        </p>
      </div>
    </div>
  </section>
</template>
