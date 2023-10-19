<template>
  <div id="app">
    <User />
    <Curso />
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
</style>
