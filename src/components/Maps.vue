<template>
  <div id="map_container">
    <!-- <button type="button" @click="debug">HI</button> -->
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
        @click="clickMarker($event, {
          id: item.id,
          photos: item.photos,
        })"
        @load="onMarkerLoaded($event, {
          id: item.id,
          title: item.title,
        })"
      />
    </naver-maps>
  </div>
</template>

<script>
import MixinMaps from './MixinMaps'
import Datas from '@/assets/js/datas'

export default {
  name: 'Maps',
  created () {
    this.mapOptions = Datas[this.mixinUser.schema].mapOptions
  },
  computed: {
    _width () { return window.innerWidth },
    _height () { return window.innerHeight - 50 },
  },
  mixins: [
    MixinMaps,
  ],
  data () {
    return {
      mapInit: false,
      mapOptions: {
        lat: 37.5666497,
        lng: 126.9813251,
        zoom: 16,
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
