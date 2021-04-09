<template>
  <Modal :id="'ModalSample'">
    <template slot="modalTitle">
      {{ modalData.title }}
    </template>
    <template slot="modalBody">
      {{ modalData.contents }}
    </template>
    <div slot="modalActions">
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'ModalSample',
  props: {
    modalData: {
      type: Object,
      require: true,
      default: () => {}
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
