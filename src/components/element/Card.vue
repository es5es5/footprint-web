<template>
  <div>
    <div class="card_wrap"
      :class="isSliderActive ? 'active' : ''"
    >
      <div
        :id="marker.id"
        class="card"
        :class="[
          isActiveCard ? 'active' : '',
          mixinIsMobile ? 'mobile' : ''
        ]"
      >
        <p class="title">{{ marker.title }}</p>
        <p class="contents" v-html="marker.contents"></p>
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
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    transform: translateX(.5em);
  }

  &.mobile {
    .contents {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 라인수 */
      -webkit-box-orient: vertical;
      word-wrap:break-word;
      line-height: 1.2em;
      height: 2.6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
    }
  }

  &.active {
    transform: translateX(.5em);
    border: 2px solid $success;
    background-color: rgba(#E3F1F3, .9);

    &.mobile {
      .contents {
        overflow: initial;
        text-overflow: initial;
        display: -webkit-box;
        -webkit-line-clamp: initial; /* 라인수 */
        -webkit-box-orient: initial;
        word-wrap:initial;
        line-height: initial;
        height: initial;
      }
    }
  }

  > .title {
    display: inline-block;
    font-size: 1em;
    color: $primary;
    font-weight: bold;
    transition: all 1s;
    margin-bottom: .5em;
    max-width: 100%;
    @include ellipsis;
  }

  > .contents {
    padding: .25em 0 .5em 0;
    font-size: .8em;
    color: #000;
  }

  > .createtime {
    margin-top: 1em;
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
