<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Datas from '@/assets/js/datas'

export default {
  name: 'App',
  created () {
    this.initDatas()
  },
  methods: {
    initDatas () {
      this.$store.commit('setMarkers', Datas[process.env.VUE_APP_DATAS].markers)
    }
  }
}
</script>

<style lang="scss">
@import '@/../colony-vue/src/assets/scss/reset.scss';
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/variable.scss';
</style>
