<template>
  <div id="header">
    <BurgerButton
      :active="isSliderActive"
      @click.stop="toggleSlider"
      @click.native="toggleSlider"
      :barHeight="6"
      :barWidth="30"
    />
    <h1 class="heading">LOUIS MAPS.</h1>
    <!-- <span class="schema" v-if="_scheme"> for {{ _scheme }}</span> -->
    <div class="user_wrap">
      <img :src="mixinUser.photoURL" alt="avatar" class="avatar">
      <b class="userName" v-if="!mixinIsMobile">{{ mixinUser.displayName }}</b>
    </div>
    <Slider :isSliderActive="isSliderActive" />
  </div>
</template>

<script>
import Slider from './element/Slider'

export default {
  name: 'Header',
  mounted () {
  },
  components: {
    Slider,
  },
  computed: {
    _scheme () {
      return process.env.VUE_APP_DATAS || false
    }
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

  line-height: 42px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }

  .userName {
    color: $success;
    vertical-align: middle;
    font-size: 16px;
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
