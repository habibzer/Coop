import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

window.axios = axios.create({
  baseURL : 'https://tools.sopress.net/iut/coop/api/',
  headers:{'Authorization': '7a35f161765bb57a7e047e59faf056e8084c8ba6'}
});
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();


/*window.axios = axios.create({
  baseURL: 'http://coop.api.netlor.fr/api',
  params : {
    token : '
  },
  headers: { Authorization: 'API_KEY' }
});*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
