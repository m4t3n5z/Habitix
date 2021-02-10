import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";

// import store from "./store";
//import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios"

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,

  // store,
  // vuetify,
  axios,

  vuetify,
  render: h => h(App)
}).$mount('#app')
