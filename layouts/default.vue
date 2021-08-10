<template>
  <div class="root-container">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  background-color: #fcfcfc;
}

.root-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
