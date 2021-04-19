import COMMON from '../../../colony-vue/src/js/common'
import 제주도 from './제주도'
import IT서비스본부 from './IT서비스본부'

const 찌니 = {
  mapOptions: {
    lat: 37.873785,
    lng: 127.742249,
    zoom: 19,
    zoomControl: false,
    naverMarker: null,
  },
  markers: [
    {
      id: COMMON.UUID(),
      lat: 37.873785,
      lng: 127.742590,
      title: '새마을금고',
      contents: '제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는 자를 임명한다.',
      createtime: '2020-05-13 20:00',
      photos: [],
      naverMarker: null,
    },
    {
      id: COMMON.UUID(),
      lat: 37.873785,
      lng: 127.741249,
      title: '3POP',
      contents: '국가는 평생교육을 진흥하여야 한다. 대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다.',
      createtime: '2020-05-13 20:00',
      photos: [],
      naverMarker: null,
    },
    {
      id: COMMON.UUID(),
      lat: 37.874050,
      lng: 127.743100,
      title: 'YOON',
      contents: '농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다.',
      createtime: '2020-05-13 20:00',
      photos: [],
      naverMarker: null,
    },
    {
      id: COMMON.UUID(),
      lat: 37.874000,
      lng: 127.745000,
      title: '강원대학교 병원',
      contents: '사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.',
      createtime: '2020-05-13 20:00',
      photos: [],
      naverMarker: null,
    },
    {
      id: COMMON.UUID(),
      lat: 37.8686506,
      lng: 127.7499379,
      title: '찌니 공간',
      contents: '대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다. 제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.',
      createtime: '2020-05-13 20:00',
      photos: [],
      naverMarker: null,
    },
  ]
}

const Datas = {
  찌니,
  IT서비스본부,
  제주도
}

export default Datas
