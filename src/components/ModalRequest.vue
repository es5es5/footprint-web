<template>
  <modal
    name="ModalRequest"
    class="modal"
    adaptive
    reset
    draggable=".header_wrap"
    @opened="openEvent"
    @closed="closeEvent"
    :clickToClose="true"
    width="380"
    height="400"
    >

    <div class="content_wrap">
      Sign In
    </div>

  </modal>
</template>

<script>
export default {
  name: 'ModalRequest',
  created () {
  },
  computed: {
  },
  data () {
    return {
    }
  },
  methods: {
    openEvent () {},
    closeEvent () { this.$emit('callback') }
  }
}
</script>

<style lang="scss" scoped>
</style>
