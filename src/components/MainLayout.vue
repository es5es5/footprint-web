<template>
  <div>
    <Header />
    <ModalGroup />
    <Maps />
    <CircleButton />
  </div>
</template>

<script>
import Header from './Header'
import ModalGroup from './ModalGroup'
import Maps from './Maps'
import CircleButton from './element/CircleButton'

export default {
  name: 'MainLayout',
  mounted () {
  },
  components: {
    Header,
    ModalGroup,
    Maps,
    CircleButton,
  },
  computed: {
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
