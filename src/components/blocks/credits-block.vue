<template>
  <div>
    <!-- 🎩 -->
    <div v-if="$route.path === '/'" class="head">
      <div class="head-content">
        <div class="head-title">
          Потребительские кредиты
        </div>
      </div>
      <div class="head-aside">
        <div class="tabs">
          <tab-default
            v-for="(button, index) in buttons"
            :key="index"
            :title="button.title"
            :is-active="activeButtonId === index"
            :count="button.count"
            @click="setActiveButton(index)"
          />
        </div>
      </div>
    </div>
    <div class="offers">
      <template v-for="(info, index) in infoData">
        <info-card
          v-if="index < 3 && $route.path === '/'"
          :key="index"
          :title="info.title"
          :description="info.description"
          :link="info.link"
          :img="info.img"
          :items="info.items"
          :buttons-text="['Оформить кредит', 'Рассчитать кредит']"
        />
        <info-card
          v-else-if="$route.path !== '/'"
          :key="index"
          :title="info.title"
          :description="info.description"
          :link="info.link"
          :img="info.img"
          :items="info.items"
          :buttons-text="['Оформить кредит', 'Рассчитать кредит']"
        />
      </template>
    </div>
    <div v-if="$route.path === '/'" class="offset-footer center">
      <button class="btn btn--full">
        Показать ещё
      </button>
    </div>
  </div>
</template>
<script>
import TabDefault from '~/components/ui/tab/tab-default.vue'
import InfoCard from '~/components/cards/info-card.vue'
import infoCreditsData from '~/mocks/info-credits-data'

export default {
  components: {
    TabDefault,
    InfoCard
  },
  data () {
    return {
      infoData: infoCreditsData,
      buttons: [
        { title: 'Все', count: 4 },
        { title: 'Потребительские цели', count: 2 },
        { title: 'На иные цели', count: 2 }
      ],
      activeButtonId: 0 // дефолтное значение для первой кнопки
    }
  },
  computed: {
    filteredCards () {
      if (this.activeButtonId !== 'all') {
        return this.cardData.filter(
          card => card.type === this.activeButtonId
        )
      }
      return this.cardData
    },
    filteredCardsCount () {
      return this.filteredCards.length
    }
  },
  methods: {
    setActiveButton (id) {
      this.activeButtonId = id
    }
  }
}
</script>
