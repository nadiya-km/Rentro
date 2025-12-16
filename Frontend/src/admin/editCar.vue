<script>
import axios from "axios";


export default {


  data() {
    return {
      car: {
        name: "",
        year: "",
        category: "SUV",
        seats: "",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "",
        status: "Available",
        description: "",
        features: [],
      },
      image: null,
    };
  },

  async mounted() {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/cars/${this.$route.params.id}`
      );
      this.car = res.data.car;
    } catch (err) {
      console.error("FETCH CAR ERROR:", err);
    }
  },

  methods: {
    fileSelected(e) {
      this.image = e.target.files[0];
    },

    async updateCar() {
  try {
    const formData = new FormData();

    // Append ONLY non-empty fields
    Object.entries(this.car).forEach(([key, value]) => {
      if (
        value !== "" &&
        value !== null &&
        value !== undefined &&
        key !== "image"
      ) {
        if (Array.isArray(value)) {
          value.forEach(v => formData.append(`${key}[]`, v));
        } else {
          formData.append(key, value);
        }
      }
    });

    if (this.image) {
      formData.append("image", this.image);
    }

    await axios.put(
      `http://localhost:3000/api/cars/${this.car._id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    alert("Car updated successfully");
    this.$router.push("/admin/manageCars");
  } catch (error) {
    console.error("UPDATE CAR ERROR:", error);
    alert("Update failed");
  }
}

  },
};
</script>

<template>
  <div class="add-car-container">
    <Sidebar/>

    <div class="page-header d-flex justify-content-between align-items-center">
      <h3 class="mb-0">Add New Car</h3>
    </div>

    <div class="card shadow mt-4">
      <div class="card-body">
        
<form @submit.prevent="updateCar" enctype="multipart/form-data">


          <!-- Row 1 -->
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Car Name *</label>
              <input type="text" v-model="car.name" class="form-control" placeholder="e.g., Toyota Innova Crysta" required>
            </div>

            <div class="form-group col-md-4">
              <label>Model Year</label>
              <input type="number" v-model="car.year" class="form-control" placeholder="2022">
            </div>

            <div class="form-group col-md-4">
              <label>Category</label>
              <select v-model="car.category" class="form-control">
                <option>SUV</option>
                <option>Sedan</option>
                <option>Hatchback</option>
                <option>MUV</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>

          <!-- Row 2 -->
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Seats</label>
              <input type="number" v-model="car.seats" class="form-control" placeholder="5">
            </div>

            <div class="form-group col-md-3">
              <label>Fuel Type</label>
              <select v-model="car.fuel" class="form-control">
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div class="form-group col-md-3">
              <label>Transmission</label>
              <select v-model="car.transmission" class="form-control">
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>

            <div class="form-group col-md-3">
              <label>Price / Day (₹) *</label>
              <input type="number" v-model="car.price" class="form-control" placeholder="e.g., 3500" required>
            </div>
          </div>

          <!-- Status -->
          <div class="form-group">
            <label>Status</label>
            <select v-model="car.status" class="form-control">
              <option>Available</option>
              <option>Booked</option>
              <option>Not Available</option>
            </select>
          </div>

          <!-- Description -->
          <div class="form-group">
            <label>Short Description</label>
            <textarea
              v-model="car.description"
              class="form-control"
              rows="3"
              placeholder="Add highlights: AC, Driver, luggage capacity, etc."
            ></textarea>
          </div>

          <!-- Features -->
          <div class="form-group">
            <label>Features</label>
            <div class="d-flex flex-wrap mt-2">

              <div class="mr-3">
                <input type="checkbox" v-model="car.features" value="AC">
                <label class="ml-1">AC</label>
              </div>

              <div class="mr-3">
                <input type="checkbox" v-model="car.features" value="Music System">
                <label class="ml-1">Music System</label>
              </div>

              <div class="mr-3">
                <input type="checkbox" v-model="car.features" value="Driver Included">
                <label class="ml-1">Driver Included</label>
              </div>

              <div class="mr-3">
                <input type="checkbox" v-model="car.features" value="GPS">
                <label class="ml-1">GPS</label>
              </div>

            </div>
          </div>

          <!-- Image Upload -->
          <div class="form-group">
            <label>Car Image</label>
            <input type="file" class="form-control" @change="fileSelected">
          </div>

          <!-- Submit -->
        <button type="submit" class="btn btn-dark btn-block mt-3">
            Update Car
         </button>


        </form>

      </div>
    </div>

  </div>
</template>
<style scoped>
.add-car-container {
  padding: 30px;
}


@media (max-width: 992px) {
  .add-car-container {
    margin-left: 0;
    padding: 20px;
  }
}

.card {
  border-radius: 12px;
  border: none;
}

.form-control {
  height: 45px;
  border-radius: 8px;
}
textarea.form-control {
  border-radius: 8px;
}
</style>