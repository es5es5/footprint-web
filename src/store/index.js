import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Map: {},
    latlng: {
      lat: 37.873785,
      lng: 127.742590,
    },
    position: {
      state: 'OFF',
      lat: 37.873785,
      lng: 127.742249,
    },
    markers: [],
    selectedMarker: {
      naverMarker: {}
    }
  },
  mutations: {
    setMarkers (state, value) { state.markers = value },
    setPosition (state, value) { Object.assign(state.position, value) },
    setLatlng (state, value) { state.latlng = value },
    setDeSelectMarker (state) {
      state.markers.forEach(marker => {
        marker.naverMarker = marker.naverMarker.setIcon({
          url: require('@/assets/images/icons/marker-black.svg'),
          size: [22, 33],
          origin: [0, 0],
          anchor: [22 / 2, 33 / 2],
        })
      })
      state.selectedMarker = { naverMarker: {} }
    },
    setSelectedMarker (state, value) {
      console.log('setSelectedMarker', value)
      state.markers.forEach(marker => {
        marker.naverMarker = marker.naverMarker.setIcon({
          url: require(`@/assets/images/icons/marker-${marker.id === value.id ? 'primary' : 'black'}.svg`),
          size: [22, 33],
          origin: [0, 0],
          anchor: [22 / 2, 33 / 2],
        })
      })
      state.selectedMarker = value
    },
    markerLoaded (state, [_naverMarker, _markerId]) {
      const __naverMaker = _naverMarker.setIcon({
        url: require('@/assets/images/icons/marker-black.svg'),
        size: [22, 33],
        origin: [0, 0],
        anchor: [22 / 2, 33 / 2],
      })
      state.markers.find(marker => {
        return marker.id === _markerId
      }).naverMarker = __naverMaker
    },
    addMarker (state, marker) {
      state.markers.push(marker)
    },
    setMap (state, value) { state.Map = value },
    setMapCenter (state, [lat, lng]) { state.Map.setCenter(lat, lng) },
    setMapZoom (state, level) { state.Map.setZoom(level, true) },
  },
  getters: {
    getMap: state => state.Map,
    getPosition: state => state.position,
    getLatlng: state => state.latlng,
    getMarkers: state => state.markers,
    getSelectedMarker: state => state.selectedMarker,
  },
  actions: {
  },
  modules: {
  }
})
