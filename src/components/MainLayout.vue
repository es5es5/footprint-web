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
            <h1>{{'hello'}}</h1>
          </div>
        </naver-info-window>
        <naver-marker
          v-for="(item, index) in markers"
          :key="index"
          :id="item.id"
          :lat="item.lat"
          :lng="item.lng"
          @click="onMarkerClicked"
          @load="onMarkerLoaded($event, item.id)"
        />
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
        lat: 37.873785,
        lng: 127.742249,
        zoom: 16,
        zoomControl: true,
      },
      markers: [{
        id: '1',
        lat: 37.873785,
        lng: 127.742249,
      }, {
        id: '2',
        lat: 37.124121,
        lng: 127.124124,
      }],
      initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE']
    }
  },
  methods: {
    onLoad (vue) {
      this.map = vue
    },
    onWindowLoad () {
      console.log('onWindowLoad', arguments)
    },
    onMarkerClicked () {
      console.log('onMarkerClicked', arguments)
      this.info = !this.info
    },
    onMarkerLoaded () {
      console.log('onMarkerLoaded', arguments)
      return false
      // this.marker = vue.marker
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
