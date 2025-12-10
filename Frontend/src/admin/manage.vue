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
                  <tr v-for="(car, index) in cars" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ car.name }}</td>
                    <td>{{ car.brand }}</td>
                    <td>{{ car.model }}</td>
                    <td>₹{{ car.price }}</td>
                    <td>{{ car.fuel }}</td>
                    <td>{{ car.seats }}</td>

                    <td>
                      <span
                        :class="[
                          'badge',
                          car.status === 'Available' ? 'badge-success' :
                          car.status === 'Booked' ? 'badge-warning' :
                          'badge-danger'
                        ]"
                      >
                        {{ car.status }}
                      </span>
                    </td>

                    <td>
                      <span v-if="car.status !== 'Available'">
                        {{ car.returnDate }}
                      </span>
                      <span v-else class="text-muted">—</span>
                    </td>

                    <td><img :src="car.image" width="60" class="rounded"></td>

                    <td>
                      <button class="btn btn-sm btn-info" @click="editCar(car)">Edit</button>
                      <button class="btn btn-sm btn-danger ml-1" @click="deleteCar(index)">Delete</button>
                    </td>
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
export default {
  data() {
    return {
      cars: [
        {
          name: "Innova Crysta",
          brand: "Toyota",
          model: "2021",
          price: 3000,
          fuel: "Diesel",
          seats: 7,
          status: "Booked",
          returnDate: "2025-02-12",
          image: "https://via.placeholder.com/100",
        },
        {
          name: "Swift",
          brand: "Maruti",
          model: "2020",
          price: 1800,
          fuel: "Petrol",
          seats: 5,
          status: "Available",
          returnDate: "",
          image: "https://via.placeholder.com/100",
        }
      ]
    };
  },

  methods: {
    deleteCar(index) {
      this.cars.splice(index, 1);
    },

    editCar(car) {
      alert("Edit function coming soon!");
    }
  }
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

