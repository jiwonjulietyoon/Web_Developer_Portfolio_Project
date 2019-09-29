import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/vuex/store';
import vuetify from './plugins/vuetify';
import 'expose-loader?$!expose-loader?jQuery!jquery';
window.$ = window.jQuery = require("jquery");

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
