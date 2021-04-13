<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Datas from '@/assets/js/datas'
import {
  // authService,
  dbService
} from '@/plugins/fbase'

export default {
  name: 'App',
  created () {
    this.initDatas()
    this.getCustomer()
  },
  methods: {
    async getCustomer () {
      dbService.collection('markers').onSnapshot(snapshot => {
        const a = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        console.log(a)
      })
    },
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
