import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/vuex/store';

// Vuetify
import vuetify from './plugins/vuetify';

// jQuery
import 'expose-loader?$!expose-loader?jQuery!jquery';
window.$ = window.jQuery = require("jquery");

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Vue Page Transition
import VuePageTransition from 'vue-page-transition';

Vue.config.productionTip = false;

Vue.use(VuePageTransition);

new Vue({
  router,
  store,
  vuetify,
  created() {
    AOS.init({
      once: true
    });
  },
  render: h => h(App)
}).$mount('#app');
