<template>
  <div id="modal_group" :style="{
    position: 'fixed',
    'z-index': 100,
    ...setModalSize()
  }">
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
  computed: {
    _small () { return window.innerWidth < 500 },
    _medium () { return window.innerWidth >= 500 && window.innerWidth < 750 },
    _large () { return window.innerWidth >= 750 && window.innerWidth < 1024 },
    _xlarge () { return window.innerWidth >= 1024 },
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
  methods: {
    openModal (type, data) {
      this.modals[type].init = true
      this.modals[type].openIndex = ++this.openIndexTotal
      this.modalData = data
    },
    closeModal (type) {
      this.modals[type].init = false
      this.modals[type].data = null
    },
    setModalSize () {
      if (this._small) {
        return {
          top: 'calc(50px + 5rem)',
          left: 'calc(180px + 1rem)'
        }
      }
      if (this._medium) {
        return {
          top: 'calc(50px + 5rem)',
          left: 'calc(200px + 3rem)'
        }
      }
      if (this._large) {
        return {
          top: 'calc(50px + 5rem)',
          left: 'calc(300px + 3rem)'
        }
      }
      if (this._xlarge) {
        return {
          top: 'calc(50px + 5rem)',
          left: 'calc(400px + 3rem)'
        }
      }
    },
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
