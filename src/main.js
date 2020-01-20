import Vue from 'vue'
import App from './App.vue'
import VueX from 'vuex'
import router from './router'
import store from './store'
import axios from 'axios'
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


window.axios = axios.create({
  baseURL : 'https://tools.sopress.net/iut/coop/api/',
  headers:{'Authorization': '7a35f161765bb57a7e047e59faf056e8084c8ba6'}
});
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),

  beforeCreate(){
    window.axios.interceptors.request.use((config) => {
      if(this.$store.state.tokenSession){
        config.url+='?token='+this.$store.state.tokenSession;
      }
      return config
    }, error => {
      return console.log(error)
    })

  }
}).$mount('#app')
