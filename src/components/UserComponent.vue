<template>
  <div>
    <h1>User Aluno</h1>
    <p>{{ aulasCompletas }}</p>
    <!-- sem mapState
      <p>{{ $store.state.aulasCompletas }}</p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserComponent',
  components: {},
  computed: {
    ...mapState(['aulasCompletas']),
  },
};
</script>

<style lang="scss" scoped></style>
