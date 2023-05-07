<template>
  <div>
    <NavbarVue />
    <div class="container mt-4 mb-4">
      <h1 class="mb-3">Checkout - Bohol Tech Doctor</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>{{ item.name }}</td>
            <td>&#8369;{{ Number(item.price).toLocaleString() }}</td>
            <td>{{ item.quantity }}</td>
            <td>&#8369;{{ Number(item.price * item.quantity).toLocaleString() }}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td><strong>Total:</strong></td>
            <td><strong>&#8369;{{ Number(total).toLocaleString() }}</strong></td>
          </tr>
        </tbody>
      </table>
      <button class="gradient-btn w-25 mb-2" @click="checkout">Checkout</button>
    </div>
  </div>
</template>
<script>
import NavbarVue from "@/components/Navbar.vue";

export default {
  name: "CheckoutVue",
  components: {
    NavbarVue,
  },
  computed: {
    cart() {
      // Get cart data from local storage or create empty array
      return JSON.parse(localStorage.getItem("cart")) || [];
    },
    total() {
      // Calculate total cost of items in cart
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    checkout() {
      // Clear cart data from local storage
      localStorage.removeItem("cart");

      // Redirect user to thank you page
    //   this.$router.push("/thankyou");
    },
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
</style>