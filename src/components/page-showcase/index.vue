<template>
  <div class="page-showcase">
    <div class="page-showcase__content">
      <div v-if="$slots.title" class="page-showcase__title">
        <slot name="title" />
      </div>
      <div v-if="$slots.text" class="page-showcase__text">
        <slot name="text" />
      </div>
      <div v-if="$slots.link" class="page-showcase__footer">
        <slot name="link" />
      </div>
    </div>
    <div v-if="$slots.img" class="page-showcase__image md-hidden">
      <slot name="img" />
    </div>
  </div>
</template>
