<template>
  <div>
    <div class="head">
      <div class="head-content">
        <div class="head-title">
          Карты
        </div>
      </div>
      <div class="head-aside">
        <ul class="tabs">
          <li v-for="(button, index) in buttons" :key="index">
            <tab-default
              :id="button.id"
              :title="button.title"
              :count="filteredCardsCount(button.id)"
              :is-active="activeButtonId === button.id"
              @click="setActiveButton(button.id)"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="cards">
      <bank-card
        v-for="(card, index) in filteredCards"
        :key="index"
        :type="card.type"
        :title="card.title"
        :description="card.description"
        :img="card.img"
        :link="card.link"
        :items="card.items"
      />
    </div>
  </div>
</template>
<script>
import TabDefault from '~/components/ui/tab/tab-default.vue'
import BankCard from '~/components/cards/bank-card.vue'
import bankCardData from '~/mocks/bank-card-data'

import combineArrays from '~/utils/combine-arrays'

export default {
  components: {
    TabDefault,
    BankCard
  },
  data () {
    return {
      cardData: bankCardData,
      buttons: [
        { title: 'Все', id: 'all' },
        { title: 'Кредитные', id: 'credit' },
        { title: 'Дебетовые', id: 'debet' },
        { title: 'Пенсионные', id: 'pension' },
        { title: 'Зарплатные', id: 'salary' }
      ],
      activeButtonId: 'all', // дефолтное значение для первой кнопки
      filteredCardsCombineArray: null
    }
  },
  // ЕСЛИ COUNT БУДЕТ ПРИХОДИТЬ С БЭКА
  // computed: {
  //   filteredCards() {
  //     if (this.activeButtonId !== "all") {
  //       const filter = this.cardData.filter(
  //         (card) => card.type === this.activeButtonId
  //       );
  //       return filter;
  //     }
  //     return this.cardData;
  //   },
  // },
  computed: {
    filteredCards () {
      if (this.filteredCardsCombineArray) {
        return this.filteredCardsCombineArray.find(
          el => el.id === this.activeButtonId
        ).items
      } else { return false }
    }
  },
  mounted () {
    this.filteredCardsCombineArray = combineArrays(this.cardData, this.buttons)
  },
  methods: {
    setActiveButton (id) {
      this.activeButtonId = id
    },
    filteredCardsCount (id) {
      if (this.filteredCardsCombineArray) {
        return this.filteredCardsCombineArray.find(el => el.id === id).items
          .length
      }
    }
  }
}
</script>
