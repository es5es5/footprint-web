<template>
  <div id="header">
    <BurgerButton
      :active="isActive"
      @click="isActive = !isActive"
      :barHeight="6"
      :barWidth="50"
    />
    <Slider v-if="false" />
    <MySlider v-if="isActive" />
  </div>
</template>

<script>
import Slider from './Slider'
import MySlider from './MySlider'

export default {
  name: 'Header',
  components: {
    Slider,
    MySlider,
  },
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 50px;
  background-color: #42B983;
}
</style>

<style lang="scss">
.burguer-button {
  float: right;
  height: 50px !important;
  margin-right: 10px;
}
</style>
