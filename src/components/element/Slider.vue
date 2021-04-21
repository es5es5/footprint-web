<template>
  <div id="slider">
    <div class="slider_wrap" :class="isSliderActive ? 'active' : ''">
      <p class="schema" v-if="_scheme">for "{{ _scheme }}"</p>
      <div class="card_container">
        <Card
          v-for="(item, index) in mixinMarkers"
          :key="index"
          :marker="item"
          :isActiveCard="item.id === mixinSelectedMarker.id"
          :isSliderActive="isSliderActive"
          @click.native="clickCard({
            id: item.id,
            lat: item.lat,
            lng: item.lng,
            zoom: item.zoom,
            photos: item.photos,
          })"
        />
      </div>
      <span class="version">Ver. {{ _version.version }}</span>
      <span class="total">Total: {{ mixinMarkers.length || 0 }}</span>
    </div>
  </div>
</template>

<script>
import MixinMaps from '../MixinMaps'
import Card from './Card'

export default {
  name: 'Slider',
  components: {
    Card,
  },
  mixins: [
    MixinMaps,
  ],
  watch: {
  },
  props: {
    isSliderActive: {
      type: Boolean,
      require: true,
      default: () => false,
    }
  },
  computed: {
    _scheme () { return process.env.VUE_APP_DATAS || false },
    _version () { return require('@/../package.json') }
  },
  data () {
    return {
      activeCardId: null
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.slider_wrap {
  padding: 2.5rem 0;
  position: fixed;
  top: 50px;
  left: 0;
  width: 0;
  height: calc(100% - 50px);
  z-index: 9000;
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

  .version {
    position: absolute;
    font-size: .5rem;
    bottom: .2rem;
    right: 1rem;
  }

  .total {
    position: absolute;
    font-size: 1rem;
    bottom: 1rem;
    right: 1rem;
  }

  .schema {
    position: absolute;
    top: .6rem;
    width: 180px;
    @media (min-width: 500px) { width: 200px; }
    @media (min-width: 750px) { width: 300px; }
    @media (min-width: 1024px) { width: 400px; }

    font-size: 1.1rem;
    text-align: center;
    // margin-bottom: 1rem;
    color: $success;
    font-weight: bold;
  }

  .search-card {
    position: absolute;
    display: none;
    padding: .5rem 1rem;
    margin: 0 auto;
    width: calc(100% - 2rem - 6px);
    font-size: 1rem;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    height: 2rem;
    border-radius: 4px;
    outline: none;
    border: 2px solid $success;
  }
}

.card_container {
  max-height: calc(100%);
  overflow-y: scroll;
}
</style>
