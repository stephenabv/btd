<template>
  <div>
    <div class="navbar navbar-light bg-light shadow">
      <div class="container">
        <router-link to="/dashboard" class="navbar-brand">
          <img src="../assets/logo.png" />
        </router-link>
        <button @click="logout" class="logout d-none d-md-block">Logout</button>
        <a @click="logout" class="d-md-none">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarVue",
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.logout {
  border-radius: 20px;
  border-color: transparent;
  font-weight: bold;
  color: white;
  height: 50px;
  width: 10%;
  background-image: linear-gradient(to bottom, #f51115, #e06969);
}
@media (max-width: 767.98px) {
  .logout {
    display: none;
  }
}

i {
  font-size: 30px;
  color: red;
}

.navbar-brand img {
  max-height: 70px;
}
</style>