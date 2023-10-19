<template>
  <div id="app">
    <User />
    <Curso />

    <div>
      <h2>actionUpdateAcao</h2>
      {{ $store.state.acao }}
    </div>
  </div>
</template>
<script>
import User from '@/components/UserComponent.vue';
import Curso from '@/components/CursoComponent.vue';

export default {
  components: {
    User,
    Curso,
  },
  created() {
    // Quando minha aplicação for criada vou disparar minha Action;
    this.$store.dispatch('actionUpdateAcao');
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
