<template>
  <div class="plain-modal" :id="_modalId" v-draggable="draggableOptions" :style="setModalSize()">
    <div class="modal_title" v-if="$slots.modalTitle" :ref="`handle_${id}`">
      <h3 class="modal__title">
        <slot name="modalTitle" v-if="$slots.modalTitle"></slot>
      </h3>
    </div>
    <button type="button" class="ui button btn_close" @click.stop="closeModal">&times;</button>

    <div class="modal_body">
      <slot name="modalBody" v-if="$slots.modalBody"></slot>
    </div>
    <div class="modal_actions" v-if="$slots.modalActions">
      <slot name="modalActions"></slot>
    </div>
  </div>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'

export default {
  name: 'PlainModal',
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
    _modalId () { return this.id },
    _small () { return window.innerWidth < 500 },
    _medium () { return window.innerWidth >= 500 && window.innerWidth < 750 },
    _large () { return window.innerWidth >= 750 && window.innerWidth < 1024 },
    _xlarge () { return window.innerWidth >= 1024 },
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
      }
    },
    setModalSize () {
      if (this._small) {
        return {
          width: '180px'
        }
      }
      if (this._medium) {
        return {
          'min-width': '200px',
          'max-width': 'calc(100vw - 350px - 5rem)',
        }
      }
      if (this._large) {
        return {
          'min-width': '200px',
          'max-width': 'calc(100vw - 400px - 5rem)',
        }
      }
      if (this._xlarge) {
        return {
          'min-width': '200px',
          'max-width': 'calc(100vw - 450px - 5rem)',
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>

.plain-modal {
  display: inline-block;
  margin-left: 2px;
  vertical-align: top;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15);
}

.modal_title {
  padding: 10px 40px 10px 10px;
  height: 36px;
  line-height: 15px;
  background-color: $success;
  @include grab;
  @include clearfix;

  .modal__title {
    display: inline-block;
    color: #fff;
    font-size: 15px;
    max-width: 100%;
    @include ellipsis;
  }

  .closeImg {
    width: 15px;
    height: 15px;
  }
}

.modal_body {
  min-height: 100px;
  padding: 10px;
}

.modal_actions {
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
  outline: none;
  color: rgb(179, 179, 179);

  &:hover {
    cursor: pointer;
  }
}
</style>
