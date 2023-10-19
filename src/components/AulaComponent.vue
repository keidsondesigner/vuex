<template>
  <div>
    <h1>Aula</h1>
    <button @click="handleClick">Mudar nome user</button>
    <p>{{ user }}</p>

    <br>
    <br>

    <button @click="completarAula">Completar aula</button>
    <button @click="voltarAulas">voltar aula</button>
    <p>{{ aulasCompletas }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AulaComponent',
  computed: {
    ...mapState(['user', 'aulasCompletas']),
  },
  methods: {
    handleClick() {
      // commit é usado para ativar a mutação;
      this.$store.commit('changeUser');
    },
    completarAula() {
      this.$store.commit('completarAulas');
    },
    voltarAulas() {
      this.$store.commit('voltarAulas');
    },
  },
};
</script>

<style lang="scss" scoped></style>
