<template>
  <div>
    <NavbarVue />
    <SlideshowVue/>
    <!-- Main -->
    <div class="main">
      <div class="text-center">
        <h2>Why Choose Us?</h2>
        <p>Faster Service with the Best Price</p>
        <hr class="hr-length" />
      </div>
    </div>
    <!-- End of Main -->
    <!-- Items -->
    <div class="items mx-5">
      <div class="d-flex justify-content-evenly">
        <div class="row justify-content-center text-center">
          <!-- First Content -->
          <div class="col-sm-6 col-md-3">
            <div class="text-center justify-content-center">
              <img src="../assets/images/i1.png"  class="img-fluid h-50 w-50"/>
              <h5>Fiberfast Internet Solutions</h5>
              <p>
                We provide solutions to slow internet! Get Connected! Stay
                Connected! Internet that moves at the speed of your life.
              </p>
            </div>
          </div>
          <!-- Second Content -->
          <div class="col-sm-6 col-md-3">
            <div class="text-center justify-content-center">
              <img src="../assets/images/i2.png"  class="img-fluid h-50 w-50"/>
              <h5>Computer Repair</h5>
              <p>
                Never left your computer down! Get your computer running like
                new again with our expert repair services.
              </p>
            </div>
          </div>
          <!-- Third Content -->
          <div class="col-sm-6 col-md-3">
            <div class="text-center justify-content-center">
              <img src="../assets/images/i3.png"  class="img-fluid h-50 w-50"/>
              <h5>Closed Circuit Television (CCTV) System</h5>
              <p>
                The future of security! Protect your world. Embrace Security
              </p>
            </div>
          </div>
          <!-- Fourth Content -->
          <div class="col-sm-6 col-md-3">
            <div class="text-center justify-content-center">
              <img src="../assets/images/i4.png"  class="img-fluid h-50 w-50"/>
              <h5>Network Solutions</h5>
              <p>
                We also provide Structured Cabling System (SCS),Fire Detection
                and Alarm System (FDAS). Connecting you to a world of
                possibilities with our network solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Service Process -->
      <div class="d-flex justify-content-center mt-4">
        <div class="col-md-12">
          <div class="row mb-4">
            <h1 class="text-center">Service Process</h1>
            <h5 class="text-center">
              Easy and effective way to get your idea become reality
            </h5>
            <hr />
          </div>
          <div class="row mb-4">
            <div class="col-md-4">
              <img
                class="img-fluid h-30 w-25 mb-3"
                src="../assets/images/fast.png"
                id="services"
              />
              <h5>Fast Service</h5>
              <p>Fast, efficient service that won't slow you down.</p>
            </div>
            <div class="col-md-4">
              <img
                class="img-fluid h-30 w-25 mb-3"
                src="../assets/images/secure.png"
                id="services"
              />
              <h5>Secure Payments</h5>
              <p>
                You can make payments through any bank transfer method or via
                any nearby Money Remittance center.
              </p>
            </div>
            <div class="col-md-4">
              <img
                class="img-fluid h-30 w-25 mb-3"
                src="../assets/images/secure.png"
                id="services"
              />
              <h5>Friendly Team</h5>
              <p>
                We are all Boholanos who are very friendly, and we treat our
                customers like family.
              </p>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-md-4">
              <img
                class="img-fluid h-30 w-25 mb-3"
                src="../assets/images/friendly.png"
                id="services"
              />
              <h5>Affordable Services</h5>
              <p>
                We also accommodate hangyo hangyo because that's what Boholanos
                do. We love our customers, and we offer big discounts as a token
                of appreciation.
              </p>
            </div>
            <div class="col-md-4">
              <img
                class="img-fluid h-30 w-25 mb-3"
                src="../assets/images/affordable.png"
                id="services"
              />
              <h5>No Fix No Fee</h5>
              <p>
                Our 'No Fix No Fee' guarantee means that if you contact us to
                resolve an issue and we are unable to find a solution, fix, or
                repair it, we will not charge you any fee.
              </p>
            </div>
            <div class="col-md-4">
              <img
                class="img-fluid h-30 w-25 mb-3"
                src="../assets/images/nofix.png"
                id="services"
              />
              <h5>You are a Priority</h5>
              <p>
                We don't need many customers; we need happy customers! Once you
                connect with us, you become our priority."
              </p>
            </div>
          </div>
        </div>
        <!-- End of Service Process -->
      </div>
    </div>
    <!-- End of Items -->
    <div class="footer">
      <b-card-footer>&copy;{{ currentYear }} Bohol Tech Doctor</b-card-footer>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
import SlideshowVue from '../components/Slideshow.vue';
export default {
  name: "IndexVue",
  components: {
    NavbarVue,
    SlideshowVue
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
@import "../assets/styles/index.css";
</style>