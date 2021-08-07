<template>
  <div class="root-container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
</style>
