export default {
  install (Vue) {
    Vue.mixin({
      mounted () {
      },
      data () {
        return {
        }
      },
      computed: {
        mixinIsMobile () { return window.outerWidth < 750 },
        mixinDebug () { return process.env.VUE_APP_DEBUG === 'true' },

        mixinUser () { return this.$store.getters.getUser },
        mixinMap () { return this.$store.getters.getMap },
        mixinPosition () { return this.$store.getters.getPosition },
        mixinLatlng () { return this.$store.getters.getLatlng },
        mixinMarkers () { return this.$store.getters.getMarkers },
        mixinSelectedMarker () { return this.$store.getters.getSelectedMarker },
      },
      methods: {
        /**
         * 생년월일 포맷
         */
        $getBirthdayFormat (birthdayObject) {
          let value = birthdayObject.value.replace(/-/g, '')
          value = value.replace(/\D/gi, '')
          var result = value
          if (!result || isNaN(result)) {
            birthdayObject.value = ''
            return ''
          }

          if (value.length > 4) {
            result = value.substring(0, 4) + '-' + value.substring(4, 6) + '-' + value.substring(6, 8)
          }

          if (value.length > 9) {
            result = value.substring(0, 8)
          }

          return result
        },
        /**
         * 콤마 포맷
         */
        $getComma (CommaObject) {
          let value = CommaObject.value

          if (!value) { return '' }

          const patten = /[^\d,-]/g

          if (patten.test(value)) {
            value = value.replace(patten, '')
            CommaObject.value = value
            return value
          }

          if (value.substr(0, 1) === '-') {
            value = '-' + Number(value.replace(/[,-]/g, ''))
          } else {
            value = Number(value.replace(/[,-]/g, ''))
          }

          const result = value.toLocaleString('en').split('.')[0]
          return result
        },
      }
    })
  }
}
