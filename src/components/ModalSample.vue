<template>
  <Modal :id="'ModalSample'">
    <template slot="modalTitle">
      {{ mixinSelectedMarker.title }}
    </template>
    <template slot="modalBody">
      <p v-html="mixinSelectedMarker.contents"></p>
    </template>
    <div slot="modalActions">
      <div v-if="mixinDebug">
        <p>lat: {{ mixinSelectedMarker.lat }}</p>
        <p>lng: {{ mixinSelectedMarker.lng }}</p>
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'ModalSample',
  props: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
