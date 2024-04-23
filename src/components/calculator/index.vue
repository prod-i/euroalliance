<template>
  <section class="calculator">
    <div class="calculator-box">
      <div class="calculator-header">
        <div class="calculator-title">
          {{ type === "credit" ? "Рассчитать:" : "Хочу вложить" }}
        </div>
        <template v-for="(button, index) in tabs">
          <tab-default
            v-if="tabs"
            :key="index"
            :title="button"
            :is-active="activeButtonIndex === index"
            @click="setActiveButton(index)"
          />
        </template>
      </div>

      <div class="calculator-items">
        <div class="calculator-item">
          <div class="calculator-item__title">
            {{ type === "credit" ? "Сумма кредита" : "Сумма" }}
            <span>{{ sumValue | invToCurrency }}</span>
          </div>
          <div class="calculator-range">
            <div class="calculator-range__input">
              <input
                v-model.number="sumValue"
                type="range"
                step="10"
                :min="sum.min"
                :max="sum.max"
              >
            </div>
            <div class="calculator-range__line">
              <span :style="{ width: percentagesum + '%' }" />
            </div>
            <div
              class="calculator-range__spin"
              :style="{ left: percentagesum + '%' }"
            />
          </div>
          <ul class="calculator-item__position">
            <li>от {{ sum.min | invToCurrency }}</li>
            <li>до {{ sum.max | invToCurrency }}</li>
          </ul>
        </div>
      </div>
      <div class="calculator-item">
        <div class="calculator-item__title">
          На какой срок
          <span>{{ timeValue }}</span>
        </div>
        <div class="calculator-range">
          <div class="calculator-range__input">
            <input
              v-model.number="timeValue"
              type="range"
              step="1"
              :min="time.min"
              :max="time.max"
            >
          </div>
          <div class="calculator-range__line">
            <span :style="{ width: percentageTime + '%' }" />
          </div>
          <div
            class="calculator-range__spin"
            :style="{ left: percentageTime + '%' }"
          />
        </div>
        <ul class="calculator-item__position">
          <li>от {{ time.min }} месяцев</li>
          <li>до {{ time.max }} месяцев</li>
        </ul>
      </div>
    </div>
    <calculator-credit-form
      v-if="type === 'credit' && sumValue !== null && timeValue !== null"
      :sum-credit-value="sumValue"
      :time-credit-value="timeValue"
    />
    <calculator-deposit-form
      v-if="type === 'deposit' && sumValue !== null && timeValue !== null"
      :sum-deposit-value="sumValue"
      :time-deposit-value="timeValue"
    />
  </section>
</template>

<script lang="ts">
import { PropType } from 'vue'
import CalculatorCreditForm from './calculator-credit-form.vue'
import CalculatorDepositForm from './calculator-deposit-form.vue'
import TabDefault from '~/components/ui/tab/tab-default.vue'

interface BlockData {
  title: string;
  min: number;
  max: number;
}

export default {
  components: {
    TabDefault,
    CalculatorCreditForm,
    CalculatorDepositForm
  },
  props: {
    type: {
      type: String as PropType<String>,
      required: true
    },
    tabs: {
      type: Array as PropType<string[]>
    },
    sum: {
      type: Object as PropType<BlockData>,
      required: true
    },
    time: {
      type: Object as PropType<BlockData>,
      required: true
    }
  },
  data () {
    return {
      /** дефолтное значение active для первой кнопки */
      activeButtonIndex: 0,

      sumValue: null,
      timeValue: null
    }
  },
  /** высчитываем процент заполнения range для style */
  computed: {
    handlePercentageSum () {
      const range = this.sum.max - this.sum.min
      const currentValue = this.sumValue - this.sum.min
      return (currentValue / range) * 100
    },
    handlePercentageTime () {
      const range = this.time.max - this.time.min
      const currentValue = this.timeValue - this.time.min
      return (currentValue / range) * 100
    }
  },
  watch: {
    /** При изменении value инпута, заполняем range в style */
    sumValue: {
      handler () {
        this.percentagesum = this.handlePercentageSum
      },
      immediate: true
    },
    timeValue: {
      handler () {
        this.percentageTime = this.handlePercentageTime
      },
      immediate: true
    }
  },
  mounted () {
    /** Присваиваем значение sumValue из пропса, если оно существует */
    if (this.sum && this.sum.min !== undefined) {
      this.sumValue = this.sum.min
    }

    /** Присваиваем значение timeValue из пропса, если оно существует */
    if (this.time && this.time.min !== undefined) {
      this.timeValue = this.time.min
    }
  },
  methods: {
    setActiveButton (index) {
      this.activeButtonIndex = index
    }
  }
}
</script>
