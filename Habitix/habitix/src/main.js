import Vue from 'vue'
import './plugins/axios'
import router from "./router/index.js";
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
