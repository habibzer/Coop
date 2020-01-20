import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vp = new VuexPersist({
  key:'store',
  storage:window.localStorage
});
Vue.use(Vuex);

export default new Vuex.Store({
  plugins:[vp.plugin],
  state: {
    membre: false,
    tokenSession: false
  },
  mutations: {
    setSession(state,data){
      state.tokenSession=data.token;
      state.membre=data.member;
    }
  },
  actions: {
  },
  modules: {
  }
})
