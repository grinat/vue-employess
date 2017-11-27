<template>
    <div class="message-sent">
      <p>Отправлено сообщение</p>
      <p>{{message.body}}</p>
    </div>
</template>

<script>
    export default {
        name: 'message-sent',
        title: 'Отправлено',
        computed: {
          message () {
            return this.$store.getters.readModel('message')
          }
        }
    }
</script>
