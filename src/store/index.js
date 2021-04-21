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
      photos: [],
      naverMarker: {}
    },
    user: {
      uid: '',
      displayName: '',
      photoURL: '',
      email: '',
      isAnonymous: false,
      schema: '',
    },
  },
  mutations: {
    setUser (state, value) {
      Object.assign(state.user, {
        uid: value.uid,
        displayName: value.displayName,
        photoURL: value.photoURL,
        email: value.email,
        isAnonymous: value.isAnonymous,
        schema: value.schema,
      })

      // if (state.user.isAnonymous) state.user.displayName = '게스트'
    },
    setUserSchema (state, value) {
      Object.assign(state.user, {
        schema: value,
      })

      // if (state.user.isAnonymous) state.user.displayName = '게스트'
    },
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
      state.selectedMarker = {
        photos: [],
        naverMarker: {}
      }
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
    markerLoaded (state, [_naverMarker, _marker]) {
      const __naverMaker = _naverMarker.setIcon({
        url: require('@/assets/images/icons/marker-black.svg'),
        size: [22, 33],
        origin: [0, 0],
        anchor: [22 / 2, 33 / 2],
      })

      __naverMaker.setTitle(_marker.title || '')

      state.markers.find(marker => {
        return marker.id === _marker.id
      }).naverMarker = __naverMaker
    },
    addMarker (state, marker) {
      state.markers.push(marker)
    },
    setMap (state, value) { state.Map = value },
    setMapCenter (state, [lat, lng]) { state.Map.setCenter(lat, lng) },
    setMapZoom (state, [level, effect]) { state.Map.setZoom(level, effect) },
  },
  getters: {
    getUser: state => state.user,
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
