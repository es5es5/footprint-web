<template>
  <tm-modal :id="'ModalSample'">
    <template slot="modalTitle">
      {{ modalData.title }}
    </template>
    <template slot="modalBody">
    </template>
    <div slot="modalActions">
    </div>
  </tm-modal>
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
