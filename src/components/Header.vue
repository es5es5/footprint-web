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
    <Slider :isSliderActive="isSliderActive" />
  </div>
</template>

<script>
import Slider from './element/Slider'

export default {
  name: 'Header',
  mounted () {
    if (!this.mixinIsMobile) this.isSliderActive = true
  },
  components: {
    Slider,
  },
  data () {
    return {
      isSliderActive: false
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
  background-color: $primary;
}

.heading {
  font-family: 'Montserrat Subrayada', sans-serif;
  font-size: 32px;
  text-align: center;
  line-height: 32px;
}
</style>

<style lang="scss">
.burguer-button {
  float: left;
  height: 30px !important;
}
</style>
