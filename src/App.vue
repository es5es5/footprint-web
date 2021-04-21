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
    setUserSchema () {
      this.$store.commit('setUserSchema', {
        schema: process.env.VUE_APP_DATAS || '제주도',
        schemaList: [
          'IT서비스본부',
          '제주도',
        ],
      })
    },
    setUser () {
      authService.onAuthStateChanged(user => {
        if (user) {
          this.$store.commit('setUser', {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            isAnonymous: user.isAnonymous,
          })
          this.setUserSchema()
          this.$store.commit('setMarkers', Datas[this.mixinUser.schema].markers)
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
