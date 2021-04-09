<template>
  <div class="tm_modal" :id="_modalId" v-draggable="draggableOptions">
    <div class="tm_modal_title" v-if="$slots.modalTitle" :ref="`handle_${id}`">
      <h3 class="modal__title">
        <slot name="modalTitle" v-if="$slots.modalTitle"></slot>
      </h3>
    </div>
    <button type="button" class="ui button btn_close" @click.stop="closeModal">&times;</button>

    <div class="tm_modal_body">
      <slot name="modalBody" v-if="$slots.modalBody"></slot>
    </div>
    <div class="tm_modal_actions" v-if="$slots.modalActions">
      <slot name="modalActions"></slot>
    </div>
  </div>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'

export default {
  name: 'TmModal',
  created () {},
  mounted () {
    this.draggableOptions.handle = this.$refs[`handle_${this.id}`]

    this.$nextTick(() => {
      window.document.getElementById(`${this._modalId}`).removeAttribute('draggable')
    })
  },
  directives: {
    Draggable
  },
  props: {
    id: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      draggableOptions: {
        handle: '',
        boundingElement: document.getElementById('map_container'),
        onDragEnd: this.onDragEnd
      }
    }
  },
  computed: {
    _modalId () {
      return this.id
    },
  },
  watch: {},
  methods: {
    closeModal () { this.$eventBus.$emit('closeModal', this._modalId) },
    onDragEnd (positionDiff, absolutePosition, event) {
      const _this = this
      const modalTop = absolutePosition.top
      if (modalTop <= 0) document.getElementById(`${_this._modalId}`).style.top = '10px'

      if (window.innerHeight - modalTop < document.getElementById(`${_this._modalId}`).innerHeight) {
        document.getElementById(`${_this._modalId}`).style.top = `${window.innerHeight - window.innerHeight.innerHeight}px`
        // $(`#${_this._modalId}`).css('top', ($(window).height() - $(`#${_this._modalId}`).height()) + 'px')
      }
      // if ($(window).height() - modalTop < $(`#${_this._modalId}`).height()) {
      //   $(`#${_this._modalId}`).css('top', ($(window).height() - $(`#${_this._modalId}`).height()) + 'px')
      // }
    }
  }
}
</script>

<style lang="scss" scoped>

.tm_modal {
  display: inline-block;
  margin-left: 2px;
  min-width: 400px;
  vertical-align: top;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15);
}

.tm_modal_title {
  padding: 10px;
  height: 36px;
  background-color: #253966;
  @include grab;
  @include clearfix;

  .modal__title {
    display: inline-block;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
  }

  .closeImg {
    width: 15px;
    height: 15px;
  }
}

.tm_modal_body {
  min-height: 100px;
  padding: 20px;
}
.tm_modal_actions {
  padding: 0 20px 20px 20px;
}

.btn_close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px;
  line-height: 33px;
  font-size: 46px;
  color: $gray;
  background: none;
  border: 0;
  color: rgb(179, 179, 179);
}
</style>
