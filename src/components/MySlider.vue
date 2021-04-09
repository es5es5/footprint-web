<template>
  <div id="slider">
    {{ isActive }}
    <div class="slider_wrap" :class="isActive ? '' : 'active'">
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
  top: 50px;
  left: 0;
  width: 0;
  height: calc(100vh - 50px);
  z-index: 9000;
  overflow-y: scroll;
  background-color: rgba(#000, .5);
  -webkit-transition: all .5s;
  -webkit-transition: -webkit-all .5s;
  transition: all .5s;

  &.active {
    @media (max-width: 400px) { width: 150px; }
    @media (min-width: 500px) { width: 200px; }
    @media (min-width: 750px) { width: 300px; }
    @media (min-width: 1024px) { width: 400px; }
  }
}
</style>
