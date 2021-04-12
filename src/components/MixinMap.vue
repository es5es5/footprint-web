<template>
  <div></div>
</template>

<script>
export default {
  name: 'MixinMap',
  methods: {
    openModal () {
      this.$eventBus.$emit('openModal', 'ModalSample')
    },
    loadMap () {
      if (this.isMapStateConsole) console.log('loadMap', arguments)
    },
    loadWindow () {
      if (this.isMapStateConsole) console.log('loadWindow', arguments)
    },
    clickMap () {
      if (this.isMapStateConsole) console.log('clickMap', arguments)
      this.closeWindow()
      this.isMarkerClickState = false
    },
    clickMarker (event, markerId) {
      console.log('clickMarker', arguments)
      this.isMarkerClickState = true
      this.setSelectMarker(markerId)
      this.openModal()
    },
    hoverMarker (event, markerId) {
      if (!this.mixinIsMobile) {
        this.openWindow(event, markerId)
      }
    },
    hoverOutMarker () {
      if (this.isMarkerClickState) return false
      this.closeWindow()
    },
    setSelectMarker (markerId) {
      console.log('setSelectMarker', markerId)
      const _marker = this.mixinMarkers.find(marker => { return marker.id === markerId })
      console.log('_marker', _marker)
      this.$store.commit('setSelectedMarker', _marker)
    },
    openWindow (event, markerId) {
      console.log('openWindow', arguments, markerId)
      this.isWindowOpen = false
      this.setSelectMarker(markerId)
      this.$nextTick(() => { this.isWindowOpen = true })
    },
    onMarkerLoaded () {
      console.log('onMarkerLoaded', arguments[0], arguments[1])
      this.$store.commit('markerLoaded', [arguments[0], arguments[1]])
    },
    closeWindow () {
      this.isWindowOpen = false
      this.$store.commit('setSelectedMarker', { naverMarker: {} })
    },
  }
}
</script>

<style>

</style>
