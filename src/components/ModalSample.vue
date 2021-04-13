<template>
  <Modal :id="'ModalSample'">
    <template slot="modalTitle">
      {{ mixinSelectedMarker.title }}
    </template>
    <template slot="modalBody">
      <!-- <img :src="require('@/assets/photos/시티빌딩001.jpg')" alt=""> -->
      <!-- <p v-html="mixinSelectedMarker.contents"></p> -->
      <div class="photo_wrap">
        <div v-for="(item, index) in mixinSelectedMarker.photos" :key="index" class="image">
          <img :src="item" alt="">
        </div>
      </div>
    </template>
    <div slot="modalActions">
      <div v-if="mixinDebug">
        <p>lat: {{ mixinSelectedMarker.lat }}</p>
        <p>lng: {{ mixinSelectedMarker.lng }}</p>
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'ModalSample',
  props: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.photo_wrap {
  max-height: calc(100vh - 200px);
  overflow-y: scroll;
}
.image {
  width: 100%;
  margin-bottom: .5rem;
  img {
    width: 100%;
  }
}
</style>
