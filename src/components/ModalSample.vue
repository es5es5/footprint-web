<template>
  <Modal :id="'ModalSample'">
    <template slot="modalTitle">
      {{ mixinSelectedMarker.title }}
    </template>
    <template slot="modalBody">
      {{ mixinSelectedMarker.contents }}
    </template>
    <div slot="modalActions">
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
