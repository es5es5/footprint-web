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

          this.findUserId(user.uid)
          // if (!this.appInit) {
          //   alert('승인이 필요합니다!')
          //   authService.signOut()
          //   this.$store.commit('setUser', null)
          //   this.$router.push({ name: 'Login' })
          // }
        } else {
          this.$router.push({ name: 'Login' })
        }
      })
    },
    async findUserId (UID) {
      dbService.collection('users')
        .where('userUID', '==', UID)
        .get()
        .then(
          result => {
            if (!result.empty) {
              if (result.docs[0].data().schema && result.docs[0].data().schema !== '') {
                this.$store.commit('setUserSchema', {
                  schema: result.docs[0].data().schema,
                  schemaList: result.docs[0].data().schemaList,
                })
                this.$store.commit('setMarkers', Datas[this.mixinUser.schema].markers)
                this.appInit = true
              } else {
                this.appInit = false
              }
            } else {
              this.appInit = false
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
