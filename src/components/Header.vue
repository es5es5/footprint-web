<template>
  <div id="header">
    <BurgerButton
      :active="isActive"
      @click.stop="isActive = !isActive"
      @click.native="isActive = !isActive"
      :barHeight="6"
      :barWidth="50"
    />
    <button type="button" style="width: 200px" @click="isActive = !isActive">{{ isActive }}</button>
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
  float: left;
  height: 50px !important;
  margin: 0 10px;
}
</style>
