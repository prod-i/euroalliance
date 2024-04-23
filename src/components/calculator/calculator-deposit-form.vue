<template>
  <div class="calculator-box calculator-box--aside">
    <div class="calculator-result center">
      <ul class="calculator-result__value">
        <li>
          <span>{{ sumDepositValue | invToCurrency }}</span>
          Сумма в конце срока
        </li>
      </ul>

      <div class="calculator-result__info">
        Приведенные расчеты являются приблизительными. <br>
        Для точного определения суммы переплаты по кредиту обратитесь в офис
        банка «ЕВРОАЛЬЯНС».
      </div>

      <nuxt-link to="" class="btn btn--full">
        Подать заявку
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  props: {
    sumDepositValue: {
      type: Number as PropType<number>,
      required: true
    },
    timeDepositValue: {
      type: Number as PropType<number>,
      required: true
    }
  }
}
</script>
