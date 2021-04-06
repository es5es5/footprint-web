<template>
  <div>
    <Header />
    <div class="map_container">
      <naver-maps
        :width="_width"
        :height="_height"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @load="onLoad">
        <naver-info-window
          class="info-window"
          @load="onWindowLoad"
          :isOpen="info"
          :marker="marker">
          <div class="info-window-container">
            Hi
          </div>
        </naver-info-window>
        <naver-marker :lat="37" :lng="127" @click="onMarkerClicked" @load="onMarkerLoaded"/>
      </naver-maps>
    </div>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'MainLayout',
  mounted () {
  },
  components: {
    Header
  },
  computed: {
    _width () { return window.innerWidth },
    _height () { return window.innerHeight - 50 },
  },
  data () {
    return {
      info: false,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,
      mapOptions: {
        lat: 37,
        lng: 127,
        zoom: 12,
        zoomControl: true,
      },
      initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE']
    }
  },
  methods: {
    onLoad (vue) {
      this.map = vue
    },
    onWindowLoad (that) {
    },
    onMarkerClicked (event) {
      this.info = !this.info
    },
    onMarkerLoaded (vue) {
      this.marker = vue.marker
    }
  },
}
</script>

<style lang="scss" scoped>
// .map {
//   width: 100%;
//   height: calc(100vh - 50px);
// }
</style>
