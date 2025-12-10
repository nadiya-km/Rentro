<template>
  <div class="search-page">

    <!-- ==========================
        TOP SEARCH BAR
    =========================== -->
    <div class="search-bar container-fluid py-3">
      <div class="row justify-content-center">

        <div class="col-md-3 mb-2">
          <input type="text" class="form-control input-dark" placeholder="Pick-up Location" />
        </div>

        <div class="col-md-2 mb-2">
          <input type="date" class="form-control input-dark" />
        </div>

        <div class="col-md-2 mb-2">
          <input type="date" class="form-control input-dark" />
        </div>

        <div class="col-md-2 mb-2">
          <button class="btn btn-search w-100">Search</button>
        </div>

      </div>
    </div>

    <div class="container-fluid mt-4">
      <div class="row">

        <!-- ==========================
            LEFT FILTER SIDEBAR
        =========================== -->
        <div class="col-md-3 mb-4">
          <div class="filter-box">

            <h5>Filters</h5>
            <hr />

            <!-- Car Type -->
            <p class="filter-title">Car Type</p>
            <div>
              <label><input type="checkbox" />  SUV</label><br />
              <label><input type="checkbox" />  Sedan</label><br />
              <label><input type="checkbox" />  Hatchback</label>
            </div>

            <hr />

            <!-- Passengers -->
            <p class="filter-title">Passengers</p>
            <label><input type="radio" name="pass" />  4 Seats</label><br />
            <label><input type="radio" name="pass" />  6 Seats</label><br />
            <label><input type="radio" name="pass" />  7 Seats</label>

            <hr />

            <!-- Transmission -->
            <p class="filter-title">Transmission</p>
            <label><input type="checkbox" /> Automatic</label><br />
            <label><input type="checkbox" /> Manual</label>

          </div>
        </div>

        <!-- ==========================
            RIGHT SIDE CAR LIST
        =========================== -->
        <div class="col-md-9">

          <div class="row">

            <div v-for="car in cars" :key="car.id" class="col-md-4 col-sm-6 mb-4">

              <div class="car-card">
                
                <img :src="car.image" class="car-img" />

                <div class="car-content">
                  <h5 class="car-name">{{ car.name }}</h5>

                  <p class="car-desc">
                    {{ car.description }}
                  </p>

                  <div class="car-details">
                    <span><i class="fa fa-user"></i> {{ car.seats }} Seats</span>
                    <span><i class="fa fa-cog"></i> {{ car.transmission }}</span>
                  </div>

                  <div class="price-box">
                    <h4>{{ car.price }} <span>/ day</span></h4>
                  </div>

                  <button class="btn btn-view w-100 mt-2">View Deal</button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SearchResults",
  data() {
    return {
      cars: [
        {
          id: 1,
          name: "Fiat Panda",
          seats: 4,
          transmission: "Automatic",
          price: "59.5 €",
          description: "Fuel efficient | Great for short trips",
          image: require("@/assets/images/car1.png")
        },
        {
          id: 2,
          name: "Fiat Panda",
          seats: 4,
          transmission: "Manual",
          price: "59.5 €",
          description: "Compact | Affordable travel",
          image: require("@/assets/images/car1.png")
        },
        {
          id: 3,
          name: "Fiat Panda",
          seats: 4,
          transmission: "Automatic",
          price: "59.5 €",
          description: "Comfort & Economy",
          image: require("@/assets/images/car1.png")
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Whole Page */
.search-page {
  background: #0b0b0b;
  color: white;
  min-height: 100vh;
}

/* =============================
    TOP SEARCH BAR
============================= */
.input-dark {
  background: #1a1a1a;
  border: 1px solid #333;
  color: white;
}

.btn-search {
  background: #1ea7ff;
  color: black;
  font-weight: 600;
}

/* =============================
   SIDEBAR
============================= */
.filter-box {
  background: #111;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #222;
}

.filter-title {
  font-weight: 600;
  margin-bottom: 8px;
}

/* =============================
   CAR CARDS
============================= */
.car-card {
  background: #1a1a1a;
  border-radius: 14px;
  padding-bottom: 10px;
  overflow: hidden;
  border: 1px solid #2a2a2a;
  transition: 0.3s;
}

.car-card:hover {
  transform: translateY(-5px);
  border-color: #1ea7ff;
}

.car-img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  background: #0d0d0d;
}

.car-content {
  padding: 15px;
}

.car-name {
  font-size: 18px;
  font-weight: 600;
}

.car-desc {
  color: #ccc;
  font-size: 14px;
  margin-top: 5px;
}

.car-details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #bbb;
  font-size: 13px;
}

.price-box h4 {
  margin-top: 10px;
  color: #1ea7ff;
}

.price-box span {
  color: #999;
}

.btn-view {
  background: #1ea7ff;
  color: black;
  font-weight: 600;
  border-radius: 8px;
}
</style>
