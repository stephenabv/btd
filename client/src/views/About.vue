<template>
  <div>
    <NavbarVue />
    <!-- Content -->
    <div class="container my-5 mb-4">
      <h1>Bohol Tech Doctor</h1>
      <p class="lead text-justify">
        Bohol Tech Doctor is a company that has already experienced for the
        Network Solutions for hotels any other businesses. We have been in
        business for more than 5 years and have established a good reputation in
        the industry. We are a customer-focused company and our main goal is to
        provide the best possible service to our clients in affordable but
        quality services. We offer a wide range of services such as CCTV
        installation & repair, network installation, network maintenance,
        internet services and I.T support. We also offer web development and
        design services. We are a one-stop shop for all your I.T needs. If you
        are looking for a reliable and affordable I.T service provider, then
        look no further than Bohol Tech Doctor I.T Solutions!
      </p>
    </div>
    <!-- About Us -->
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <h2 class="mb-4 text-left">About Us</h2>
          <p class="lead text-justify">
            In-Home Services where we can dispatch a crew to your home or
            workplace within a matter of hours. Our experienced technician
            provide assistance in a wide variety of categories. We have provided
            customers with extensive knowledge and we can help you get your
            computer or network up and running immediately!
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/logo.png"
            alt="Company Image"
            class="img-container img-fluid"
          />
        </div>
      </div>
    </div>
    <!-- History -->
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <h2 class="mb-4 text-left">Our History</h2>
          <p class="lead text-justify">
            Founded in 2013 by Charlye Lopez, Bohol Tech Doctor I.T Solutions
            began as a humble computer repair service and quickly expanded its
            scope to include web development, graphic design, system development
            and eventually offering internet services. Through years of hard
            work and dedication, this company has grown and become a reliable,
            resourceful and customeroriented provider of I.T services.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/images/about/history.jpg"
            alt="History"
            class="img-container img-fluid"
          />
        </div>
      </div>
    </div>
    <!-- Mission and Vision -->
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <h2 class="mb-4 text-left">Mission and Vision</h2>
          <p class="lead text-justify">
            Bohol Tech Doctor and Fiber Fast Wireless Internet exists to provide
            Boholanos with reliable and efficient Broadband services and I.T
            Solutions all over the Philippines. Bohol Tech Doctor and Fiber Fast
            Wireless Internet will be the preferred provider of Broadband
            services,the best I.T Solutions benefiting the economic and social
            well-being of the Filipinos.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/images/about/vm.png"
            alt="Mission and Vision"
            class="img-container img-fluid"
          />
        </div>
      </div>
    </div>
    <!-- Values -->
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <h2 class="mb-4 text-left">Values</h2>
          <p class="lead text-justify">
            Bohol Tech Doctor and Fiber Fast Wireless Internet will always ,
            strive to provide high quality and steadily improving service
            consistent with sound business practices. BTD Fiber Fast Wireless
            Internet as a cooperative, provides service to our customers and
            allocate margins to the patron, pursuant to the by-laws of the
            company. BTD Fiber Fast Wireless Internet recognizes that employees,
            dedicated and accomplished, are essential to the success of the
            organization.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/images/about/values.png"
            alt="Value"
            class="img-container img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
export default {
  name: "AboutVue",
  components: {
    NavbarVue,
  },
};
</script>

<style scoped>
.img-container {
  height: 300px;
  width: 500px;
  background-size: contain;
}
</style>