<template>
  <div>
    <NavbarVue />
    <div class="container w-75 mt-5 my-4 text-center pt-4">
      <h1
        style="
          text-transform: uppercase;
          font-weight: 700;
          font-family: 'Comic Sans MS', cursive, sans-serif;
        "
      >
        have some questions?
      </h1>
      <div class="row my-4">
        <div class="col-sm-6">
          <img
            src="../assets/images/contact/mail.png"
            style="max-width: 100%; max-height: 75%"
          />
        </div>
        <div class="col-sm-6">
          <div class="row mt-5">
            <div class="col-12">
              <form @submit.prevent="submitForm">
                <input
                  type="text"
                  class="form-control my-3"
                  placeholder="What is your full name?"
                  v-model="name"
                  required
                />
                <input
                  type="email"
                  class="form-control my-3"
                  placeholder="What is your email?"
                  v-model="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                />
                <textarea
                  class="form-control my-3"
                  placeholder="What are your questions or inquiries?"
                  v-model="message"
                ></textarea>
                <button class="gradient-button" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <h5 class="mb-4" style="text-transform: uppercase">
        you can reach out to us via
      </h5>
      <div class="row my-4 pb-4">
        <div class="col-sm-3">
          <a :href="'https://facebook.com/' + link" target="_blank"
            ><img
              src="@/assets/images/contact/fb.png"
              alt="Facebook Logo"
              style="max-height: 50%; max-width: 50%"
          /></a>
        </div>
        <div class="col-sm-3">
          <a :href="'mailto:' + mail" target="_blank"
            ><img
              src="@/assets/images/contact/email.png"
              alt="Email Logo"
              style="max-height: 50%; max-width: 50%"
          /></a>
        </div>
        <div class="col-sm-3">
          <a :href="'tel:' + phone"
            ><img
              src="@/assets/images/contact/phone.png"
              alt="Phone Logo"
              style="max-height: 50%; max-width: 50%"
          /></a>
        </div>
        <div class="col-sm-3">
          <a :href="'https://m.me/' + link" target="_blank"
            ><img
              src="@/assets/images/contact/msgr.png"
              alt="Messenger Logo"
              style="max-height: 50%; max-width: 50%"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarVue from "../components/Navbar.vue";

export default {
  name: "ContactVue",
  components: {
    NavbarVue,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      link: "boholtechdoctor",
      phone: "+63 963 692 5078",
      mail: "boholtechdoctor@gmail.com",
    };
  },
  methods: {
    submitForm() {
      // Send a POST request to the API endpoint with the form data
      axios
        .post("http://localhost:3000/api/contact", {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((response) => {
          // Reset the form data
          (this.name = ""), (this.email = ""), (this.message = "");
          // Show window alert
          window.alert("Message Sent Successfully!");
          // Handle a successful response from the API
          console.log("Form submitted successfully:", response);
          // TODO: Do something with the response, like show a success message
        })
        .catch((error) => {
          window.alert("An error occured while sending the message.");
          // Handle an error response from the API
          console.error("Error submitting form:", error);
          // TODO: Do something with the error, like show an error message
        });
    },
  },
};
</script>



<style scoped>
.form-control {
  border-radius: 10px;
}
input {
  height: 50px;
}

textarea {
  height: 80px;
}

.gradient-button {
  background-image: linear-gradient(to bottom left, #ff00d4, #00ddff);
  width: 200px;
  height: 50px;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
