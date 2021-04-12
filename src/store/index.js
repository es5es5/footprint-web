import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    markers: [
      {
        id: '1',
        lat: 37.873785,
        lng: 127.742590,
        title: '새마을금고',
        contents: '새마을금고 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '11',
        lat: 37.873785,
        lng: 127.741249,
        title: '3POP',
        contents: 'Lorem ipsum dolor.',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '2',
        lat: 37.874050,
        lng: 127.743100,
        title: 'YOON',
        contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '3',
        lat: 37.874000,
        lng: 127.745000,
        title: '강원대학교 병원',
        contents: '병원입니당 Lorem ipsum dolor sit amet consectetur.',
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
