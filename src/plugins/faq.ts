import Vue from 'vue'

export default ({ }, inject) => {
  const state = Vue.observable({
    activeIndexes: [] as boolean[],
    setArrayLength (length:number) {
      state.activeIndexes = new Array(length).fill(false)
    },
    toggleActive (index:number) {
      Vue.set(state.activeIndexes, index, !state.activeIndexes[index])
    }
  })

  // Регистрируем переменную и метод в прототипе Vue
  inject('faq', state)
}
