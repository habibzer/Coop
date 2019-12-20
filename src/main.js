import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

/*window.axios = axios.create({
  baseURL: 'http://coop.api.netlor.fr/api',
  params : {
    token : '7a35f161765bb57a7e047e59faf056e8084c8ba6'
  },
  headers: { Authorization: 'API_KEY' }
});*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
