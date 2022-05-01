import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
  userId:"",
  userName:"",
  access_token:"",

}
const getters = {}
const mutations = {
  
}
const actions = {}
const modules = {}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: modules,
})
