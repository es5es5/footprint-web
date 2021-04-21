<template>
  <div
    id="modal_group"
    :style="{
      position: 'fixed',
      'z-index': 100,
      ...setModalSize()
    }"
  >
    <ModalPhotos v-if="modals.ModalPhotos.init" :style="{'z-index': modals.ModalPhotos.openIndex}" />
  </div>
</template>

<script>
import ModalPhotos from './ModalPhotos'

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
    ModalPhotos,
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
        ModalPhotos: {
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
          top: 'calc(50px + 1rem)',
          left: 'calc(180px + 1rem)'
          // right: '1rem'
        }
      }
      if (this._medium) {
        return {
          top: 'calc(50px + 1rem)',
          left: 'calc(200px + 3rem)'
          // right: '3rem'
        }
      }
      if (this._large) {
        return {
          top: 'calc(50px + 1rem)',
          left: 'calc(300px + 3rem)'
          // right: '3rem'
        }
      }
      if (this._xlarge) {
        return {
          top: 'calc(50px + 1rem)',
          left: 'calc(400px + 3rem)'
          // right: '3rem'
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.modal_group {
  position: fixed;
  top: 70px;
  left: 0px;
  z-index: 200;
}
</style>
