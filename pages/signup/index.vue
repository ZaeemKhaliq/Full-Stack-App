<template>
  <section class="signup-root-container">
    <Signup />
  </section>
</template>

<script>
import Signup from "../../components/Signup.vue";

export default {
  components: {
    Signup
  }
};
</script>

<style lang="scss">
.signup-root-container {
  margin: 2rem 0;
}
</style>
