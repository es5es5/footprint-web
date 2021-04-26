
import Vue from 'vue'

import './fbase'
import './viewer'

import 'vue-burger-button/dist/vue-burger-button.css'
import BurgerButton from 'vue-burger-button'
import naver from 'vue-naver-maps'

// https://github.com/euvl/vue-js-modal
import VModal from 'vue-js-modal'

Vue.use(naver, {
  clientID: process.env.VUE_APP_NAVER_MAPS_CLIENT_ID,
  useGovAPI: false,
  subModules: ''
})

Vue.component('BurgerButton', BurgerButton)
Vue.use(VModal)
