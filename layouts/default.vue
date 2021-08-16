<template>
  <div class="root-container">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import AuthService from "../services/auth.service";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  watch: {
    $route(to, from) {
      console.log("Route changed!");
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        const decodedJwt = this.parseJwt(user.accessToken);

        if (decodedJwt.exp * 1000 < Date.now()) {
          this.logOut();
        }
      }
    }
  },
  methods: {
    parseJwt(token) {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    },
    logOut() {
      console.log("Logout method!");
      AuthService.logout();
      window.location.reload();
    }
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
