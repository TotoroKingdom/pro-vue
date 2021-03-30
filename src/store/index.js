import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).username
    },
    empName: window.sessionStorage.getItem("empName"),
    userID: window.sessionStorage.getItem("userID"),
    routers:[],
  },
  mutations: {
    login (state, user) {
      state.user = user
      window.sessionStorage.setItem('user', JSON.stringify(user))
    },
    initRouters(state,data){
      state.routers=data
    }
  },
  actions: {
  },
  modules: {
  }
})
