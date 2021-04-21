<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Datas from '@/assets/js/datas'
import {
  authService
} from '@/plugins/fbase'

export default {
  name: 'App',
  created () {
    this.setUser()
  },
  methods: {
    initDatas () {
      this.$store.commit('setMarkers', Datas[process.env.VUE_APP_DATAS].markers)
    },
    setUser () {
      authService.onAuthStateChanged(user => {
        console.log('user', user)
        user.schema = 'IT서비스본부'
        if (user) {
          this.$store.commit('setUser', user)
          this.$store.commit('setMarkers', Datas[user.schema].markers)
        } else {
          this.$router.push({ name: 'Login' })
        }
      })
    },
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active { transition: opacity .1s }
.fade-enter,
.fade-leave-to { opacity: 0 }

@import '@/../colony-vue/src/assets/scss/reset.scss';
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/variable.scss';
</style>
