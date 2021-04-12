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
        contents: '제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는 자를 임명한다.',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '11',
        lat: 37.873785,
        lng: 127.741249,
        title: '3POP',
        contents: '국가는 평생교육을 진흥하여야 한다. 대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다.',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '2',
        lat: 37.874050,
        lng: 127.743100,
        title: 'YOON',
        contents: '농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다.',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '3',
        lat: 37.874000,
        lng: 127.745000,
        title: '강원대학교 병원',
        contents: '사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.',
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
