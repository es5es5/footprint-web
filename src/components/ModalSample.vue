<template>
  <Modal :id="'ModalSample'">
    <template slot="modalTitle">
      {{ mixinSelectedMarker.title }}
    </template>
    <template slot="modalBody">
      <!-- <img :src="require('@/assets/photos/시티빌딩001.jpg')" alt=""> -->
      <!-- <p v-html="mixinSelectedMarker.contents"></p> -->
      <div class="photo_wrap">
        <div v-for="(item, index) in photoURL" :key="index" class="image">
          <img :src="item" :alt="''">
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
import {
  storageService
} from '@/plugins/fbase'

export default {
  name: 'ModalSample',
  mounted () {
    this.setPhotosURL()
  },
  data () {
    return {
      photoURL: []
    }
  },
  props: {
  },
  methods: {
    async setPhotosURL () {
      this.mixinSelectedMarker.photos.forEach(photo => {
        this.getPhotoURL(photo).then(url => {
          this.photoURL.push(url)
        })
      })
    },
    getPhotoURL (fileName) {
      return new Promise((resolve, reject) => {
        storageService
          .child(`photos/${fileName}`)
          .getDownloadURL()
          .then(url => {
            return resolve(url)
          }).catch(error => {
            return reject(error)
          })
      })
    }
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
