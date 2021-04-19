<template>
  <Modal :id="'ModalPhotos'">
    <template slot="modalTitle">
      {{ mixinSelectedMarker.title }}
    </template>
    <template slot="modalBody">
      <!-- <img :src="require('@/assets/photos/시티빌딩001.jpg')" alt=""> -->
      <!-- <p v-html="mixinSelectedMarker.contents"></p> -->
      <div class="photo_wrap" v-if="photoInit">
        <div v-for="(item, index) in urlList" :key="index" class="image">
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
import {// storageService
} from '@/plugins/fbase'

export default {
  name: 'ModalPhotos',
  mounted () {
    this.photoURL = []
    this.setPhotosURL()
    // this.getPhotoURL('시티빌딩001.jpg')
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
    // "https://firebasestorage.googleapis.com/v0/b/maps-9dc64.appspot.com/o/photos%2F%EB%A9%94%EA%B0%80%EB%B0%95%EC%8A%A4001.jpg?alt=media&token=16804161-bb4a-44f8-861e-b12edd06ff61"
    setPhotosURL () {
      this.mixinSelectedMarker.photos.forEach(photo => {
        this.urlList.push(this.getPhotoURL(photo))
      })
      this.$nextTick(() => {
        this.photoInit = true
      })
    },
    getPhotoURL (fileName) {
      const firebase = 'https://firebasestorage.googleapis.com/v0/b/'
      const encode = 'photos%2F' + encodeURI(fileName)
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
      console.log(photoURL)
      return photoURL
    }
    // async setPhotosURL () {
    //   this.mixinSelectedMarker.photos.forEach(photo => {
    //     this.getPhotoURL(photo).then(url => {
    //       this.photoURL.push(url)
    //     })
    //   })
    // },
    // getPhotoURL (fileName) {
    //   return new Promise((resolve, reject) => {
    //     storageService
    //       .child(`photos/${fileName}`)
    //       .getDownloadURL()
    //       .then(url => {
    //         return resolve(url)
    //       }).catch(error => {
    //         return reject(error)
    //       })
    //   })
    // }
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
