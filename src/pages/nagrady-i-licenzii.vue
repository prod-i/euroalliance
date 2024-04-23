<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Премии, награды и лицензии' }]" />
      <h1>Премии, награды и лицензии</h1>
      <!-- 👉 page-showcase-->
      <page-showcase>
        <template #title>
          Мы — одни из лучших!
        </template>
        <template #text>
          Банк «ЕВРОАЛЬЯНС» многочисленный лауреат премии «Лучший региональный
          банк года», «Лучший банк региона», а также знака «Общественное
          признание»
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>

      <div class="columns columns--cards">
        <div class="column col-3">
          <a href="#" class="certificates">
            <img src="/temp/icon.svg" alt="" loading="lazy">
          </a>
        </div>
        <div class="column col-3">
          <a href="#" class="certificates">
            <img src="/temp/icon.svg" alt="" loading="lazy">
          </a>
        </div>
        <div class="column col-3">
          <a href="#" class="certificates">
            <img src="/temp/icon.svg" alt="" loading="lazy">
          </a>
        </div>
        <div class="column col-3">
          <a href="#" class="certificates">
            <img src="/temp/icon.svg" alt="" loading="lazy">
          </a>
        </div>
        <div class="column col-3">
          <a href="#" class="certificates">
            <img src="/temp/icon.svg" alt="" loading="lazy">
          </a>
        </div>
        <div class="column col-3">
          <a href="#" class="certificates">
            <img src="/temp/icon.svg" alt="" loading="lazy">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
