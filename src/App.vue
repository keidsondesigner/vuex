<template>
  <div id="app">
    <User />
    <Curso />

    <div>
      <h2>actionUpdateAcao</h2>
      {{ $store.state.acao }}
    </div>

    <br>

    <div>
      <h2>Livros</h2>
      <ul>
        <li v-for="livro in $store.state.livros" :key="livro.name">
          <p>
            {{ livro.name }}
          </p>
        </li>
      </ul>
    </div>

    <br>

    <div>
      <h2>Livros Lidos</h2>
      <!-- $store.state.livros
        posso usar de uma formar mais simples com mapGetters no computed; -->
      <ul>
        <li v-for="livro in livrosLidos" :key="livro.name">
          <p>
            {{ livro.name }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

import User from '@/components/UserComponent.vue';
import Curso from '@/components/CursoComponent.vue';

export default {
  components: {
    User,
    Curso,
  },
  computed: {
    // posso usar de uma formar mais simples com mapGetters;
    ...mapGetters(['livrosLidos']),
  },
  created() {
    // Quando minha aplicação for criada vou disparar minha Action;
    // disparado o método actionUpdateAcao do "módulo acao";
    console.log(this.$store);
    this.$store.dispatch('acao/actionUpdateAcao');
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style-type: none;
}
</style>
