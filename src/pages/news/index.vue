<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Новости банка' }]" />
      <h1>Новости банка</h1>

      <div class="columns columns--cards">
        <!-- -->
        <div v-for="n in 6" :key="n" class="column col-4 md-col-6 sm-col-12">
          <div class="news-item">
            <nuxt-link to="/" class="news-item__link" />
            <div class="news-item__image" style="background-image: url(/temp/icon.svg)" />
            <div class="news-item__content">
              <div class="news-item__date">
                22 января 2023 г.
              </div>
              <div class="news-item__title">
                На основании решения Банка России данная информация не раскрывается
              </div>
            </div>
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
