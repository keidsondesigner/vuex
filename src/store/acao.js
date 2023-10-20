export default {
  namespaced: true,
  state: {
    acao: null,
  },
  mutations: {
    UPDATE_ACAO(state, payload) {
      state.acao = payload;
    },
  },
  actions: {
    actionUpdateAcao(context) {
      fetch('https://api.iex.cloud/v1/data/CORE/QUOTE/aapl?token=pk_b066253362b549bca82a8a0ecb4028e5')
        .then((response) => response.json())
        .then((response) => {
          context.commit('UPDATE_ACAO', response);
        });
    },
  },
};
