import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins'
import router from './router'
import store from './store'

import GlobalComponents from './components'
import MIXSINS from './assets/js/mixins'
import COMMON from '@/../colony-vue/src/js/common'

Vue.use(GlobalComponents)
Vue.use(MIXSINS)

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()

Vue.prototype.COMMON = COMMON

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
