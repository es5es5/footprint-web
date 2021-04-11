<template>
  <div id="header">
    <BurgerButton
      :active="isActive"
      @click.stop="toggleIsActive"
      @click.native="toggleIsActive"
      :barHeight="6"
      :barWidth="30"
    />
    <MySlider :isActive="isActive" />
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
      isActive: false
    }
  },
  methods: {
    toggleIsActive () {
      this.isActive = !this.isActive
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
