import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  db: {}
}

const getters = {
  readModel: state => (type) => {
    return state.db[type] || null
  }
}

const actions = {
  createModel: (context, payload) => {
    context.commit('mutateModel', payload)
    Promise.resolve(payload)
  }
}

const mutations = {
  mutateModel: (state, payload) => {
    let {data, type} = payload
    state.db[type] = data
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
