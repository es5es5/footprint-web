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
      <span class="schema" v-if="mixinUser.schema && !mixinIsMobile"> for {{ _scheme }}</span>
    </h1>
    <transition name="fade" mode="out-in">
      <div class="user_wrap" v-if="mixinUser.photoURL && mixinUser.photoURL !== ''" @click="signOut">
        <img :src="mixinUser.photoURL" alt="avatar" class="avatar">
        <b class="userName" v-if="!mixinIsMobile">{{ mixinUser.displayName }}</b>
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
      isSliderActive: true
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
</style>

<style lang="scss">
.burguer-button {
  float: left;
  height: 30px !important;
}
</style>
