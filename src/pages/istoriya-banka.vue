<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'История Банка' }]" />
      <h1>История Банка</h1>

      <div class="history-items">
        <div v-for="n in 5" :key="n" class="history-item">
          <div class="history-item__content">
            <div class="history-item__title">
              2023 год стал годом перемен
            </div>
            <div class="history-item__text">
              <p>
                Планы по развитию начали осуществляться с возвращения просроченной задолженности крупными заемщиками
                банка. Увеличился вкладной портфель, стал наращиваться кредитный портфель. Был зарегистрирован новый
                логотип Банка, он стал современным и совершенно новым. Вместе с этим начал обновляться корпоративный
                сайт банка
              </p>
              <p>
                Здание Станко, 11. Банк был включен в систему страхования вкладов 27 января. Номер Банка в реестре
                банков-участников системы обязательного страхования вкладов — 500. В рамках политики, проводимой
                акционерами Банка, приобретаются новые собственные здания. Одно в центре города Кинешма еще для одного
                дополнительного офиса «Первый Кинешемский», открытого зимой 2005 года. А второе — для филиала Банка в
                Шуе по адресу ул. Советская, 1. Банк «ЕВРОАЛЬЯНС» получил диплом Лауреата премии «Банковское дело» в
                номинации «Лучший региональный банк года — 2005».
              </p>
            </div>
          </div>
          <div v-if="n !== 3" class="history-item__image">
            <img src="/temp/icon-slim.svg" alt="" loading="lazy">
          </div>
        </div>
      </div>

      <!--Навигация-->
      <div class="pagination">
        <a href="" class="pagination-item pagination-item--prev">
          <svg width="16" height="16">
            <use xlink:href="#icon-down" />
          </svg>
        </a>
        <a href="" class="pagination-item">1</a>
        <a href="" class="pagination-item">2</a>
        <a href="" class="pagination-item">3</a>
        <a href="" class="pagination-item">4</a>
        <span class="pagination-item">
          ...
        </span>
        <a href="" class="pagination-item">99</a>
        <a href="" class="pagination-item">100</a>
        <a href="" class="pagination-item">101</a>
        <a href="" class="pagination-item pagination-item--next">
          <svg width="16" height="16">
            <use xlink:href="#icon-down" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
