<template>
  <div>
    <div class="card_container">
      <ul class="card_wrap" :class="isSliderActive ? 'active' : ''">
        <li
          class="card"
          :class="activeCard === index ? 'active' : ''"
          v-for="index in 30" :key="index"
          @click="setCardActive(index)"
        >
          <p class="title">YOON</p>
          <p class="contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus.</p>
          <p class="createtime">2020-05-05 16:30</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    isSliderActive: {
      type: Boolean,
      require: true,
      default: () => false,
    }
  },
  data () {
    return {
      activeCard: null,
    }
  },
  methods: {
    setCardActive (index) {
      this.activeCard = index
    }
  }
}
</script>

<style lang="scss" scoped>
.card_wrap {
  padding: 1em;
  opacity: 0;
  transition: opacity .5s ease-in-out;

  &.active {
    opacity: 1;
  }
}
.card {
  margin-bottom: 1em;
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
        background-color: rgba(#2F96FD, .6);
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
}
</style>
