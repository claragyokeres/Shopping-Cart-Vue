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
  getters: {
    count: state => {
      return state.products.length
    },
    totalSum: state => {
      return state.products.reduce((total, product) => (total + product.price), 0)
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
