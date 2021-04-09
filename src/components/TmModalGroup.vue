<template>
  <div id="tm_modal_group" class="tm_modal_group">
    <ModalOutCallMobile v-if="modals.ModalOutCallMobile.init" :style="{'z-index': modals.ModalOutCallMobile.openIndex}" />
    <ModalInCallMobile v-if="modals.ModalInCallMobile.init" :style="{'z-index': modals.ModalInCallMobile.openIndex}" />
  </div>
</template>

<script>
import ModalOutCallMobile from './modal/ModalOutCallMobile'
import ModalInCallMobile from './modal/ModalInCallMobile'

export default {
  name: 'TmModalGroup',
  created () {
    this.$eventBus.$on('openModal', this.openModal)
    this.$eventBus.$on('closeModal', this.closeModal)
  },
  beforeDestroy () {
    this.$eventBus.$off('openModal')
    this.$eventBus.$off('closeModal')
  },
  components: {
    ModalOutCallMobile,
    // ModalProvideOutCallMobile,
    ModalInCallMobile,
    // ModalInCallingMobile
  },
  data () {
    return {
      modals: {
        ModalOutCallMobile: {
          init: false,
          openIndex: 0
        },
        modalProvideOutCallMobile: {
          init: false,
          openIndex: 0
        },
        ModalInCallMobile: {
          init: false,
          openIndex: 0
        },
        modalInCallingMobile: {
          init: false,
          openIndex: 0
        }
      },
      openIndexTotal: 0
    }
  },
  computed: {
  },
  methods: {
    openModal (type, data) {
      this.modals[type].init = true
      this.modals[type].openIndex = ++this.openIndexTotal
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

.tm_modal_group {
  position: fixed;
  top: 70px;
  left: 250px;
  z-index: 100;
}
</style>
