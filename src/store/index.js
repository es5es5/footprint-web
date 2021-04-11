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
        title: 'YOON',
        contents: 'YOON HIHI',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
    ]
  },
  mutations: {
    setMarkers (state, value) { state.markers = value },
  },
  getters: {
    getMarkers: state => state.markers,
  },
  actions: {
  },
  modules: {
  }
})
