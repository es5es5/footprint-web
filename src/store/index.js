import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    markers: [
      {
        id: '1',
        lat: 37.873785,
        lng: 127.742249,
        title: '3POP',
        contents: '3POP HIHI',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '11',
        lat: 37.873785,
        lng: 127.741249,
        title: '3POP',
        contents: '3POP HIHI',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '2',
        lat: 37.874000,
        lng: 127.743000,
        title: 'YOON',
        contents: 'YOON HIHI',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '3',
        lat: 37.874000,
        lng: 127.745000,
        title: '강원대학교 병원',
        contents: '병원입니당',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
    ],
    selectedMarker: {
      naverMarker: {}
    }
  },
  mutations: {
    setMarkers (state, value) { state.markers = value },
    setSelectedMarker (state, value) { state.selectedMarker = value },
    markerLoaded (state, [_naverMarker, _markerId]) {
      const __naverMaker = _naverMarker.setIcon({
        url: require('@/assets/images/icons/marker-black.svg'),
        size: [22, 33],
        origin: [0, 0],
        anchor: [22 / 2, 33 / 2],
      })
      state.markers.find(marker => { return marker.id === _markerId }).naverMarker = __naverMaker
    },
  },
  getters: {
    getMarkers: state => state.markers,
    getSelectedMarker: state => state.selectedMarker,
  },
  actions: {
  },
  modules: {
  }
})
