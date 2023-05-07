<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light shadow text-center px-4"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav_menu"
        aria-controls="nav_menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav_menu">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link"
              >Products & Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/shop" class="nav-link">Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/appointment" class="nav-link"
              >Make Appointment</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "NavbarVue",
};
</script>


<style scoped>
.navbar-brand img {
  max-height: 70px;
}

i {
  font-size: 25px;
}
</style>
