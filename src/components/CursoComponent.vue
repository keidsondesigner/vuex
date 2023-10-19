<template>
  <div>
    <h1>Curso</h1>
    <Aula />
  </div>
</template>

<script>
import Aula from '@/components/AulaComponent.vue';

export default {
  name: 'CursoComponent',
  components: {
    Aula,
  },
};
</script>

<style lang="scss" scoped></style>
