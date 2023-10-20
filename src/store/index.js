import Vue from 'vue';
import Vuex from 'vuex';
import acao from '@/store/acao';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'Arthur',
    completedLessons: 10,
    aulasCompletas: [],
    livros: [
      {
        name: 'Senhor dos Aneis',
        lido: true,
      },
      {
        name: 'Exterminador do Futueo',
        lido: true,
      },
      {
        name: 'Caçadores',
        lido: false,
      },
      {
        name: 'Dragon Ball',
        lido: false,
      },
    ],
  },
  getters: {
    livrosLidos(state) {
      // Livros é um Array então vou usar o filter() para retornar os livros "lidos";
      return state.livros.filter((livro) => livro.lido);
    },
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
    completarAula(context, payload) {
      console.log(context);
      context.commit('COMPLETAR_AULA', payload);
    },
  },
  modules: {
    acao,
  },
});
