import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'Arthur',
    completedLessons: 10,
    aulasCompletas: [],
    acao: null,
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

    UPDATE_ACAO(state, payload) {
      state.acao = payload;
    },
  },
  actions: {
    completarAula(context, payload) {
      console.log(context);
      context.commit('COMPLETAR_AULA', payload);
    },

    actionUpdateAcao(context) {
      fetch('https://api.iex.cloud/v1/data/CORE/QUOTE/aapl?token=pk_b066253362b549bca82a8a0ecb4028e5')
        .then((response) => response.json())
        .then((response) => {
          context.commit('UPDATE_ACAO', response);
        });
    },
  },
  modules: {
  },
});
