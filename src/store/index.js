import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'Arthur',
    completedLessons: 10,
    aulasCompletas: [],
  },
  getters: {
  },
  mutations: {
    CHANGE_USER(state, payload) {
      state.user = payload;
    },
    PREV_LESSON(state) {
      state.completedLessons += 1;
    },
    NEXT_LESSON(state) {
      state.completedLessons -= 1;
    },
    COMPLETAR_AULA(state, payload) {
      state.aulasCompletas.push(payload);
    },
  },
  actions: {
  },
  modules: {
  },
});
