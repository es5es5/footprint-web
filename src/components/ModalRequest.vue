<template>
  <modal
    name="ModalRequest"
    class="modal"
    adaptive
    reset
    draggable=".header_wrap"
    @opened="openEvent"
    @closed="closeEvent"
    :clickToClose="true"
    width="380"
    height="400"
    >

    <div class="content_wrap">
      <h2 class="greeting">Hello !</h2>
      <img src="@/assets/images/social/google.svg" alt="google" class="google" draggable="false" @click="socialLogin('google')">
      <!-- <form action="">
        <fieldset>
          <legend>요청</legend>
          <input type="text" placeholder="">
          <img src="@/assets/images/social/google.svg" alt="google" class="google" draggable="false" @click="socialLogin('google')">
        </fieldset>
      </form> -->
    </div>

  </modal>
</template>

<script>
import { authService, firebaseInstance } from '@/plugins/fbase'

export default {
  name: 'ModalRequest',
  created () {
  },
  computed: {
  },
  data () {
    return {
    }
  },
  methods: {
    openEvent () {},
    closeEvent () { this.$emit('callback') },
    async socialLogin (social) {
      let provider = null
      switch (social) {
        case 'google':
          provider = new firebaseInstance.auth.GoogleAuthProvider()
          break
        default:
          break
      }
      this.loading = true
      const user = await authService.signInWithPopup(provider)
      this.$store.commit('setUser', user.user)
      this.$router.push({ name: 'Main' })
    },
  }
}
</script>

<style lang="scss" scoped>
.greeting {
  text-align: center;
  // font-size: bold;
  font-size: 2rem;
}
.google {
  display: inline-block;
  width: 100%;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }
}
</style>
