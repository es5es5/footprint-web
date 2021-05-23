<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Datas from '@/assets/js/datas'
import Cookies from 'js-cookie'
import {
  authService,
  dbService
} from '@/plugins/fbase'

export default {
  name: 'App',
  created () {
    if (this._portfolio && this._user) {
      if (process.env.VUE_APP_PORTFOLIO_USER.indexOf(this._user) === -1) {
        this.setUser()
        return
      }

      let photoURL = 'https://camo.githubusercontent.com/c8f91d18976e27123643a926a2588b8d931a0292fd0b6532c3155379e8591629/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67'
      switch (this._user) {
        case '패스트파이브':
          photoURL = 'https://cf.channel.io/thumb/200x200/pub-file/44692/6098c32812bfd947f9f6/191209_fastfive_symbol_bk_500.png'
          break
        case '여기어때':
          photoURL = 'https://image.goodchoice.kr/images/web_v3/favicon_170822.ico'
          break
        default:
          break
      }

      this.$store.commit('setUser', {
        uid: this._user ? this._user : 'Portfolio',
        displayName: this._user ? this._user : 'Portfolio',
        photoURL,
        email: this._user ? this._user : 'Portfolio',
        isAnonymous: this._user ? this._user : 'Portfolio',
      })

      this.$store.commit('setUserSchema', {
        schema: process.env.VUE_APP_PORTFOLIO_SCHEMA,
        schemaList: process.env.VUE_APP_PORTFOLIO_SCHEMA,
      })

      this.$store.commit('setMarkers', Datas[process.env.VUE_APP_PORTFOLIO_SCHEMA].markers)
    } else {
      this.setUser()
    }
  },
  computed: {
    _user () { return this.$route.query.user },
    _portfolio () { return this.$route.query.portfolio },
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
                Cookies.set('maps-schema', this.mixinUser.schema)
                this.appInit = true
              } else {
                Cookies.remove('maps-schema')
                this.appInit = false
              }
            } else {
              Cookies.remove('maps-schema')
              this.appInit = false
            }
          }
        )
    },
    async getUserData (id) {
      await dbService.collection('users').doc(id).get().then(doc => {
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
@import '@/assets/scss/modal.scss';
@import '@/assets/scss/variable.scss';
</style>
