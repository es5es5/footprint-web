<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view v-if="appInit"></router-view>
    </transition>
  </div>
</template>

<script>
import Datas from '@/assets/js/datas'
import {
  authService,
  dbService
} from '@/plugins/fbase'

export default {
  name: 'App',
  created () {
    this.setUser()
  },
  data () {
    return {
      appInit: false
    }
  },
  methods: {
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
          this.appInit = this.findUserId(user.uid)
        } else {
          this.$router.push({ name: 'Login' })
        }
      })
    },
    async getSalesList () {
      dbService.collection('sales')
        .where('customerMobile', '==', this.customerForm.customerMobile)
        .orderBy('salesDate', 'desc')
        .get()
        .then(result => {
          result.forEach(doc => this.salesList.push({
            id: doc.id,
            ...doc.data()
          }))
          this.loadData = false
        })
    },
    async findUserId (UID) {
      dbService.collection('users')
        .where('userUID', '==', UID)
        .get()
        .then(
          result => {
            if (!result.empty) {
              this.$store.commit('setUserSchema', {
                schema: result.docs[0].data().schema,
                schemaList: result.docs[0].data().schemaList,
              })
              this.$store.commit('setMarkers', Datas[this.mixinUser.schema].markers)
            } else {
              return false
            }
          }
        )
    },
    async getUserData (id) {
      await dbService.collection('users').doc(id).get().then(doc => {
        console.log('doc', doc.data())
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
