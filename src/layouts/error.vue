<template>
  <section class="content back-grey">
    <div class="container">
      <div class="not-found">
        <div class="not-found__image">
          <img src="/img/404.svg" alt="Страница не найдена">
        </div>
        <div v-if="error.statusCode === 404" class="not-found__title">
          Такой страницы не существует
        </div>
        <div v-else class="not-found__title">
          Ошибка с кодом: {{ error.statusCode }}
        </div>
        <div class="not-found__text">
          Запрашиваемая вами страница не существует или у вас оказалась неверная ссылка
        </div>
        <a href="/" class="btn btn--fixed">Вернуться на главную</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>
