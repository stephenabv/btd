<template>
  <div>
    <NavbarVue />
    <div class="container w-50 shadow mt-5 py-3 text-left mb-5" id="form">
      <h1 class="text-center">Appointment Form</h1>
      <form @submit.prevent="submitForm">
        <!-- Name -->
        <div class="form-group">
          <label for="name" class="lead fs-5">Full Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="name"
            placeholder="Enter your name"
            required
          />
          <div class="invalid-feedback">Please enter your name.</div>
        </div>
        <!-- Email Address -->
        <div class="form-group">
          <label for="email" class="lead fs-5">Email Address:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <div class="invalid-feedback">Please enter your email address</div>
        </div>
        <!-- Contact Number -->
        <div class="form-group">
          <label for="phone" class="lead fs-5">Contact Number:</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            v-model="phone"
            placeholder="Enter your contact number"
            pattern="(\09|\+639\d{9})"
            required
          />
          <div class="invalid-feedback">Please enter your number</div>
        </div>
        <!-- Date -->
        <div class="form-group">
          <label for="date" class="lead fs-5">Date:</label>
          <input
            type="date"
            :min="getCurrentDate()"
            max="2075-12-31"
            class="form-control"
            id="date"
            v-model="date"
            required
          />
          <div class="invalid-feedback"></div>
        </div>
        <!-- Time -->
        <div class="form-group">
          <label for="time" class="lead fs-5">Time:</label>
          <input
            type="time"
            class="form-control"
            id="time"
            v-model="time"
            :min="minTime"
            :max="maxTime"
            required
          />
          <div class="invalid-feedback">Please choose a time</div>
        </div>
        <!-- Reason -->
        <div class="form-group">
          <label for="reason" class="lead fs-5">Reason:</label>
          <textarea
            class="form-control"
            id="reason"
            v-model="reason"
            required
          ></textarea>
        </div>
        <!-- Submit Button -->
        <div class="text-center">
          <button type="submit" class="gradient-button">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NavbarVue from "../components/Navbar.vue";
export default {
  name: "AppointmentVue",
  components: {
    NavbarVue,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      reason: "",
    };
  },
  methods: {
    getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    submitForm() {
      // Send a POST request to the API endpoint with the form data
      axios
        .post("http://localhost:3000/api/appointment", {
          name: this.name,
          email: this.email,
          contact_number: this.phone,
          date: this.date,
          time: this.time,
          reason: this.reason,
        })
        .then((response) => {
          // Reset the form data
          (this.name = ""),
            (this.email = ""),
            (this.contact_number = ""),
            (this.date = ""),
            (this.time = ""),
            (this.reason = ""),
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
#form {
  overflow: hidden;
}

.gradient-button {
  background-image: linear-gradient(to bottom left, #00a1ff, #00ff8f);
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