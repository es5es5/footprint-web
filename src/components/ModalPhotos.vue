<template>
  <Modal :id="'ModalPhotos'">
    <template slot="modalTitle">
      {{ mixinSelectedMarker.title }}
    </template>
    <template slot="modalBody">
      <div class="photo_wrap" v-if="photoInit">
        <div v-for="(item, index) in urlList" :key="index" class="image">
          <img :src="item" :alt="''">
        </div>
      </div>
    </template>
    <div slot="modalActions">
      <p v-html="mixinSelectedMarker.contents"></p>
      <div v-if="mixinDebug">
        <p>lat: {{ mixinSelectedMarker.lat }}</p>
        <p>lng: {{ mixinSelectedMarker.lng }}</p>
      </div>
    </div>
  </Modal>
</template>

<script>
import {// storageService
} from '@/plugins/fbase'

export default {
  name: 'ModalPhotos',
  mounted () {
    this.photoURL = []
    this.setPhotosURL()
  },
  computed: {
    _VUE_APP_STORAGE_BUCKET () { return process.env.VUE_APP_STORAGE_BUCKET }
  },
  data () {
    return {
      photoInit: false,
      urlList: [],
    }
  },
  props: {
  },
  methods: {
    setPhotosURL () {
      this.mixinSelectedMarker.photos.forEach(photo => {
        this.urlList.push(this.getPhotoURL(photo))
      })
      this.$nextTick(() => { this.photoInit = true })
    },
    getPhotoURL (fileName) {
      const firebase = 'https://firebasestorage.googleapis.com/v0/b/'
      const encode = 'photos' + '%2F' + encodeURI(this.mixinUser.schema) + '%2F' + encodeURI(fileName)
      const alt = '?alt=media'
      const token = '&token='
      const photoURLArray = [
        firebase,
        this._VUE_APP_STORAGE_BUCKET,
        '/o/',
        encode,
        alt,
        token,
      ]
      const photoURL = photoURLArray.join('')
      return photoURL
    }
  }
}
</script>

<style lang="scss" scoped>
.photo_wrap {
  max-height: calc(100vh - 280px);
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
