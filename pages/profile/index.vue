<template>
  <section class="profile-root-container">
    <Profile />
  </section>
</template>

<script>
import Profile from "../../components/Profile.vue";

export default {
  components: {
    Profile
  }
};
</script>

<style lang="scss">
.profile-root-container {
  margin: 2rem 0;
}
</style>
