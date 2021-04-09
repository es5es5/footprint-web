<template>
  <div id="slider">
    <div class="slider_wrap" :class="isActive ? 'active' : ''">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySlider',
  components: {
  },
  computed: {
  },
  watch: {
  },
  props: {
    isActive: {
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
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  z-index: 9999;
  overflow-y: scroll;
  background-color: rgba(#000, .5);
  transition: width .5s;

  &.active {
    @media (max-width: 500px) { width: 200px; }
    @media (max-width: 750px) { width: 300px; }
    @media (min-width: 750px) { width: 400px; }
  }
}
</style>
