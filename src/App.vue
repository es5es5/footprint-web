<template>
  <div id="app">
    <router-view></router-view>
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
    this.initDatas()
  },
  methods: {
    initDatas () {
      this.$store.commit('setMarkers', Datas[process.env.VUE_APP_DATAS].markers)
    },
    setUser () {
      authService.onAuthStateChanged(user => {
        console.log('user', user)
        if (user) {
          this.$store.commit('setUser', user)
        } else {
          this.$router.push({ name: 'Login' })
          // this.$store.commit('setUser', null)
        }
      })
    },
  }
}
</script>

<style lang="scss">
@import '@/../colony-vue/src/assets/scss/reset.scss';
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/variable.scss';
</style>
