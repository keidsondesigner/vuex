import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'Arthur',
    aulasCompletas: 10,
  },
  getters: {
  },
  mutations: {
    changeUser(state) {
      state.user = 'Ana';
    },
    completarAulas(state) {
      state.aulasCompletas += 1;
    },
    voltarAulas(state) {
      state.aulasCompletas -= 1;
    },
  },
  actions: {
  },
  modules: {
  },
});
