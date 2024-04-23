<template>
  <div class="back-grey offset">
    <div class="container">
      <div class="head center">
        <div class="head-content">
          <div class="head-title">
            <slot name="title" />
          </div>
        </div>
      </div>
      <!-- 👉 Слайдер -->
      <client-only>
        <Splide
          ref="splide"
          class="services-splide"
          :class="{ center: countSplide}"
          :options="splideOptions"
          @splide:move="onSplideMove"
        >
          <SplideSlide v-for="(card, slideIndex) in cardData" :key="slideIndex">
            <service-card :card="card" />
          </SplideSlide>
        </Splide>
      </client-only>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue'
import ServiceCard from '~/components/cards/service-card.vue'

interface Card {
  icon: string;
  title: string;
  link: string;
}

export default {
  components: {
    ServiceCard
  },
  props: {
    cardData: {
      type: Array as PropType<Card[]>,
      required: true
    }
  },
  data () {
    return {
      splideOptions: {
        // Опции слайдера
        perPage: 5,
        gap: 20,
        pagination: false,
        breakpoints: {
          1099: {
            perPage: 4
          },
          1023: {
            perPage: 3,
            arrows: true
          },
          500: {
            perPage: 1,
            arrows: true,
            center: true,
            padding: 90
          }
        }
      },
      isActive: 0
    }
  },
  computed: {
    countSplide () {
      return this.cardData.length < 5
    }
  },
  methods: {
    onSplideMove (_, index: number) {
      this.isActive = index
    },
    changeSlide (index: number) {
      this.$refs.splide.go(index)
    }
  }
}
</script>
