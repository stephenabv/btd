<template>
  <div>
    <NavbarVue />
    <!-- Content -->
    <div class="content">
      <div class="container">
        <div class="row">
          <h1 class="pb-5">Choose your Options</h1>
        </div>
        <div class="row mb-4">
          <!-- CCTV -->
          <div class="col-lg-3 col-md-3">
            <router-link to="/servicesdata" class="nav-link">
              <div class="shadow pt-3 mx-3">
                <p class="caption">CCTV</p>
                <img
                  class="img-fluid w-50 h-75"
                  src="../assets/images/dashboard/cctv.png"
                  alt="Products and Services"
                />
                <div class="description">
                  <p>Modify the content of CCTV Products</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- Internet Connection -->
          <div class="col-lg-3 col-md-3">
            <router-link to="/internet" class="nav-link">
              <div class="shadow pt-3 mx-3">
                <p class="caption">Internet Connection</p>
                <img
                  class="img-fluid w-50 h-75"
                  src="../assets/images/dashboard/www.png"
                  alt="Products and Services"
                />
                <div class="description">
                  <p>Modify the content of Internet Connection Offering</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- Structure Cabling -->
          <div class="col-lg-3 col-md-3">
            <router-link to="/cable" class="nav-link">
              <div class="shadow pt-3 mx-3">
                <p class="caption">Structured Cabling</p>
                <img
                  class="img-fluid w-50 h-75"
                  src="../assets/images/dashboard/cable.png"
                  alt="Products and Services"
                />
                <div class="description">
                  <p>Modify the content of Structured Cabling</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- Home Automation -->
          <div class="col-lg-3 col-md-3">
            <router-link to="/homeauto" class="nav-link">
              <div class="shadow pt-3 mx-3">
                <p class="caption">Home Automation</p>
                <img
                  class="img-fluid w-50 h-75"
                  src="../assets/images/dashboard/homeauto.png"
                  alt="Products and Services"
                />
                <div class="description">
                  <p>Modify the content of Home Automation</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- End -->
        </div>
        <!-- Second Row -->
        <div class="row mb-4">
          <!-- Web Development -->
          <div class="col-lg-3 col-md-3">
            <router-link to="/webdev" class="nav-link">
              <div class="shadow pt-3 mx-3">
                <p class="caption">Web Development</p>
                <img
                  class="img-fluid w-50 h-75"
                  src="../assets/images/dashboard/web.png"
                  alt="Products and Services"
                />
                <div class="description">
                  <p>Modify the content of the Web Development</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- T-Shirt Printing -->
          <div class="col-lg-3 col-md-3">
            <router-link to="/t-shirt" class="nav-link">
              <div class="shadow pt-3 mx-3">
                <p class="caption">T-shirt Printing</p>
                <img
                  class="img-fluid w-50 h-75"
                  src="../assets/images/dashboard/shirt.png"
                  alt="Products and Services"
                />
                <div class="description">
                  <p>Modify the content of T-shirt Printing</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- Shop -->
          <div class="col-lg-3 col-md-3">
            <router-link to="/shopdata" class="nav-link"
              ><div class="shadow pt-3 mx-3">
                <p class="caption">Shop</p>
                <img
                  class="img-fluid w-50 h-75"
                  src="../assets/images/dashboard/shop.png"
                  alt="Shop"
                />
                <div class="description">
                  <p>Modify the content of the Shop</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- Appointment -->
          <div class="col-lg-3 col-md-3">
            <router-link to="/appointmentdata" class="nav-link">
              <div class="shadow pt-3 mx-3">
                <p class="caption">Appointment Form</p>
                <img
                  class="img-fluid w-50 h-75"
                  src="../assets/images/dashboard/appointment.png"
                  alt="Appointment Form"
                />
                <div class="description">
                  <p>View all submitted appointment form</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <!-- End of Row -->
        <div class="row mb-2">
          <div class="col-lg-3 col-md-3">
            <router-link to="/contactformdata" class="nav-link">
              <div class="shadow pt-3 mx-3">
                <p class="caption">Contact Form</p>
                <img
                  class="img-fluid w-50 h-75"
                  src="../assets/images/dashboard/contactform.png"
                  alt="Contact Form"
                />
                <div class="description">
                  <p>View all submitted contact form</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <!-- End of Row -->
      </div>
    </div>
    <!-- End of Content -->
  </div>
</template>

<script>
import NavbarVue from "@/components/Navbar.vue";
export default {
  name: "DashboardVue",
  components: {
    NavbarVue,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  text-align: center;
}

.caption {
  font-size: 20px;
  font-weight: bold;
}

.description {
  margin: 10px;
  text-align: center;
  padding-bottom: 10px;
}
</style>
