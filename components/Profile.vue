<template>
  <div class="profile-container">
    <div class="profile-heading">
      <h1>PROFILE DETAILS</h1>
    </div>
    <div class="profile-details" v-if="currentUser != null">
      <h3>USERNAME</h3>
      <p>{{ currentUser.username }}</p>
      <h3>ACCESS TOKEN</h3>
      <p>
        {{ currentUser.accessToken.substring(0, 20) }} ... {{ " " }}
        {{
          currentUser.accessToken.substr(currentUser.accessToken.length - 20)
        }}
      </p>
      <h3>EMAIL</h3>
      <p>{{ currentUser.email }}</p>
      <h3>ID</h3>
      <p>{{ currentUser.id }}</p>
      <h3>Authorities</h3>
      <ul>
        <li v-for="(role, index) in currentUser.roles" :key="index">
          {{ role }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/auth.service";

export default {
  data() {
    return {
      currentUser: null
    };
  },
  mounted() {
    this.currentUser = AuthService.getCurrentUser();
    console.log(this.currentUser);
    if (this.currentUser == null) {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
.profile-container {
  width: 90%;
  margin: 0 auto;
}

.profile-heading {
  text-align: center;
  h1 {
    font-weight: 700;
  }
}

.profile-details {
  margin: 2rem 0;
  border: 1px solid black;
  padding: 0 2rem;

  h3 {
    font-weight: 700;
    margin-top: 1.5rem;
  }
}
</style>
