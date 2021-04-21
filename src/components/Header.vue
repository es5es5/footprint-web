<template>
  <div id="header">
    <BurgerButton
      :active="isSliderActive"
      @click.stop="toggleSlider"
      @click.native="toggleSlider"
      :barHeight="6"
      :barWidth="30"
    />
    <h1 class="heading">
      LOUIS MAPS.
      <span class="schema" v-if="mixinUser.schema && mixinUser.schema !== '' && !mixinIsMobile"> for {{ mixinUser.schema }}</span>
    </h1>
    <transition name="fade" mode="out-in">
      <div class="user_wrap" v-if="mixinUser.photoURL && mixinUser.photoURL !== ''" @click="setSettingOpen(!isSettingOpen)">
        <img :src="mixinUser.photoURL" alt="avatar" class="avatar">
        <b class="userName" v-if="!mixinIsMobile">{{ mixinUser.displayName }}</b>
      </div>
    </transition>
    <transition name="fade" mode="in-out">
      <div class="settings_container" v-if="isSettingOpen" @mouseover="setSettingOpen(true)" @mouseleave="setSettingOpen(false)">
        <div class="settings_wrap">
          <p v-for="(item, index) in mixinUser.schemaList" :key="index" @click="setUserSchema(item)">{{ item }}</p>
          <p class="signOut" @click="signOut">로그아웃</p>
        </div>
      </div>
    </transition>
    <Slider :isSliderActive="isSliderActive" />
  </div>
</template>

<script>
import Slider from './element/Slider'
import { authService } from '@/plugins/fbase'

export default {
  name: 'Header',
  mounted () {
  },
  components: {
    Slider,
  },
  computed: {
  },
  data () {
    return {
      isSliderActive: true,
      isSettingOpen: false,
    }
  },
  methods: {
    toggleSlider () {
      this.isSliderActive = !this.isSliderActive
    },
    signOut () {
      authService.signOut()
      this.$store.commit('setUser', null)
      this.$router.push({ name: 'Login' })
    },
    setSettingOpen (value) { this.isSettingOpen = value },
    setUserSchema (schema) {
      this.$store.commit('setUserSchema', {
        schema,
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@700&display=swap');

#header {
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: rgba($primary, .5);
}

.heading {
  font-family: 'Montserrat Subrayada', sans-serif;
  font-size: 32px;
  text-align: center;
  line-height: 32px;
}

.schema {
  font-size: 24px;
  color: $success;
  font-weight: bold;
}

.user_wrap {
  position: absolute;
  top: 0;
  right: 10px;

  @media (min-width: 500px) { right: 16px; }
  @media (min-width: 750px) { right: 20px; }
  @media (min-width: 1024px) { right: 24px; }

  line-height: 46px;
  color: $success;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .avatar {
    @include shadow;

    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 14px;
    vertical-align: middle;
  }

  .userName {
    vertical-align: middle;
    font-size: 18px;
    font-weight: bold;
  }
}

.settings_container {
  z-index: 100;
  position: absolute;
  top: 45px;
  right: 0;
  padding: calc(5px + .5rem) 1rem 2rem 3rem;
}

.settings_wrap {
  padding: 6px;
  border: 1px solid border;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);

  p {
    padding: 6px;
    font-size: .75rem;

    &:hover {
      cursor: pointer;
      color: $success;
    }

    &.signOut {
      color: $error;
    }
  }
}

.fade-enter-active,
.fade-leave-active { transition: opacity .1s }
</style>

<style lang="scss">
.burguer-button {
  float: left;
  height: 30px !important;
}
</style>
