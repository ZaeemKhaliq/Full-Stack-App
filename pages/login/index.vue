<template>
  <section class="login-root-container">
    <Login />
  </section>
</template>

<script>
import Login from "../../components/Login.vue";

export default {
  components: {
    Login
  }
};
</script>

<style lang="scss">
.login-root-container {
  margin: 2rem 0;
}
</style>
