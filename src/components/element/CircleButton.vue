<template>
  <div id="circle">
    <div class="button_wrap" @click="setPositionState('READY')">
      <template v-if="mixinPosition.state === 'READY'">
        <img src="@/assets/images/icons/marker-add-success.svg" class="marker-add" alt="marker-add">
      </template>
      <template v-else>
        <img src="@/assets/images/icons/marker-add-primary.svg" class="marker-add" alt="marker-add">
      </template>
    </div>
  </div>
</template>

<script>
import MixinMaps from '../MixinMaps'

export default {
  name: 'CircleButton',
  mixins: [
    MixinMaps,
  ]
}
</script>

<style lang="scss" scoped>
#circle {
  font-size: 16px;
  z-index: 9999;
  width: 3em;
  height: 3em;
  background-color: rgba(#fff, .2);
  position: fixed;
  right: 2em;
  bottom: 3.5em;

  border-radius: 50%;
  @include shadow;

  opacity: .8;
  transition: all .5s ease-out;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: translateY(-1em);
  }

  &.active {
    opacity: 1;
    transform: translateY(-1em);
  }

  @media (min-width: 500px) {
    width: 4em;
    height: 4em;
    right: 2.5em;
    bottom: 4em;
  }
  @media (min-width: 750px) {
    width: 4.5em;
    height: 4.5em;
    right: 4em;
    bottom: 4.5em;
  }
  @media (min-width: 1024px) {
    width: 5em;
    height: 5em;
    right: 4.5em;
    bottom: 5em;
  }

  .marker-add {
    width: 80%;
    margin: 10%;
  }
}
</style>
