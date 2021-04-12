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
        title: '새마을금고',
        contents: '새마을금고 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repudiandae voluptatibus suscipit in hic recusandae maxime officia sequi vero tempore voluptates, officiis sint rem harum inventore blanditiis est dolore ipsa? Provident repudiandae ducimus, debitis corrupti non error consequuntur voluptatem qui.',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '11',
        lat: 37.873785,
        lng: 127.741249,
        title: '3POP',
        contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste recusandae architecto ut, esse deleniti atque modi quibusdam quasi consequuntur eos?',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '2',
        lat: 37.874000,
        lng: 127.743000,
        title: 'YOON',
        contents: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repudiandae voluptatibus suscipit in hic recusandae maxime officia sequi vero tempore voluptates, officiis sint rem harum inventore blanditiis est dolore ipsa? Provident repudiandae ducimus, debitis corrupti non error consequuntur voluptatem qui.',
        createtime: '2020-05-13 20:00',
        naverMarker: null,
      },
      {
        id: '3',
        lat: 37.874000,
        lng: 127.745000,
        title: '강원대학교 병원',
        contents: '병원입니당 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae ullam neque inventore eius fugit, repellendus odit voluptatum commodi amet culpa ratione suscipit laborum iusto perspiciatis deserunt maxime ex pariatur ducimus sapiente officia cum delectus veniam! Consectetur, eaque quisquam temporibus, accusantium doloribus placeat quae, nisi vitae accusamus deleniti culpa! Eaque recusandae deserunt laborum qui eligendi tenetur laboriosam exercitationem ducimus vel natus veniam voluptatem fugit, mollitia id soluta, quasi, quidem eius asperiores cum corporis cumque? Perspiciatis tenetur, incidunt praesentium recusandae officiis dicta, nostrum at neque obcaecati iusto cupiditate iste, aperiam hic. Eaque ad quo debitis? At dolorem optio quasi maxime aut.',
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
    setDeSelectMarker (state) { state.selectedMarker = { naverMarker: {} } },
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
