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
      this.$store.commit('setSelectedMarker', this.mixinMarkers.find(marker => { return marker.id === markerId }))
    },
    openWindow (event, markerId) {
      this.isWindowOpen = false
      this.setSelectMarker(markerId)
      this.$nextTick(() => { this.isWindowOpen = true })
    },
    onMarkerLoaded () {
      this.mixinMarkers.find(marker => { return marker.id === arguments[1] }).naverMarker = arguments[0]
    },
    closeWindow () {
      this.isWindowOpen = false
      this.$store.commit('setSelectedMarker', { naverMarker: null })
    },
  }
}
</script>

<style>

</style>
