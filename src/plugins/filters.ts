import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import currencyFilter from '@/utils/currency'
import roundingFilter from '@/utils/rounding'

const filtersPlugin: Plugin = ({}) => {
  Vue.filter('invToCurrency', currencyFilter)
  Vue.filter('roundCurrency', roundingFilter)
}

export default filtersPlugin
