<template>
  <div id="header">
    <BurgerButton
      :active="isSliderActive"
      @click.stop="toggleSlider"
      @click.native="toggleSlider"
      :barHeight="6"
      :barWidth="30"
    />
    <MySlider :isSliderActive="isSliderActive" />
  </div>
</template>

<script>
import MySlider from './MySlider'

export default {
  name: 'Header',
  components: {
    MySlider,
  },
  data () {
    return {
      isSliderActive: false
    }
  },
  methods: {
    toggleSlider () {
      this.isSliderActive = !this.isSliderActive
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: $primary;
}
</style>

<style lang="scss">
.burguer-button {
  float: left;
  height: 30px !important;
  // margin: 0 10px;
}
</style>
