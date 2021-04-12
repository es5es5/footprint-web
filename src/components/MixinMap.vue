<template>
  <div></div>
</template>

<script>
export default {
  name: 'MixinMap',
  methods: {
    openModal () { this.$eventBus.$emit('openModal', 'ModalSample') },
    closeModal () { this.$eventBus.$emit('closeModal', 'ModalSample') },
    loadMap () {
      if (this.isMapStateConsole) console.log('loadMap', arguments)
    },
    loadWindow () {
      if (this.isMapStateConsole) console.log('loadWindow', arguments)
    },
    clickMap () {
      if (this.isMapStateConsole) console.log('clickMap', arguments)
      this.closeWindow()
      this.closeModal()
      this.setDeSelectMarker()
      this.isMarkerClickState = false
    },
    clickMarker (event, markerId) {
      if (this.isMapStateConsole) console.log('clickMarker', arguments)
      this.isMarkerClickState = true
      this.setSelectMarker(markerId)
      this.openModal()
    },
    hoverMarker (event, markerId) {
      if (this.mixinIsMobile) {
        return false
      } else {
        this.openWindow(null, markerId)
      }
    },
    hoverOutMarker () {
      if (this.isMarkerClickState) return false
      if (this.mixinIsMobile) {
        return false
      } else {
        this.closeWindow()
      }
    },
    setSelectMarker (markerId) {
      if (this.isMapStateConsole) console.log('setSelectMarker', markerId)
      const _marker = this.mixinMarkers.find(marker => { return marker.id === markerId })
      if (this.isMapStateConsole) console.log('_marker', _marker)
      this.$store.commit('setSelectedMarker', _marker)
    },
    openWindow (event, markerId) {
      if (this.isMapStateConsole) console.log('openWindow', arguments, markerId)
      this.closeWindow()
      this.setSelectMarker(markerId)
      this.$nextTick(() => {
        this.isWindowOpen = true
      })
    },
    onMarkerLoaded () {
      if (this.isMapStateConsole) console.log('onMarkerLoaded', arguments[0], arguments[1])
      this.$store.commit('markerLoaded', [arguments[0], arguments[1]])
    },
    closeWindow () {
      this.isWindowOpen = false
      this.setDeSelectMarker()
    },
    setDeSelectMarker () {
      this.$store.commit('setDeSelectMarker')
    }
  }
}
</script>

<style>

</style>
