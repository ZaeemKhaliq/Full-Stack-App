<template>
  <section class="header-container">
    <div class="header-division">
      <div class="title-container">
        <nuxt-link to="/">
          <h1>FULL STACK APP</h1>
        </nuxt-link>
      </div>
      <div class="nav-links-container">
        <div class="tutorials-link">
          <nuxt-link to="/tutorials" class="nav-link" exact>
            <div>
              <p>SHOW TUTORIALS</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/add-tutorial" class="nav-link" exact>
            <div>
              <p>ADD TUTORIAL</p>
            </div>
          </nuxt-link>
          <nuxt-link
            to="/user"
            class="nav-link"
            exact
            v-if="currentUser != null"
          >
            <div>
              <p>USER</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/mod" class="nav-link" exact v-if="showModeratorBoard">
            <div>
              <p>MODERATOR</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/admin" class="nav-link" exact v-if="showAdminBoard">
            <div>
              <p>ADMIN</p>
            </div>
          </nuxt-link>
        </div>
        <div class="auth-links">
          <nuxt-link
            to="/login"
            class="nav-link"
            exact
            v-if="currentUser == null"
          >
            <div>
              <p>LOGIN</p>
            </div>
          </nuxt-link>
          <nuxt-link
            to="/signup"
            class="nav-link"
            exact
            v-if="currentUser == null"
          >
            <div>
              <p>SIGNUP</p>
            </div>
          </nuxt-link>
          <nuxt-link
            to="/profile"
            class="nav-link"
            exact
            v-if="currentUser != null"
          >
            <div>
              <p>PROFILE</p>
            </div>
          </nuxt-link>
          <div class="nav-link" v-if="currentUser != null" @click="logOut">
            <div>
              <p>LOGOUT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AuthService from "../services/auth.service";

export default {
  data() {
    return {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: null
    };
  },
  mounted() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.currentUser = user;
      this.showModeratorBoard = user.roles.includes("ROLE_MODERATOR");
      this.showAdminBoard = user.roles.includes("ROLE_ADMIN");
    }
  },
  methods: {
    logOut() {
      console.log("Logout method!");
      AuthService.logout();
      window.location.reload();
    }
  }
};
</script>

<style lang="scss">
.header-container {
  height: 3.5rem;
  background-color: $primary-color;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
}

.header-division {
  display: flex;

  height: 100%;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.nav-links-container {
  display: flex;

  width: 80%;
  justify-content: space-between;

  a.nuxt-link-active {
    background-color: $primary-hover-color;
  }
}

.tutorials-link,
.auth-links {
  display: flex;
}

.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;
  padding: 0 1rem;
  text-decoration: none;
  color: white;
  margin: 0 0.2rem;

  &:hover {
    background-color: $primary-hover-color;
  }

  p {
    margin: 0;
  }
}

@media screen and (max-width: 1100px) {
  .header-container {
    h1 {
      font-size: 1rem;
    }
  }

  .nav-link {
    p {
      font-size: 0.8rem;
    }
  }
}

@media screen and (max-width: 900px) {
  .nav-link {
    p {
      font-size: 0.6rem;
    }
  }
}

@media screen and (max-width: 800px) {
  .header-container {
    border-bottom: 1px solid white;
  }
}

@media screen and (max-width: 700px) {
  .header-container {
    height: 2.5rem;
  }
  .nav-link {
    padding: 0 0.5rem;

    p {
      font-size: 0.5rem;
    }
  }

  .header-container {
    h1 {
      font-size: 0.8rem;
    }
  }
}

@media screen and (max-width: 600px) {
  .header-container {
    height: auto;

    h1 {
      font-size: 1.5rem;
    }
  }
  .header-division {
    flex-direction: column;
  }
  .title-container {
    width: 100%;
    padding: 0;
    height: 3rem;
    border-bottom: 1px solid white;
  }
  .nav-links-container {
    margin: 0;
    height: 2rem;
    justify-content: space-between;
    width: 100%;
  }
}

@media screen and (max-width: 420px) {
  .nav-links-container {
    flex-direction: column;
    height: 3rem;
  }
  .tutorials-link,
  .auth-links {
    height: 50%;
    justify-content: center;
  }

  .auth-links {
    border-bottom: 1px solid white;
  }
}
</style>
