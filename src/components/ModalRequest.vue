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
    width="300"
    height="400"
    >

    <div class="content_wrap">
      <h2 class="greeting">안녕하세요 !</h2>
      <div class="row">
        <label for="사진첩">사진첩</label>
        <input type="text" id="사진첩" placeholder="보고싶은 사진첩을 입력해주세요.">
      </div>

      <div class="row">
        <label for="한마디">개발자에게 한마디</label>
        <textarea name="한마디" id="한마디" placeholder="김루이가 사진 보여준대서 왔음." />
      </div>

      <img src="@/assets/images/social/google.svg" alt="google" class="google" draggable="false" @click="socialLogin('google')">
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
      // rem 으로 작성
      width: '300',
      height: '43'
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
  font-size: 24px;
}

.google {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  margin: 0 auto;
  display: inline-block;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }
}

.row {
  margin-top: 15px;
}

label {
  font-size: 13px;
}

input, select {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  display: inline-block;
  padding: 10px 14px;
  width: 100%;
  margin-top: 6px;
  height: 36px;
  line-height: 1;
  font-size: 16px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  vertical-align: middle;
  outline: none;

  &:disabled {
    background-color: $disabled;
    color: $gray;
    cursor: not-allowed;
  }

  &:focus,
  &:active { border: 1px solid $primary; }
  &::placeholder { color: lightgray; }
}

textarea {
  padding: 10px 14px;
  margin-top: 6px;

  width: 100%;
  height: 140px;
  font-size: 16px;
  border: 1px solid $border;
  border-radius: 4px;
  outline: 0;
  vertical-align: middle;
  resize: none;

  &:focus,
  &:active { border: 1px solid $primary; }
  &::placeholder { color: lightgray; }
}

</style>
