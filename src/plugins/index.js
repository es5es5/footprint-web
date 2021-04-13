
import Vue from 'vue'

import './fbase'

import 'vue-burger-button/dist/vue-burger-button.css'
import BurgerButton from 'vue-burger-button'
import naver from 'vue-naver-maps'

Vue.use(naver, {
  clientID: process.env.VUE_APP_NAVER_MAPS_CLIENT_ID,
  useGovAPI: false,
  subModules: ''
})

Vue.component('BurgerButton', BurgerButton)
