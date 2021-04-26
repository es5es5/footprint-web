<template>
  <div>
    <Header />
    <ModalGroup />
    <Maps
      v-if="
        mixinUser.schema &&
        mixinUser.schema !== '' &&
        ['제주도', 'IT서비스본부'].indexOf(mixinUser.schema) > -1 &&
        mixinUser.uid &&
        mixinUser.uid !== ''"
    />
    <p v-else class="notAllow">승인이 필요합니다 !</p>
    <CircleButton v-if="mixinDebug" />
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
.notAllow {
  padding-top: 10%;
  text-align: center;
  font-size: 2rem;
  color: $error;
}
</style>
