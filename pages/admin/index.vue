<template>
  <section class="admin-board-root-container">
    <p>{{ content }}</p>
  </section>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  data() {
    return {
      content: ""
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style lang="scss">
.admin-board-root-container {
  margin: 2rem 0;
  text-align: center;
}
</style>
