<template>
  <div>
    <div class="login-container">
      <form class="login-form" @submit.prevent="submitLogin">
        <img class="img-fluid" src="../assets/logo.png" />
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              required
            />
            <button
              type="button"
              class="show-password-btn"
              @click="toggleShowPassword"
            >
              <i :class="showPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
            </button>
          </div>
          <p v-if="loginError" class="error-message">Invalid Username or Password</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    <div class="footer">&copy;{{ currentYear }} Bohol Tech Doctor</div>
  </div>
</template>

<script>
import router from "../../router";
import userCredentials from "../../userCredentials.js";

export default {
  name: "LoginVue",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      currentYear: new Date().getFullYear(),
      loginError: false,
    };
  },
  methods: {
    submitLogin() {
      if (
        this.username === userCredentials.username &&
        this.password === userCredentials.password
      ) {
        console.log("Logged In!");
        sessionStorage.setItem('isLoggedIn', 'true');
        // Navigate to Dashboard
        router.push({ name: "Dashboard" });
      } else {
        console.log("Invalid Credentials");
        this.loginError = true;
      }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .login-form {
    width: 100%;
    max-width: 500px;
  }
}

@media (max-width: 576px) {
  .login-form {
    padding: 10px;
  }

  .password-wrapper {
    flex-direction: column;
  }

  input[type="password"] + .show-password-btn {
    top: auto;
    bottom: 5px;
    right: 5px;
    transform: none;
  }
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.password-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

input[type="password"] + .show-password-btn {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.show-password-btn i {
  font-size: 15px;
}

button[type="submit"] {
  margin-top: 1rem;
  /* background-color: #007bff; */
  background-image: linear-gradient(to bottom left, #00a1ff, #00ff8f);
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.footer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.error-message{
  background-color: rgb(239, 106, 106);
  color: #fff;
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
}
</style>
