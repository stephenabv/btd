<template>
  <div>
    <NavbarVue />
    <div class="container mt-4 mb-4">
      <div class="row">
        <div
          v-for="item in items"
          :key="item.id"
          class="col-sm-6 col-md-4 col-lg-4"
        >
          <div class="card">
            <img :src="item.image" alt="item.name" class="img-fluid" />
            <div class="card-body">
              <h3 class="card-title">{{ item.name }}</h3>
              <h4 class="card-text">
                &#8369;{{ Number(item.price).toLocaleString() }}
              </h4>
              <p class="lead">{{ item.info }}</p>
              <button class="gradient-btn w-75 mb-2" @click="buyNow(item)">
                Buy Now
              </button>
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
  name: "ShopVue",
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
        const response = await axios.get("http://localhost:3000/api/shop");
        this.items = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    buyNow(item) {
      // Get cart data from local storage or create empty array
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if item is already in cart
      const existingItem = cartData.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If item is already in cart, increase quantity by 1
        existingItem.quantity += 1;
      } else {
        // If item is not in cart, add it with quantity of 1
        cartData.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        });
      }

      // Save updated cart data to local storage
      localStorage.setItem("cart", JSON.stringify(cartData));

      // Redirect user to checkout page
      this.$router.push({
        name: "Checkout - Bohol Tech Doctor",
        params: { itemId: item.id },
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>



<style scoped>
.gradient-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 20px;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gradient-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.img-fluid {
  max-width: 100%;
  height: auto;
  width: 300px; /* Change this value to your desired width */
  height: 300px; /* Change this value to your desired height */
  object-fit: contain; /* This ensures the image covers the entire area */
  margin: 2rem auto;
}
</style>
