<template>
  <div></div>
</template>

<script>
export default {
  name: 'MixinMaps',
  data () {
    return {
      isWindowOpen: false,
      isMarkerClickState: false,
    }
  },
  methods: {
    openModal () { this.$eventBus.$emit('openModal', 'ModalSample') },
    closeModal () { this.$eventBus.$emit('closeModal', 'ModalSample') },
    debug () {
    },
    loadMap () {
      if (this.mixinDebug) console.log('loadMap', arguments)
      this.$store.commit('setMap', arguments[0])
    },
    loadWindow () {
      if (this.mixinDebug) console.log('loadWindow', arguments)
    },
    clickMap () {
      if (this.mixinDebug) console.log('clickMap', arguments)
      this.closeModal()
      console.log('lat: ', arguments[0].latlng._lat)
      console.log('lng: ', arguments[0].latlng._lng)
      this.$store.commit('setLatlng', {
        lat: arguments[0].latlng._lat,
        lng: arguments[0].latlng._lng,
      })

      if (this.mixinPosition.state === 'READY') {
        this.$store.commit('setPosition', {
          state: 'COMPLETE',
          lat: arguments[0].latlng._lat,
          lng: arguments[0].latlng._lng,
        })
        this.addMarker()
      }
      this.closeWindow()
      this.setDeSelectMarker()
      this.isMarkerClickState = false
    },
    addMarker () {
      this.$store.commit('addMarker', {
        id: this.COMMON.UUID(),
        lat: this.mixinPosition.lat,
        lng: this.mixinPosition.lng,
        title: 'HIHI',
        contents: 'HIHI',
        createtime: 'Now',
        naverMarker: null,
      })
      this.setPositionState('OFF')
    },
    setPositionState (state) {
      this.$store.commit('setPosition', { state })
    },
    clickMarker (event, marker) {
      this.closeModal()
      if (this.mixinDebug) console.log('clickMarker', arguments)
      this.isMarkerClickState = true
      this.setSelectMarker(marker.id)
      if (marker.photos.length > 0) {
        this.openModal()
      }
      this.$nextTick(() => {
        document.getElementById(marker.id).scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      })
    },
    hoverMarker (event, markerId) {
      // if (this.mixinIsMobile) {
      //   return false
      // } else {
      //   this.openWindow(null, markerId)
      // }
    },
    hoverOutMarker () {
      // if (this.isMarkerClickState) return false
      // if (this.mixinIsMobile) {
      //   return false
      // } else {
      //   this.closeWindow()
      // }
    },
    openWindow (event, markerId) {
      // if (this.mixinDebug) console.log('openWindow', arguments, markerId)
      // this.closeWindow()
      // this.setSelectMarker(markerId)
      // this.$nextTick(() => {
      //   this.isWindowOpen = true
      // })
    },
    setSelectMarker (markerId) {
      if (this.mixinDebug) console.log('setSelectMarker', markerId)
      const _marker = this.mixinMarkers.find(marker => { return marker.id === markerId })
      if (this.mixinDebug) console.log('_marker', _marker)
      this.$store.commit('setSelectedMarker', _marker)
    },
    onMarkerLoaded () {
      if (this.mixinDebug) console.log('onMarkerLoaded', arguments[0], arguments[1])
      this.$store.commit('markerLoaded', [arguments[0], arguments[1]])
    },
    closeWindow () {
      this.isWindowOpen = false
      this.setDeSelectMarker()
    },
    setDeSelectMarker () {
      this.$store.commit('setDeSelectMarker')
    },
    clickCard (marker) {
      this.closeModal()
      this.setMapCenter(marker.lat, marker.lng)
      this.setSelectMarker(marker.id)
      if (marker.photos.length > 0) {
        this.openModal()
      }
      this.$nextTick(() => {
        document.getElementById(marker.id).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        })
      })
    },
    setMapCenter (lat, lng) {
      this.$store.commit('setMapCenter', [lat, lng - 0.00025])
    },
    setMapZoom (level) {
      this.$store.commit('setMapZoom', level)
    },
  }
}
</script>

<style>

</style>
