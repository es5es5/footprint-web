export default {
  install (Vue) {
    Vue.component('Modal', () => import('./element/Modal'))

    Vue.component('MultiSelect', () => import('@/../colony-vue/src/components/element/multiselect'))
    Vue.component('NoDataMessage', () => import('@/../colony-vue/src/components/element/NoDataMessage'))
  }
}
