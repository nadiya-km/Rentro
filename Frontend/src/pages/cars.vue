<template>

  <div class="cars-page">

    <div class="container-fluid">
      <div class="row">

        <!-- LEFT CAPSULE FILTER BAR -->
        <div class="col-lg-2 col-md-3 filter-sidebar">

          <div class="filter-glass">
            <button v-for="filter in filters" :key="filter"
              :class="['filter-pill', activeFilter === filter && 'active']" @click="activeFilter = filter">
              {{ filter }}
            </button>
          </div>
        </div>

        <!-- RIGHT CONTENT -->
        <div class="col-lg-10 col-md-9">

          <!-- MAIN CONTENT -->
          <div class="content-glass">

            <!-- CAR GRID -->
            <div class="row">

              <!-- CAR GRID -->
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4" v-for="car in filteredCars" :key="car._id">
                <div class="car-card">
                  <img :src="car.images?.[0]?.url || defaultImage" class="car-img" alt="car image" />

                  <div class="car-info">
                    <h5>{{ car.name }}</h5>
                    <p class="type">{{ car.category }}</p>

                    <span :class="['availability', car.status === 'Available' ? 'available' : 'unavailable']">
                      {{ car.status === 'Available' ? 'Available' : 'Not Available' }}
                    </span>


                    <div class="price">
                      ₹{{ car.price }} <span>/ day</span>
                    </div>


                    <button class="book-btn" @click="$router.push(`/cars/${car._id}`)">view details</button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
* {
  font-family: "Inter", sans-serif;
}

.cars-page {
  min-height: 100vh;
  padding: 60px 0;
  background: radial-gradient(circle at top, #2c2f4a, #0b0f1a 65%);
  color: #fff;
}

/* ===== LEFT FILTER SIDEBAR ===== */
.filter-sidebar {
  display: flex;
  justify-content: center;
  height: max-content;
  margin-top: 150px;
}

.filter-glass {
  width: 100%;
  padding: 12px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-pill {
  padding: 8px 12px;
  font-size: 6px;
}

.availability {
  display: inline-block;
  margin-top: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.available {
  background: rgba(40, 167, 69, 0.2);
  color: #4cd964;
  border: 1px solid rgba(40, 167, 69, 0.5);
}

.unavailable {
  background: rgba(220, 53, 69, 0.2);
  color: #ff6b6b;
  border: 1px solid rgba(220, 53, 69, 0.5);
}

/* ===== TOP PICKUP PANEL ===== */
.top-glass {
  margin-bottom: 18px;
  padding: 14px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}


.filter-pill {
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #cfd3ff;
  font-size: 8px;
  font-weight: 500;
  transition: 0.3s ease;
}

.filter-pill:hover {
  background: rgba(255, 255, 255, 0.14);
}

.filter-pill.active {
  background: linear-gradient(135deg, #6c5ce7, #5c89ff);
  color: white;
  box-shadow: 0 8px 25px rgba(108, 92, 231, 0.6);
}

/* ===== RIGHT CONTENT GLASS ===== */
.content-glass {
  padding: 26px;
  margin-top: 25px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.55);
}

/* ===== SEARCH BAR ===== */
.search-box {
  display: flex;
  gap: 12px;
}

.search-box input {
  flex: 1;
  padding: 10px 14px;
  border-radius: 12px;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 13px;
}

.search-box input::placeholder {
  color: #b5bbff;
}

.search-btn {
  padding: 10px 26px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: linear-gradient(135deg, #6c5ce7, #5c89ff);
  color: white;
  font-weight: 600;
  font-size: 13px;
}

/* ===== CAR CARD ===== */
.car-card {
  height: 100%;
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  transition: 0.35s ease;
}

.car-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(108, 92, 231, 0.45);
}

.car-img {
  width: 100%;
  height: 130px;
  object-fit: contain;
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.6));
}

.car-info h5 {
  margin-top: 14px;
  font-size: 15px;
  font-weight: 600;
}

.type {
  font-size: 12px;
  color: #aab0ff;
}

.price {
  margin: 10px 0;
  font-size: 17px;
  font-weight: 700;
}

.price span {
  font-size: 12px;
  color: #9aa0ff;
}

.search-box.compact input {
  padding: 8px 12px;
  font-size: 12px;
}

.search-box.compact .search-btn {
  padding: 8px 20px;
  font-size: 12px;
}


/* ===== GLASS BUTTON ===== */
.book-btn {
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  font-size: 13px;
  font-weight: 600;
  transition: 0.3s ease;
}

.book-btn:hover {
  background: linear-gradient(135deg, #6c5ce7, #5c89ff);
  box-shadow: 0 10px 30px rgba(108, 92, 231, 0.6);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .filter-sidebar {
    margin-bottom: 20px;
  }

  .search-box {
    flex-direction: column;
  }
}
</style>
<script>
import axios from "axios";

export default {
  name: "CarsPage",

  data() {
    return {
      activeFilter: "All Cars",

      filters: [
        "All Cars",
        "Available",
        "SUV",
        "Sedan",
        "Hatchback",
        "Luxury",
      ],

      cars: [],        // all cars from backend
      loading: false,
    };
  },

  computed: {
    filteredCars() {
      if (this.activeFilter === "All Cars") {
        return this.cars;
      }

      if (this.activeFilter === "Available") {
        return this.cars.filter(
          car => car.status === "Available"
        );
      }

      // category filter
      return this.cars.filter(
        car => car.category === this.activeFilter
      );
    },
  },

  async mounted() {
    await this.fetchCars();
  },

  methods: {
    async fetchCars() {
      try {
        this.loading = true;

        const res = await axios.get(
          "http://localhost:3000/api/cars"
        );

        // 🔥 YOUR API RETURNS { success, cars }
        this.cars = res.data.cars;

      } catch (error) {
        console.error("Failed to fetch cars", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
