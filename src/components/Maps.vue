<template>
  <div id="map_container">
    <!-- <button type="button" @click="addMarker">HI</button> -->
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
        :marker="mixinSelectedMarker.naverMarker">
        <div class="info-window-container">
          <h1>{{ mixinSelectedMarker.title }}</h1>
        </div>
      </naver-info-window>
      <naver-marker
        v-for="(item, index) in mixinMarkers"
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
import MixinMap from './MixinMap'

export default {
  name: 'Maps',
  computed: {
    _width () { return window.innerWidth },
    _height () { return window.innerHeight - 50 },
  },
  mixins: [
    MixinMap,
  ],
  data () {
    return {
      isWindowOpen: false,
      isMarkerClickState: false,
      mapOptions: {
        lat: 37.873785,
        lng: 127.742249,
        zoom: 19,
        zoomControl: false,
        naverMarker: null,
      },
      initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE']
    }
  },
  methods: {
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
