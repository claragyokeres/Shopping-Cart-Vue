import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addItem(state, product) {
      state.products.push(product)
    }
  },
  actions: {
    addItem({ commit, state }, product) {
      commit('addItem', product)
    }
  },
  modules: {
  }
})
