<template>
  <div id="slider">
    <Slide
      :isOpen="slideIsOpen"
      @openMenu="openMenu"
      @closeMenu="closeMenu"
      left
      :width="_width"
      noOverlay
      class="slider"
    >
    <div class="ul">
      <div v-for="index in 200" class="li" :key="index">{{ index }}</div>
      <br>
    </div>
    </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'Slider',
  components: {
    Slide
  },
  computed: {
    _width () {
      if (window.innerWidth > 1024) {
        return '500'
      } else if (window.innerWidth > 750) {
        return '400'
      } else {
        return '300'
      }
    }
  },
  watch: {
    '$route.path' () { this.closeMenu() }
  },
  data () {
    return {
      slideIsOpen: false
    }
  },
  methods: {
    openMenu () { this.slideIsOpen = true },
    closeMenu () { this.slideIsOpen = false },
    // logout () {
    //   authService.signOut()
    //   this.$store.commit('setUser', null)
    //   this.$router.push({ name: 'Login' })
    // },
    goSlideRouter (name) {
      this.slideIsOpen = false
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss">
.ul {
  height: 500px;
}

.li {
  display: block;
}
</style>
