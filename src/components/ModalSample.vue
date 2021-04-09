<template>
  <tm-modal :id="'ModalOutCallMobile'" class="outCall">
    <template slot="modalTitle">
      상담 전화
    </template>
    <template slot="modalBody">
      <div class="call_wrap">
        <p class="number">{{ mixinOutCallData.phoneNumber | telFilter }} 과 통화중 <strong class="time">01:22</strong></p>
        <button type="button" class="btn success" @click="sendSimpleOp('mobile1', '전화받기')" v-if="mixinDeviceCondition['mobile1'] === DEVICE_CONDITION_CODE['링']">받기</button>
        <button type="button" class="btn error" @click="sendSimpleOp('mobile1', '전화끊기')" v-else-if="mixinDeviceCondition['mobile1'] === DEVICE_CONDITION_CODE['통화중']">끊기</button>
        <button type="button" class="btn warning" disabled v-else-if="mixinDeviceCondition['mobile1'] === DEVICE_CONDITION_CODE['대기']">{{ this.USER_CONDITION_CODE[mixinUserCondition['mobile1']] }}</button>
      </div>
      <div class="modalForm_wrap">
        <form action="" class="form">
          <fieldset>
            <p class="subTitle">DB정보</p>
            <div class="modalRow">
              <label for="">연락처</label>
              <input type="text" :value="mixinOutCallData.phoneNumber | telFilter" disabled>
            </div>
            <div class="modalRow">
              <label for="">유입사이트</label>
              <select name="" id=""></select>
            </div>
            <div class="modalRow">
              <label for="">유입사이트</label>
              <select name="" id=""></select>
            </div>
            <div class="modalRow">
              <label for="">고객명</label>
              <input type="text">
            </div>
            <div class="modalRow">
              <label for="">정보동의</label>
              <input type="text">
            </div>
            <div class="modalRow">
              <label for="">생년월일</label>
              <input type="text">
            </div>
          </fieldset>
        </form>
      </div>
    </template>
    <div slot="modalActions">
      <div class="modalForm_wrap">
        <form action="" class="form">
          <fieldset>
            <div class="modalRow row-3">
              <div class="column column-2">
                <label for="">기존담당자</label>
                <select name="" id="">
                  <option value="">김루이</option>
                </select>
              </div>
              <div class="column" style="text-align: right;">
                <button type="button" class="btn" @click="complete('mobile1', 'ModalOutCallMobile')" :disabled="mixinUserCondition['mobile1'] !== USER_CONDITION_CODE['후처리']">후처리 완료</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </tm-modal>
</template>

<script>
import MixinCall from '../mixinCall'

export default {
  name: 'ModalOutCallMobile',
  mixins: [MixinCall],
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.call_wrap {
  text-align: center;
  padding: 20px 0 30px 0;
  border-bottom: 1px solid $border;

  .number {
    font-size: 13px;
    line-height: 15px;
    vertical-align: middle;
    color: #444;
    margin-bottom: 10px;
  }

  .time {
    font-weight: bold;
    vertical-align: middle;
    font-size: 15px;
  }
}

.modalForm_wrap {
  padding: 10px 0;

  .modalRow {
    margin-bottom: 10px;
  }
}
</style>
