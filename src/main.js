import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// JQuery UI
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'

// Set title from components in document.title
import titleMixin from './mixins/titleMixin'
Vue.mixin(titleMixin)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
