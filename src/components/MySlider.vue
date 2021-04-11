<template>
  <div id="slider">
    <div class="slider_wrap" :class="isActive ? 'active' : ''">
      <div class="card_container">
        <ul class="card_wrap">
          <li class="card" v-for="index in 30" :key="index">
            <p class="title">YOON</p>
            <p class="contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus.</p>
            <p class="createtime">2020-05-05 16:30</p>
          </li>
        </ul>
      </div>
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
  background-color: rgba(#000, .2);
  font-size: 14px;
  @media (min-width: 500px) { font-size: 16px; }
  @media (min-width: 750px) { font-size: 18px; }
  @media (min-width: 1024px) { font-size: 20px; }

  -webkit-transition: all .5s;
  -webkit-transition: -webkit-all .5s;
  transition: all .5s;

  &.active {
    width: 180px;
    @media (min-width: 500px) { width: 200px; }
    @media (min-width: 750px) { width: 300px; }
    @media (min-width: 1024px) { width: 400px; }
  }
}

.card_wrap {
  padding: 1em;
}
.card {
  margin-bottom: 1em;
  padding: .8em 1em;
  border-radius: .4em;
  background-color: rgba(#fff, .8);
  color: grey;
  @include shadow;

  &:hover {
    cursor: pointer;
  }

  > .title {
    font-size: 1em;
    color: $primary;
    font-weight: bold;
  }

  > .contents {
    padding: .25em 0 .5em 0;
    font-size: .8em;
    color: #000;
  }

  > .createtime {
    text-align: right;
    font-size: .5em;
  }
}
</style>
