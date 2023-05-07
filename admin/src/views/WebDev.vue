<template>
  <div id="services-data">
    <NavbarVue />
    <!-- Container -->
    <div class="container mb-4">
      <div class="pkg mt-5 shadow">
        <div class="row">
          <div class="col">
            <h4 class="mx-2 my-2 text-right">Web Development Packages</h4>
          </div>
          <div class="col text-right mt-2 mr-3">
            <button
              class="btn btn-success"
              data-toggle="modal"
              data-target="#modalForm"
            >
              Add New Data
            </button>
          </div>
        </div>
        <div class="col-lg-12 col-md-6">
          <div class="w-100">
            <table class="w-100 table-responsive-md mt-3">
              <thead>
                <tr class="text-center">
                  <th class="px-4" width="15%">Package</th>
                  <th class="px-4" width="25%">Image</th>
                  <th class="px-4" width="15%">Price</th>
                  <th class="px-4" width="40%">Description</th>
                  <th class="px-4" width="5%">Action</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="pkg in packages" :key="pkg.id">
                  <td class="px-4">{{ pkg.name }}</td>
                  <td class="px-4">
                    <img
                      :src="pkg.image"
                      :alt="pkg.name"
                      class="img-fluid m-2 h-25 w-25"

                    />
                  </td>
                  <td class="px-4">{{ pkg.price }}</td>
                  <td class="px-4">{{ pkg.info }}</td>
                  <td class="px-4">
                    <button
                      class="btn btn-danger"
                      @click="deletePackage(pkg.id)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- End of Table -->
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalFormLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalFormLabel">Add New Package</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Add your form fields here -->
            <!-- Add your form fields here -->
            <form>
              <!-- Package Name -->
              <div class="form-group">
                <label for="name">Package Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  required
                  v-model="newPackage.name"
                />
              </div>
              <!-- Package Image -->
              <div class="form-group">
                <label for="image">Image:</label>
                <input
                  type="file"
                  class="form-control-file"
                  accept="image/*"
                  id="image"
                  v-on:change="handleFileUpload"
                />
              </div>
              <!-- Package Price -->
              <div class="form-group">
                <label for="price">Price:</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  required
                  v-model="newPackage.price"
                />
              </div>
              <!-- Package Description -->
              <div class="form-group">
                <label for="description">Description:</label>
                <textarea
                  id="description"
                  class="form-control"
                  rows="4"
                  v-model="newPackage.description"
                ></textarea>
              </div>
              <!-- End of Form -->
            </form>
            <div v-if="success">Package Added Successfully</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="savePackage">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->
  </div>
</template>

<script>
import axios from "axios";
import NavbarVue from "@/components/Navbar.vue";
export default {
  components: {
    NavbarVue,
  },
  data() {
    return {
      newPackage: {
        name: "",
        image: null,
        price: 0,
        description: "",
        success: false,
      },
      packages: [],
    };
  },
  // created() {
  //   this.packages;
  // },
  methods: {
    handleFileUpload(event) {
      this.newPackage.image = event.target.files[0];
    },
    savePackage() {
      const formData = new FormData();
      formData.append("name", this.newPackage.name);
      formData.append("image", this.newPackage.image);
      formData.append("price", this.newPackage.price);
      formData.append("info", this.newPackage.description);

      axios
        .post("http://localhost:3000/api/webdevelopment", formData)
        .then((response) => {
          // Handle the response from the server
          console.log("Package saved successfully!");
          this.success = true; // Show success message
          this.packages.push(response.data); // Add the new package to the packages array
        })
        .catch((error) => {
          console.log("Error saving package: ", error);
          this.success = false; // Show error message
        });
    },
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/webdevelopment");
        this.packages = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deletePackage(id) {
      const confirmDelete = confirm(
        "Are you sure you want to delete this package?"
      );
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:3000/api/webdevelopment/${id}`);
          this.packages = this.packages.filter((pkg) => pkg.id !== id);
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
