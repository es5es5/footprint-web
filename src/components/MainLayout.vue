<template>
  <div>
    <Header />
    <ModalGroup />
    <Maps />
  </div>
</template>

<script>
import Header from './Header'
import ModalGroup from './ModalGroup'
import Maps from './Maps'

export default {
  name: 'MainLayout',
  mounted () {
  },
  components: {
    Header,
    ModalGroup,
    Maps,
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
