import { createStore } from 'vuex'
import persistedState from 'vuex-persistedstate'
export default createStore({
  state: {
    token: '',
    menuinfo: {}
  },
  getters: {},
  mutations: {
    loginTo(state, data) {
      state.token = data
    },
    menuinfo(state, data) {
      state.menuinfo = data
    }
  },
  actions: {
    async menu({ commit }, data) {
      await commit('menuinfo', data)
    }
  },
  modules: {},
  plugins: [persistedState()]
})
