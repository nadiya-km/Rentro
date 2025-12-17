<template>
  <div class="admin-wrapper">

    <!-- SIDEBAR -->
    <sidebar class="sidebar-box" />

    <!-- MAIN CONTENT -->
    <div class="content">
      <div class="container-fluid mt-4">

        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h3 class="font-weight-bold">Manage Cars</h3>
          <router-link to="/admin/addNewCar" class="btn btn-primary">+ Add New Car</router-link>
        </div>

        <!-- Car Table -->
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Car</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Price/Day</th>
                    <th>Fuel</th>
                    <th>Seats</th>
                    <th>Status</th>
                    <th>Return Date</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>

               <tbody>
  <tr v-for="(car, index) in cars" :key="car._id">
    <td>{{ index + 1 }}</td>
    <td>{{ car.name }}</td>
    <td>{{ car.category }}</td>
    <td>{{ car.year }}</td>
    <td>₹{{ car.price }}</td>
    <td>{{ car.fuel }}</td>
    <td>{{ car.seats }}</td>

    <td>
      <span
        class="badge"
        :class="
          car.status === 'Available'
            ? 'badge-success'
            : car.status === 'Booked'
            ? 'badge-warning'
            : 'badge-danger'
        "
      >
        {{ car.status }}
      </span>
    </td>

    <td class="text-muted">—</td>

    <td>
      <img v-if="car.images && car.images.length" :src="car.images[0].url" width="60" class="rounded" alt="car"/>

<span v-else class="text-muted">No Image</span>

    </td>

    <td>
      <button class="btn btn-sm btn-info" @click="editCar(car)">
        Edit
      </button>
      <button
        class="btn btn-sm btn-danger ml-1"
        @click="deleteCar(car._id)"
      >
        Delete
      </button>
    </td>
  </tr>

  <tr v-if="cars.length === 0">
    <td colspan="11" class="text-center">No cars found</td>
  </tr>
</tbody>


              </table>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import sidebar from "@/components/sidebar.vue";

export default {
  name: "ManageCars",
  components: {
    sidebar,
  },

  data() {
    return {
      cars: [],
    };
  },

  mounted() {
    this.fetchCars();
  },

  methods: {
    async fetchCars() {
      try {
        const res = await axios.get("http://localhost:3000/api/cars");
        this.cars = res.data.cars;
      } catch (error) {
        console.error("FETCH CARS ERROR:", error);
      }
    },

    editCar(car) {
      this.$router.push(`/admin/edit-car/${car._id}`);
    },


   async deleteCar(id) {
  if (!confirm("Are you sure you want to delete this car?")) return;

  try {
    await axios.delete(`http://localhost:3000/api/cars/${id}`);
    this.cars = this.cars.filter(car => car._id !== id);
    alert("Car deleted successfully");
  } catch (error) {
    console.error("DELETE ERROR:", error);
    alert("Failed to delete car");
  }
}
  },
};
</script>



<style scoped>
.admin-wrapper {
  display: flex;
}

.sidebar-box {
  width: 240px;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
}

.content {
  margin-left: 240px;
  padding: 20px;
  padding-top: 70px;
  width: calc(100% - 240px);
  transition: 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .sidebar-box {
    display: none;
  }

  .content {
    margin-left: 0 !important;
    width: 100% !important;
  }
}
</style>

