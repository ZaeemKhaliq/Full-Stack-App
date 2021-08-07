<template>
  <section class="add-tutorial-root-container">
    <AddTutorial />
  </section>
</template>

<script>
import AddTutorial from "../../components/AddTutorial.vue";

export default {
  components: {
    AddTutorial
  }
};
</script>

<style lang="scss">
.add-tutorial-root-container {
  margin: 2rem 0;
}
</style>
