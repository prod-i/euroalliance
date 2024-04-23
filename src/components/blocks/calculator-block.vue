<template>
  <div>
    <!-- 🎩 -->
    <div class="head">
      <div class="head-content">
        <div class="head-title">
          Калькулятор
        </div>
      </div>
      <div v-if="calculatorData.buttons" class="head-aside">
        <div class="tabs tabs--white">
          <tab-default
            v-for="(button, index) in calculatorData.buttons"
            :key="button.id"
            :title="button.title"
            :is-active="activeButtonId === index"
            @click="setActiveButton(index, button.id)"
          />
        </div>
      </div>
    </div>
    <calculator
      :type="type"
      :tabs="calculatorData.tabs[typeTabs]"
      :sum="calculatorData.sumCredit"
      :time="calculatorData.timeCredit"
    />
  </div>
</template>
<script>
import TabDefault from '~/components/ui/tab/tab-default.vue'
import Calculator from '~/components/calculator/index.vue'

export default {
  components: {
    TabDefault,
    Calculator
  },
  props: {
    type: {
      type: String,
      default: 'credit'
    },
    calculatorData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeButtonId: 0, // дефолтное значение для первой кнопки
      typeTabs: null
    }
  },
  mounted () {
    if (this.calculatorData) {
      this.typeTabs = Object.keys(this.calculatorData.tabs)[0]
    }
  },
  methods: {
    setActiveButton (index, id) {
      this.activeButtonId = index
      this.typeTabs = id
    }
  }
}
</script>
