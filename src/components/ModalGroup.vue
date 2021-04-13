<template>
  <div id="modal_group" :style="{position: 'fixed', 'z-index': 100, top: 'calc(50px + 5rem)', right: `${mixinIsMobile ? '1em' : '10em'}`}">
    <ModalSample v-if="modals.ModalSample.init" :style="{'z-index': modals.ModalSample.openIndex}" />
  </div>
</template>

<script>
import ModalSample from './ModalSample'

export default {
  name: 'ModalGroup',
  created () {
    this.$eventBus.$on('openModal', this.openModal)
    this.$eventBus.$on('closeModal', this.closeModal)
  },
  beforeDestroy () {
    this.$eventBus.$off('openModal')
    this.$eventBus.$off('closeModal')
  },
  components: {
    ModalSample,
  },
  data () {
    return {
      modals: {
        ModalSample: {
          init: false,
          openIndex: 0
        },
      },
      openIndexTotal: 0,
      modalData: null,
    }
  },
  computed: {
  },
  methods: {
    openModal (type, data) {
      this.modals[type].init = true
      this.modals[type].openIndex = ++this.openIndexTotal
      this.modalData = data
    },
    closeModal (type) {
      this.modals[type].init = false
      this.modals[type].data = null
    }
  }
}
</script>

<style lang="scss" scoped>
//

.modal_group {
  position: fixed;
  top: 70px;
  left: 0px;
  z-index: 100;
}
</style>
