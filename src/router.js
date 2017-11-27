import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Employees from './Employees.vue'
import Message from './Message.vue'
import MessageSent from './MessageSent.vue'
import JqueryTest from './JqueryTest.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {path: 'employees', alias: '/', name: 'employees', component: Employees},
      {path: 'message', name: 'message', component: Message},
      {path: 'message-sent', name: 'message.sent', component: MessageSent},
      {path: 'jquery-test', name: 'jqueryTest', component:  JqueryTest},
      {path: '*', redirect: '/'}
    ]
})
