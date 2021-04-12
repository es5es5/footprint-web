<template>
  <div>
    <div class="card_wrap"
      :class="isSliderActive ? 'active' : ''"
    >
      <div
        class="card"
        :class="isActiveCard ? 'active' : ''"
      >
        <p class="title">{{ marker.title }}</p>
        <p class="contents">{{ marker.contents }}</p>
        <p class="latlng" v-if="mixinDebug">{{ marker.lat }}</p>
        <p class="latlng" v-if="mixinDebug">{{ marker.lng }}</p>
        <p class="createtime">{{ marker.createtime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    marker: {
      type: Object,
      require: true,
      default: () => {}
    },
    isSliderActive: {
      type: Boolean,
      require: true,
      default: () => false,
    },
    isActiveCard: {
      type: Boolean,
      require: true,
      default: () => false,
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.card_wrap {
  padding: .6em 1.25em;
  opacity: 0;
  transition: opacity .5s ease-out;

  &.active {
    opacity: 1;
  }
}
.card {
  padding: .8em 1em;
  border-radius: .4em;
  background-color: rgba(#fff, .9);
  color: grey;
  @include shadow;
  transition: all .5s;

  &:hover {
    cursor: pointer;
    transform: translateX(.5em);
  }

  &.active {
    transform: translateX(.5em);

    > .title {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .4em;
        margin: 0 -.4em;
        background-color: rgba($success, .6);
        border-radius: .4em;
      }
    }
  }

  > .title {
    display: inline-block;
    font-size: 1em;
    color: $primary;
    font-weight: bold;
    transition: all 1s;
  }

  > .contents {
    padding: .25em 0 .5em 0;
    font-size: .8em;
    color: #000;
  }

  > .createtime {
    text-align: right;
    font-size: .6em;
  }

  > .latlng {
    font-size: 1em;
    font-weight: normal;
    color: #000;
  }
}
</style>
