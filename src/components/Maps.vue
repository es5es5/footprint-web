<template>
  <div id="map_container">
    <naver-maps
      :width="_width"
      :height="_height"
      :mapOptions="mapOptions"
      :initLayers="initLayers"
      @click="clickMap"
      @load="loadMap">
      <naver-info-window
        class="info-window"
        @load="loadWindow"
        :isOpen="isWindowOpen"
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
        @mouseover="hoverMarker($event, item.id)"
        @mouseout="hoverOutMarker"
        @click="clickMarker($event, item.id)"
        @load="onMarkerLoaded($event, item.id)"
      />
    </naver-maps>
  </div>
</template>

<script>
export default {
  name: 'Maps',
  computed: {
    _width () { return window.innerWidth },
    _height () { return window.innerHeight - 50 },
  },
  data () {
    return {
      selectedMarker: {
        naverMarker: {}
      },
      map: null,
      isWindowOpen: false,
      isMarkerClickState: false,
      mapOptions: {
        lat: 37.873785,
        lng: 127.742249,
        zoom: 16,
        zoomControl: false,
        naverMarker: null,
      },
      markers: [
      ],
      initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE']
    }
  },
  methods: {
    openModal () {
      this.$eventBus.$emit('openModal', 'ModalSample', this.selectedMarker)
    },
    loadMap () {
      console.log('loadMap', arguments)
      this.markers = this.mixinMarkers
    },
    loadWindow () {
      console.log('loadWindow', arguments)
    },
    clickMap () {
      console.log('clickMap', arguments)
      this.closeWindow()
      this.isMarkerClickState = false
    },
    clickMarker (event, markerId) {
      this.isMarkerClickState = true
      this.setSelectMarker(markerId)
      this.openModal()
    },
    hoverMarker (event, markerId) {
      if (!this.isMobile) {
        this.openWindow(event, markerId)
      }
    },
    hoverOutMarker () {
      if (this.isMarkerClickState) return false
      this.closeWindow()
    },
    setSelectMarker (markerId) {
      this.selectedMarker = this.markers.find(marker => { return marker.id === markerId })
    },
    openWindow (event, markerId) {
      this.isWindowOpen = false
      this.setSelectMarker(markerId)
      this.$nextTick(() => { this.isWindowOpen = true })
    },
    onMarkerLoaded () {
      this.markers.find(marker => { return marker.id === arguments[1] }).naverMarker = arguments[0]
    },
    closeWindow () {
      this.isWindowOpen = false
      this.marker = null
    },
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
