<template>
  <modal
    name="ModalSample"
    class="modal"
    adaptive
    reset
    draggable=".header_wrap"
    @opened="openEvent"
    @closed="closeEvent"
    :clickToClose="false"
    :width="_width"
    :height="_height"
    >

    <div class="header_wrap">
      <h3 class="header">Modal Sample</h3>
      <div class="closeButton" @click="$modal.hide('ModalSample')"></div>
    </div>

    <div class="content_wrap">
      <p>Hello, UI Framework.</p>
      <p>It's Modal!</p>
    </div>
<!--
    <div class="action_wrap">
      <button type="button" class="btn btn_primary pull-right">등록</button>
    </div> -->

  </modal>
</template>

<script>
export default {
  name: 'ModalSample',
  created () {
  },
  computed: {
    _width () { return parseFloat(this.width * 16) },
    _height () { return parseFloat(this.height * 16) }
  },
  data () {
    return {
      // rem 으로 작성
      width: '80',
      height: '43'
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
