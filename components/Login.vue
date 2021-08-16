<template>
  <div class="login-container">
    <div class="login-form-container">
      <div class="login-form-container-heading">
        <h2>LOGIN</h2>
      </div>
      <div class="login-form-division">
        <form class="login-form" @submit.prevent="handleLogin">
          <label>Username</label>
          <br />
          <input
            type="text"
            class="input-username"
            placeholder="Enter username..."
            v-model="credentials.username"
            required
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            class="input-password"
            placeholder="Enter password..."
            v-model="credentials.password"
            required
          />
          <br />
          <br />
          <p style="color:red;">{{ message }}</p>
          <div class="login-button-container">
            <button type="submit" class="login-button">
              {{ !loading ? "LOGIN" : null }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/auth.service";

export default {
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      },
      loading: false,
      message: ""
    };
  },
  mounted() {
    const user = AuthService.getCurrentUser();
    if (user != null) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin() {
      this.message = "";
      this.loading = true;

      AuthService.login(
        this.credentials.username,
        this.credentials.password
      ).then(
        () => {
          this.$router.push("/");
          window.location.reload();
          this.loading = false;
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.loading = false;
          this.message = resMessage;
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
$my-font: "Open Sans", sans-serif;

.login-form-container {
  width: 35%;
  margin: 0 auto;
  padding: 2rem 0;
  box-shadow: inset 0px 0px 5px 0px black;
  background-color: #f5f5f5;
}

.login-form-container-heading {
  text-align: center;

  h2 {
    font-weight: 700;
  }
}

.login-form-division {
  margin: 2rem 0;
}

.login-form {
  text-align: center;
}

.input-username,
.input-password {
  height: 2rem;
  width: 70%;
  border-radius: 0;
  border: 1px solid black;
  margin-top: 1rem;
  font-size: 1rem;
  font-family: $my-font;
  outline: none;
  padding: 0 0.5rem;
  transition: all 0.3s;

  &:focus {
    background-color: black;
    color: white;

    &::placeholder {
      color: white;
    }
  }
}

.login-button-container {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 50%;
  border-radius: 0;
  border: 1px solid black;
  background-color: $primary-color;
  color: white;
  cursor: pointer;
  font: {
    size: 1.2rem;
    family: $my-font;
    weight: 600;
  }
  transition: all 0.5s;

  &:hover {
    background-color: $primary-hover-color;
  }
}

.loading-spinner {
  font-size: 1.2rem;
  height: 1.5rem;
  width: 1.5rem;
}

// @keyframes animateButton {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

// @keyframes rotateButtonOnce {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(-8deg);
//   }
// }

// @keyframes rotateButton {
//   0% {
//     transform: rotate(-8deg);
//   }
//   50% {
//     transform: rotate(8deg);
//   }
//   100% {
//     transform: rotate(-8deg);
//   }
// }

@media screen and (max-width: 1100px) {
  .login-form-container {
    width: 50%;
  }
}

@media screen and (max-width: 700px) {
  .login-form-container {
    width: 70%;
  }
}

@media screen and (max-width: 500px) {
  .login-form-container {
    width: 80%;
  }
}

@media screen and (max-width: 400px) {
  .login-form-container {
    width: 90%;
  }

  .input-username,
  .input-password {
    width: 80%;
  }
}
</style>
