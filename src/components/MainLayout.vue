<template>
  <div>
    <Header />
    <MultiSelect
      v-if="selectOptions"
      :id="`paymentMeansCodeCard`"
      v-model="multiForm.dataObject"
      :preselectFirst="true"
      :hideSelected="true"
      :options="selectOptions"
      label="title"
      trackBy="id"
      :multiple="isMultiple"
      dataKey="id"
      :dataValue.sync="multiForm.dataValue"
      @callback="countCallback"
    />
    <p>multiForm.dataValue: {{ multiForm.dataValue }}</p>
    <p>multiForm.dataObject: {{ multiForm.dataObject }}</p>
    <p>callback: {{ callback }}</p>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'MainLayout',
  components: {
    Header
  },
  data () {
    return {
      isMultiple: false,
      multiForm: {
        dataValue: '2',
      },
      selectOptions: [{
        title: 'Hi',
        id: '1'
      }, {
        title: 'Bye',
        id: '2'
      }],
      callback: 0
    }
  },
  methods: {
    countCallback () {
      this.callback++
    }
  }
}
</script>

<style>

</style>
