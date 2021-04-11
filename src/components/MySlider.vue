<template>
  <div id="slider">
    <div class="slider_wrap" :class="isSliderActive ? 'active' : ''">
      <Card
        :isSliderActive="isSliderActive"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from './element/Card'

export default {
  name: 'MySlider',
  components: {
    Card,
  },
  computed: {
  },
  watch: {
  },
  props: {
    isSliderActive: {
      type: Boolean,
      require: true,
      default: () => false,
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.slider_wrap {
  position: fixed;
  top: 50px;
  left: 0;
  width: 0;
  height: calc(100vh - 50px);
  z-index: 9000;
  overflow-y: scroll;
  background-color: rgba(#000, .2);
  font-size: 14px;
  @media (min-width: 500px) { font-size: 16px; }
  @media (min-width: 750px) { font-size: 18px; }
  @media (min-width: 1024px) { font-size: 20px; }

  -webkit-transition: width .5s ease-in-out;
  -webkit-transition: -webkit-width .5s ease-in-out;
  transition: width .5s ease-in-out;

  &.active {
    width: 180px;
    @media (min-width: 500px) { width: 200px; }
    @media (min-width: 750px) { width: 300px; }
    @media (min-width: 1024px) { width: 400px; }
  }
}
</style>
