<template>
  <div id="login">
    <div class="polaroid_container" v-if="!loading">
      <!-- <div class="polaroid_wrap" @click="socialLogin('google')"> -->
      <div class="polaroid_wrap" @click="openModal">
        <img src="@/assets/images/polaroid.svg" alt="polaroid" class="polaroid _1">
        <img src="@/assets/images/polaroid.svg" alt="polaroid" class="polaroid _2" v-if="!mixinIsMobile">
      </div>
    </div>
    <p v-if="loading" class="loading">Now Loading...</p>
    <ModalRequest />
  </div>
</template>

<script>
import ModalRequest from './ModalRequest'

export default {
  name: 'Login',
  components: {
    ModalRequest,
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    openModal () {
      this.$modal.show('ModalRequest')
    },
  }
}
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  height: 100vh;
  background-color: rgba($success, .1);

  font-size: 20px;

  @media (max-width: 1024px) { font-size: 18px; }
  @media (max-width: 750px) { font-size: 16px; }
  @media (max-width: 500px) { font-size: 12px; }
}

.polaroid_container {
  @include clearfix;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .polaroid {
    transition: all .5s;
    width: 18em;
    height: 21em;
    opacity: .8;

    &._1 {
      width: 18em;
      height: 21em;
      transform: rotate(-25deg);
    }

    &._2 {
      width: 14em;
      height: 16em;
      transform: rotate(5deg);
    }

    &:hover {
      cursor: pointer;
      opacity: 1;

      &._1 {
        transform: rotate(15deg) translate(0, -3em);
      }

      &._2 {
        transform: rotate(-5deg) translate(0, -2em);
      }
    }
  }
}
</style>
