import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins'
import router from './router'
import store from './store'

import GlobalComponents from './components'

Vue.use(GlobalComponents)

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
