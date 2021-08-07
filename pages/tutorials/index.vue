<template>
  <section class="show-tutorials-root-container">
    <AllTutorials />
  </section>
</template>

<script>
import AllTutorials from "../../components/AllTutorials.vue";

export default {
  components: {
    AllTutorials
  }
};
</script>

<style lang="scss">
.show-tutorials-root-container {
  margin: 2rem 0;
}
</style>
