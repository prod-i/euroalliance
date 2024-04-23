<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Вакансии' }]" />
      <h1>Вакансии</h1>
      <div class="columns columns--cards">
        <div class="column col-3 md-col-6 sm-col-12">
          <document-card class="square" icon="i">
            <template #title>
              <a href="#">Инженер-программист</a>
            </template>
          </document-card>
        </div>
        <div class="column col-3 md-col-6 sm-col-12">
          <document-card class="square" icon="i">
            <template #title>
              <a href="#">Менеджер отдела продаж</a>
            </template>
          </document-card>
        </div>
        <div class="column col-3 md-col-6 sm-col-12">
          <document-card class="square" icon="i">
            <template #title>
              <a href="#">Управляющий дополнительным офисом (г. Фурманов)</a>
            </template>
          </document-card>
        </div>
      </div>
    </div>
  </section>
</template>
