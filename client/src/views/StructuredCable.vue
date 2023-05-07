<template>
  <div>
    <NavbarVue />
    <div class="container mt-4">
      <div class="row">
        <div v-for="item in items" :key="item.id" class="col-sm-6 col-md-4 col-lg-4">
          <div class="card">
            <img :src="item.image" alt="item.name" class="img-fluid m-3" />
            <div class="card-body">
              <h3 class="card-title">{{ item.name }}</h3>
              <h4 class="card-text">&#8369;{{ Number(item.price).toLocaleString() }}</h4>
              <p class="lead">{{ item.info }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      items: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/cable");
        this.items = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
  width: 300px; /* Change this value to your desired width */
  height: 300px; /* Change this value to your desired height */
  object-fit: contain; /* This ensures the image covers the entire area */
}
</style>
