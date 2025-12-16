<template>
  <div class="cars-page">

    <div class="container-fluid">
      <div class="row">

        <!-- LEFT CAPSULE FILTER BAR -->
        <div class="col-lg-1 col-md-2 filter-sidebar">
          <div class="filter-glass">
            <button
              v-for="filter in filters"
              :key="filter"
              :class="['filter-pill', activeFilter === filter && 'active']"
              @click="activeFilter = filter"
            >
              {{ filter }}
            </button>
          </div>
        </div>

        <!-- RIGHT CONTENT -->
        <div class="col-lg-11 col-md-10">
         <!-- TOP PICKUP PANEL -->
          <div class="top-glass">
            <div class="search-box compact">
              <input type="text" placeholder="Location" />
              <input type="date" />
              <input type="date" />
              <button class="search-btn">Search</button>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <div class="content-glass">

            <!-- CAR GRID -->


            <!-- CAR GRID -->
            <div class="row mt-4">
              <div
                class="col-xl-3 col-lg-4 col-md-6 mb-4"
                v-for="car in cars"
                :key="car.id"
              >
                <div class="car-card">
                  <img :src="car.image" class="car-img" />

                  <div class="car-info">
                    <h5>{{ car.name }}</h5>
                    <p class="type">{{ car.type }}</p>

                    <div class="price">
                      ₹{{ car.price }} <span>/ day</span>
                    </div>

                    <button class="book-btn">Book Now</button>
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
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.6));
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
  import car3 from "@/assets/images/car3.jpg";
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
        "Premium",
      ],

      cars: [
        {
          id: 1,
          name: "Ferrari",
          type: "Premium",
          price: 725,
          image: car3,
        },
        {
          id: 2,
          name: "Rolls Royce",
          type: "Premium",
          price: 825,
          image: "https://i.ibb.co/6t8P0mF/rolls.png",
        },
        {
          id: 3,
          name: "Porsche",
          type: "Sedan",
          price: 725,
          image: "https://i.ibb.co/w0X5wYk/porsche.png",
        },
        {
          id: 4,
          name: "BMW",
          type: "SUV",
          price: 825,
          image: "https://i.ibb.co/5YV9Zht/bmw.png",
        },
      ],
    };
  },
};
</script>

