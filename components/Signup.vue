<template>
  <div class="signup-container">
    <div class="signup-form-container">
      <div class="signup-form-container-heading">
        <h2>SIGNUP</h2>
      </div>
      <div class="signup-form-division">
        <form class="signup-form" @submit.prevent="handleSignup">
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
          <label>Email</label>
          <br />
          <input
            type="email"
            class="input-email"
            placeholder="Enter email address..."
            v-model="credentials.email"
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
          <p style="color:red;">{{ errorMessage }}</p>
          <div class="signup-button-container">
            <button type="submit" class="signup-button">
              {{ !loading ? "SIGNUP" : null }}
              <b-spinner
                label="Spinning"
                v-if="loading"
                variant="light"
                class="loading-spinner"
              ></b-spinner>
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
        email: "",
        password: ""
      },
      successful: false,
      loading: false,
      message: "",
      errorMessage: ""
    };
  },
  methods: {
    handleSignup() {
      console.log("Signup!");
      this.errorMessage = "";
      this.loading = true;

      AuthService.register(
        this.credentials.username,
        this.credentials.email,
        this.credentials.password
      ).then(
        response => {
          this.message = response.data.message;
          this.successful = true;
          this.loading = false;
          alert("User registered successfully! You can login now");
          this.$router.push("/login");
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.successful = false;
          this.errorMessage = resMessage;
          this.loading = false;
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
$my-font: "Open Sans", sans-serif;

.signup-form-container {
  width: 35%;
  margin: 0 auto;
  padding: 2rem 0;
  box-shadow: inset 0px 0px 5px 0px black;
  background-color: #f5f5f5;
}

.signup-form-container-heading {
  text-align: center;

  h2 {
    font-weight: 700;
  }
}

.signup-form-division {
  margin: 2rem 0;
}

.signup-form {
  text-align: center;
}

.input-username,
.input-password,
.input-email {
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

.signup-button-container {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-button {
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

@media screen and (max-width: 1100px) {
  .signup-form-container {
    width: 50%;
  }
}

@media screen and (max-width: 700px) {
  .signup-form-container {
    width: 70%;
  }
}

@media screen and (max-width: 500px) {
  .signup-form-container {
    width: 80%;
  }
}

@media screen and (max-width: 400px) {
  .signup-form-container {
    width: 90%;
  }

  .input-username,
  .input-password,
  .input-email {
    width: 80%;
  }
}
</style>
