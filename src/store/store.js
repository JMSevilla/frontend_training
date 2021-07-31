import Vue from 'vue'
import Vuex from 'vuex'
import http from './server'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registerObj: {
      responseData: ''
    },
    loginObj: {
      responseData: []
    },
    usersfirstname : '',
    userslastname : ''
  },
  getters: {
    getresponseregister: (state) => {
      return state.registerObj.responseData
    },
    getresponselogin: (state) => {
      return state.loginObj.responseData
    },
  },
  mutations: {
    mutate_register: (state, data) => {
      state.registerObj.responseData = data
    },
    mutate_login: (state, data) => {
      state.loginObj.responseData = data
    }
  },
  actions: {
    actions_register({commit}, {object}){
      return new Promise((resolve, reject) => {
        var data = new FormData();
        data.append("firstname", object.firstname)
        data.append("lastname", object.lastname)
        data.append("email", object.email)
        data.append("password", object.password)
        data.append("istype", "0")
        http.post(`/api/register-user/register`, data)
        .then(response => {
          resolve(commit(`mutate_register`, response.data))
        }, error => {
          reject(error)
        })
      })
    },
    actions_login({commit}, {object}) {
      return new Promise((resolve, reject) => {
        http.get(`/api/register-user/login?email=${object.email}&password=${object.password}`)
        .then(response => {
          resolve(commit(`mutate_login`, response.data))
        }, error => {reject(error)})
      })
    }
  },
  modules: {
  }
})
