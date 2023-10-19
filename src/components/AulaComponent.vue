<template>
  <div>
    <h1>Aula</h1>
    <input placeholder="Digite aqui" v-model="newUser">
    <button @click="handleClickChangeUser">Mudar nome user</button>
    <p>{{ user }}</p>

    <br>
    <br>

    <button @click="handleClickNextLesson">Completar aula</button>
    <button @click="handleClickPrevLesson">voltar aula</button>
    <p>{{ completedLessons }}</p>

    <br>
    <br>

    <ul>
      <li
        class="aulas"
        v-for="item in aulas" :key="item.nome"
      >
        <p>
          {{ item.nome }} | {{ item.duracao }}
        </p>
        <button @click="handleClickCompletarAula(item)">
          Completar aula
        </button>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AulaComponent',
  data() {
    return {
      newUser: '',
      aulas: [
        {
          nome: 'HTML e CSS',
          duracao: 15,
        },
        {
          nome: 'Javascript',
          duracao: 20,
        },
        {
          nome: 'VueJS',
          duracao: 30,
        },
      ],
    };
  },
  computed: {
    ...mapState(['user', 'completedLessons']),
  },
  methods: {
    ...mapMutations(['CHANGE_USER', 'PREV_LESSON', 'NEXT_LESSON', 'COMPLETAR_AULA']),
    handleClickChangeUser() {
      // o segundo arqgumento é o meu payload;

      this.CHANGE_USER(this.newUser);

      // com o mapMutations acesso atravéz do "this"
      // commit é usado para ativar a mutação;
      // this.$store.commit('changeUser', this.newUser);
    },
    handleClickPrevLesson() {
      this.PREV_LESSON();
      // com o mapMutations acesso atravéz do "this"
      // commit é usado para ativar a mutação;
      // this.$store.commit('voltarAulas');
    },
    handleClickNextLesson() {
      this.NEXT_LESSON();
      // this.$store.commit('completarAulas');
      // com o mapMutations acesso atravéz do "this"
    },
    handleClickCompletarAula(item) {
      this.COMPLETAR_AULA(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.aulas {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

</style>
