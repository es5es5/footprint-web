<template>
  <div id="circle">
    <img src="@/assets/images/icons/marker-add.svg" class="marker-add" alt="marker-add">
  </div>
</template>

<script>
export default {
  name: 'Circle',
}
</script>

<style lang="scss" scoped>
#circle {
}

.marker-add {
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
}
</style>
