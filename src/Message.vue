<template>
    <div class="message">
      <form @submit.prevent="sendMessage()">
        <div class="form-group">
          <input type="text" class="form-control" v-model="messageFormModel.from" required minlength=1 maxlength=100 placeholder="От кого">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" v-model="messageFormModel.body" required minlength=1 maxlength=100 placeholder="Сообщение">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Отправить</button>
        </div>
      </form>
    </div>
</template>

<script>
   const messageModel = () => {
     return {
       from: '',
       body: ''
     }
   }

    export default {
        name: 'message-sent',
        title: 'Отправлено',
        data () {
          return {
            messageFormModel: new messageModel
          }
        },
        methods: {
          sendMessage () {
            this.$store.dispatch('createModel', {
              type: 'message',
              data: this.messageFormModel
            }).then(() => {
              this.$router.push({ name: 'message.sent'})
            })
          }
        }
    }
</script>
