<template>
  <div>
    <NavbarVue />
    <!-- Container -->
    <div class="main mx-5">
      <div class="row text-center align items-center mb-4">
        <!-- Product 1 -->
        <div class="col-sm-4">
          <div class="card shadow">
            <div class="card-body">
              <img
                class="card-img img-fluid custom-size"
                src="../assets/images/products/cctv.png"
              />
              <h3 class="card-title pt-4">CCTV Installation</h3>
              <p class="card-text"><!--Description goes here--></p>
              <router-link
                to="/cctv-installation"
                class="btn btn-success w-75 mb-2"
                >View Offers</router-link
              >
            </div>
          </div>
        </div>
        <!-- Product 2 -->
        <div class="col-sm-4">
          <div class="card shadow">
            <div class="card-body">
              <img
                class="card-img img-fluid custom-size"
                src="../assets/images/products/internet.png"
              />
              <h3 class="card-title pt-4">Internet Connection</h3>
              <p class="card-text"><!--Description goes here--></p>
              <router-link
                to="/internet-connection"
                class="btn btn-success w-75 mb-2"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
        <!-- Product 3 -->
        <div class="col-sm-4">
          <div class="card shadow">
            <div class="card-body">
              <img
                class="card-img img-fluid custom-size"
                src="../assets/images/products/cabling.png"
              />
              <h3 class="card-title pt-4">Structure Cabling</h3>
              <p class="card-text"><!--Description goes here--></p>
              <router-link
                to="/structured-cable"
                class="btn btn-success w-75 mb-2"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center align items-center">
        <!-- Product 4 -->
        <div class="col-sm-4">
          <div class="card shadow">
            <div class="card-body">
              <img
                class="card-img img-fluid custom-size"
                src="../assets/images/products/homeauto.png"
              />
              <h3 class="card-title pt-4">Home Automation</h3>
              <p class="card-text"><!--Description goes here--></p>
              <router-link
                to="/home-auto"
                class="btn btn-success w-75 mb-2"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
        <!-- Product 5 -->
        <div class="col-sm-4">
          <div class="card shadow">
            <div class="card-body">
              <img
                class="card-img img-fluid custom-size"
                src="../assets/images/products/webdev.png"
              />
              <h3 class="card-title pt-4">Web Development</h3>
              <p class="card-text"><!--Description goes here--></p>
              <router-link
                to="/web-development"
                class="btn btn-success w-75 mb-2"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
        <!-- Product 6 -->
        <div class="col-sm-4">
          <div class="card shadow">
            <div class="card-body">
              <img
                class="card-img img-fluid custom-size"
                src="../assets/images/products/shirt.png"
              />
              <h3 class="card-title pt-4">T-Shirt Printing</h3>
              <p class="card-text"><!--Description goes here--></p>
              <router-link
                to="/t-shirt"
                class="btn btn-success w-75 mb-2"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Container -->
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
export default {
  name: "ProductVue",
  components: {
    NavbarVue,
  }
};
</script>

<style scoped>
.custom-size {
  height: 250px;
  width: 250px;
  object-fit: fill;
}
.img-fluid {
  max-width: 100%;
  height: auto;
  width: 300px; /* Change this value to your desired width */
  height: 300px; /* Change this value to your desired height */
  object-fit: contain; /* This ensures the image covers the entire area */
}
</style>