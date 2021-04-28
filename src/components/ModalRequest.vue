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
        <input type="text" id="사진첩" placeholder="보고싶은 사진첩을 입력해주세요." v-model="requestForm.schema">
      </div>

      <div class="row">
        <label for="한마디">개발자에게 한마디</label>
        <textarea name="한마디" id="한마디" placeholder="김루이가 사진 보여준대서 왔음." v-model="requestForm.comments" />
      </div>

      <img src="@/assets/images/social/google.svg" alt="google" class="google" draggable="false" :disabled="_checkValidate" @click="socialLogin('google')">
    </div>

  </modal>
</template>

<script>
import { dbService, authService, firebaseInstance } from '@/plugins/fbase'
import Cookies from 'js-cookie'

export default {
  name: 'ModalRequest',
  created () {
  },
  computed: {
    _checkValidate () {
      return this.requestForm.schema === ''
    }
  },
  data () {
    return {
      // rem 으로 작성
      width: '300',
      height: '43',
      requestForm: {
        schema: Cookies.get('maps-schema') || '',
        comments: '',
      }
    }
  },
  methods: {
    openEvent () {},
    closeEvent () { this.$emit('callback') },
    async socialLogin (social) {
      if (this._checkValidate) {
        alert('사진첩을 입력해주세요.')
        document.getElementById('사진첩').focus()
        return
      }

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
      await this.addUsers({
        displayName: user.user.displayName,
        userUID: user.user.uid,
      })
      await this.$store.commit('setUser', {
        uid: user.user.uid,
        displayName: user.user.displayName,
        photoURL: user.user.photoURL,
        email: user.user.email,
        isAnonymous: user.user.isAnonymous,
        schema: this.requestForm.schema,
        schemaList: [this.requestForm.schema],
      })
      this.$router.go('/')
    },
    async addUsers (user) {
      const isExistUser = await this.checkUsersExist(user)
      if (!isExistUser) {
        await dbService.collection('users').add({
          displayName: user.displayName,
          userUID: user.userUID,
          schema: this.requestForm.schema,
          schemaList: [this.requestForm.schema],
          comments: this.requestForm.comments
        })
      } else {
        const form = {
          ...isExistUser[0]
        }

        if (form.schemaList.indexOf(this.requestForm.schema) < 0) {
          form.schemaList.push(this.requestForm.schema)
        }

        form.comments.push(this.requestForm.comments)

        await dbService.doc(`users/${isExistUser[0].id}`).update(
          form,
        )
      }
    },
    async checkUsersExist (user) {
      let checkResult = null
      await dbService
        .collection('users')
        .where('userUID', '==', user.userUID)
        .get()
        .then(result => {
          if (result.empty) {
            checkResult = false
          } else if (result.size > 0) {
            const list = []
            result.forEach(doc => list.push(doc.data()))
            checkResult = list
          }
        })
      return checkResult
    },
    checkValidate () {
      if (this.requestForm.schema === '') {
        alert('사진첩을 입력해주세요.')
        return false
      } else {
        return true
      }
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

  &:disabled {
    background-color: $disabled;
    color: $gray;
    cursor: not-allowed;
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
