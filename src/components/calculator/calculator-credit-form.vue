<template>
  <div class="calculator-box calculator-box--aside">
    <div class="calculator-result center">
      <ul class="calculator-result__value">
        <li>
          <span>?? %</span>
          Процентов в месяц
        </li>
        <li>
          <span>{{ sumCreditValue | roundCurrency | invToCurrency }}</span>
          Сумма кредита
        </li>
      </ul>

      <div class="calculator-result__total">
        <span>?? ₽</span>
        Ежемесячный платёж
      </div>

      <div class="calculator-result__cost">
        Полная стоимость кредита ??%
      </div>

      <div class="calculator-result__info">
        Приведенные расчеты являются приблизительными. <br>
        Для точного определения суммы переплаты по кредиту обратитесь в офис
        банка «ЕВРОАЛЬЯНС».
      </div>

      <nuxt-link
        to=""
        class="btn btn--full"
      >
        Подать заявку
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  props: {
    sumCreditValue: {
      type: Number as PropType<number>,
      required: true
    },
    timeCreditValue: {
      type: Number as PropType<number>,
      required: true
    }
  }
}
</script>
