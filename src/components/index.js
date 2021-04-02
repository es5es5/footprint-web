export default {
  install (Vue) {
    Vue.component('Slider', () => import('./Slider'))

    Vue.component('MultiSelect', () => import('@/../colony-vue/src/components/element/multiselect'))
    Vue.component('NoDataMessage', () => import('@/../colony-vue/src/components/element/NoDataMessage'))
  }
}
