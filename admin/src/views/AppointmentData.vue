<template>
  <div id="contact-data">
    <NavbarVue />
    <h1 class="text-center mt-4">Appointments</h1>
    <div class="container shadow my-3 mt-5 w-100">
      <div class="d-flex justify-content-end mb-3">
        <input
          v-model="searchQuery"
          placeholder="Search...."
          class="w-25 mt-3"
        />
      </div>
      <table class="w-100">
        <thead class="text-center">
          <th>Name</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th></th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="info in filteredDetails" :key="info.id">
            <td class="text-center">{{ info.name }}</td>
            <td class="text-center">{{ info.email }}</td>
            <td class="text-center">{{ info.contact_number }}</td>
            <td class="text-center">
              <button
                class="btn btn-success"
                data-toggle="modal"
                data-target="#modalInfo"
                @click="viewInfo(info)"
              >
                View Details
              </button>
            </td>
            <td class="text-center">
              <button @click="deleteInfo(info.id)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalInfo"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalInfoLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-center" id="modalInfoLabel">
              View Details
            </h3>
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
            <h5>Name</h5>
            
            <p class="lead">{{ modalDetails.name }}</p>
            <h5>Email</h5>
            <p class="lead">{{ modalDetails.email }}</p>
            <h5>Contact Number</h5>
            <p class="lead">{{ modalDetails.contact_number }}</p>
            <h5>Date</h5>
            <p class="lead">{{ modalDetails.date }}</p>
            <h5>Time</h5>
            <p class="lead">{{ modalDetails.time }}</p>
            <h5>Reason</h5>
            <p class="lead">{{ modalDetails.reason }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavbarVue from "../components/Navbar.vue";
export default {
  name: "ContactData",
  components: {
    NavbarVue,
  },
  data() {
    return {
      details: [],
      searchQuery: "",
      modalDetails: {},
    };
  },
  methods: {
    async deleteInfo(id) {
      const confirmDelete = confirm(
        "Are you sure you want to delete this information"
      );
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:3000/api/appointment/${id}`);
          this.details = this.details.filter(
            (appointment) => appointment.id !== id
          );
          window.alert("Contact successfully deleted!");
        } catch (err) {
          console.error(err);
        }
      }
    },
    async fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/appointment"
        );
        this.details = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    viewInfo(info) {
      this.modalDetails = info;
      const date = new Date(info.date);
      const time = info.time;
      const dateTime = new Date(`${date.toDateString()} ${time}`);

      // Format the date string as "Month-dd-yyyy"
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const formattedDate =
        monthNames[dateTime.getMonth()] +
        " " +
        dateTime.getDate().toString().padStart(2, "0") +
        ", " +
        dateTime.getFullYear().toString();

      // Format the time in 12-hour format
      const formattedTime = dateTime.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      this.modalDetails.date = formattedDate;
      this.modalDetails.time = formattedTime;
    },
  },
  computed: {
    filteredDetails() {
      return this.details.filter(
        (info) =>
          info.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          info.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          info.message.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>