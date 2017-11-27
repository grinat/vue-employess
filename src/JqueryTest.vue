<template>
    <div class="info">
      <p>JQuery Test page</p>
      <input type="text" class="jq-selector-test-with-date-picker" v-model="selectedDate">
      <p>Selected date: {{selectedDate}}</p>
    </div>
</template>

<script>
    export default {
        name: 'jquery-test',
        title: 'JQuery test',
        data () {
          return {
            selectedDate: null
          }
        },
        mounted () {
          $('.jq-selector-test-with-date-picker').datepicker({
            dateFormat: 'dd.mm.yy',
            onSelect: (date) => this.selectedDate = date
          })
        }
    }
</script>
