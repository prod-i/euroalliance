<template>
  <div>
    <!-- 🎩 -->
    <div class="head">
      <div class="head-content">
        <div class="head-title">
          Банковские вклады
        </div>
      </div>
      <div class="head-aside">
        <ul class="tabs tabs--white">
          <li v-for="(button, index) in buttons" :key="index">
            <tab-default
              :title="button.title"
              :is-active="activeButtonId === index"
              :count="button.count"
              @click="setActiveButton(index)"
            />
          </li>
        </ul>
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
          :buttons-text="['Оформить вклад', 'Рассчитать вклад']"
          custom-class="offer--white"
        />
        <info-card
          v-else-if="$route.path !== '/'"
          :key="index"
          :title="info.title"
          :description="info.description"
          :link="info.link"
          :img="info.img"
          :items="info.items"
          :buttons-text="['Оформить вклад', 'Рассчитать вклад']"
          custom-class="offer--white"
        />
      </template>
    </div>
    <div v-if="$route.path === '/'" class="offset-footer center">
      <button class="btn btn--white btn--full">
        Показать ещё
      </button>
    </div>
  </div>
</template>
<script>
import TabDefault from '~/components/ui/tab/tab-default.vue'
import InfoCard from '~/components/cards/info-card.vue'
import infoDepositsData from '~/mocks/info-deposits-data'

export default {
  components: {
    TabDefault,
    InfoCard
  },
  data () {
    return {
      infoData: infoDepositsData,
      buttons: [
        { title: 'Все', count: 10 },
        { title: 'В рублях', count: 4 },
        { title: 'Пенсионные', count: 6 }
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
