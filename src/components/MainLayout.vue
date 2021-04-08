<template>
  <div>
    <Header />
    <div class="map_container">
      <naver-maps
        :width="_width"
        :height="_height"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @click="onClickE"
        @load="onLoad">
        <naver-info-window
          class="info-window"
          @load="onWindowLoad"
          :isOpen="isOpen"
          :marker="selectedMarker.naverMarker">
          <div class="info-window-container">
            <h1>{{ selectedMarker.title }}</h1>
          </div>
        </naver-info-window>
        <naver-marker
          v-for="(item, index) in markers"
          :key="index"
          :id="item.id"
          :lat="item.lat"
          :lng="item.lng"
          @mouseover="onMarkerClicked($event, item.id)"
          @mouseout="closeMarker"
          @click="onMarkerClicked($event, item.id)"
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
      selectedMarker: {
        naverMarker: {}
      },
      count: 1,
      map: null,
      isCTT: false,
      isOpen: false,
      mapOptions: {
        lat: 37.873785,
        lng: 127.742249,
        zoom: 16,
        zoomControl: true,
        naverMarker: null,
      },
      markers: [
        {
          id: '1',
          lat: 37.873785,
          lng: 127.742249,
          title: '3POP',
          naverMarker: null,
        },
        {
          id: '2',
          lat: 37.874000,
          lng: 127.743000,
          title: 'YOON',
          naverMarker: null,
        },
      ],
      initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE']
    }
  },
  methods: {
    onClickE () {
      this.isOpen = false
      this.marker = null
      console.log('onClickE', arguments)
    },
    closeMarker () {
      console.log('closeMarker')
      this.isOpen = false
      this.marker = null
    },
    onLoad () {
      console.log('onLoad', arguments)
    },
    onWindowLoad () {
      console.log('onWindowLoad', arguments)
    },
    onMarkerClicked (event, markerId) {
      this.isOpen = false
      console.log('onMarkerClicked', arguments)
      this.selectedMarker = this.markers.find(marker => {
        return marker.id === markerId
      })
      this.$nextTick(() => {
        this.isOpen = true
      })
    },
    onMarkerLoaded () {
      console.log(arguments[0])
      this.markers.find(marker => {
        return marker.id === arguments[1]
      }).naverMarker = arguments[0]
      return false
      // this.marker = vue.marker
    }
  },
}
</script>

<style lang="scss" scoped>
.info-window {
  top: 200px;
  border-radius: 20px;
  background-color: red;
}
.info-window-container {
  padding: 10px;
}
</style>

<style lang="scss">
</style>
