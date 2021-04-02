<template>
  <div>
    <Header />
    <MultiSelect
      v-if="selectOptions"
      id="paymentMeansCodeCard"
      v-model="multiForm.dataObject"
      :preselectFirst="true"
      :hideSelected="true"
      :closeOnSelect="!isMultiple"
      :options="selectOptions"
      label="name"
      trackBy="id"
      :multiple="isMultiple"
      dataKey="id"
      :dataValue.sync="multiForm.dataValue"
      @callback="countCallback"
    />
    <p>isMultiple: {{ isMultiple }}</p>
    <p>multiForm.dataValue: {{ multiForm.dataValue }}</p>
    <p>multiForm.dataObject: <pre>{{ multiForm.dataObject }}</pre></p>
    <p>callback: {{ callback }}</p>
    <p>lastCallbackValue: <pre>{{ lastCallbackValue }}</pre></p>
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
        // dataValue: ['1', '2'],
        dataValue: '3',
      },
      selectOptions: [{
        title: 'Hi',
        name: '김루이',
        id: '1'
      }, {
        title: 'Bye',
        name: 'Vue.js',
        id: '2'
      }, {
        title: 'Hello',
        name: 'React',
        id: '3'
      }, {
        title: 'Good',
        name: 'Svelte',
        id: '4'
      }],
      callback: 0,
      lastCallbackValue: null
    }
  },
  methods: {
    countCallback (value, id) {
      console.log(value, id)
      this.callback++
      this.lastCallbackValue = value
    }
  }
}
</script>

<style>

</style>
