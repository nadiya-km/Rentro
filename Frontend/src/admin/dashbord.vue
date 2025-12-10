<template>
  <div class="admin-wrapper">

   <adminNavbar/>
  <sidebar/>

    <!-- MAIN CONTENT -->
    <div class="content">
      <h3 class="mb-4"><strong>Dashboard Overview</strong></h3>

      <!-- STATS CARDS -->
      <div class="row">

        <div class="col-sm-6 col-lg-3 mb-3">
          <div class="stat-box bg1">
            <h4>Total Cars</h4>
            <h2>25</h2>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 mb-3">
          <div class="stat-box bg2">
            <h4>Available Cars</h4>
            <h2>14</h2>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 mb-3">
          <div class="stat-box bg3">
            <h4>Booked Cars</h4>
            <h2>11</h2>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 mb-3">
          <div class="stat-box bg4">
            <h4>Total Users</h4>
            <h2>132</h2>
          </div>
        </div>
      </div>

      <!-- CAR TABLE -->
      <div class="card-box mt-4">
        <h4><strong>Car Status</strong></h4>
        <div class="table-responsive mt-3">
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Car</th>
                <th>Model</th>
                <th>Status</th>
                <th>Price/Day</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Innova Crysta</td>
                <td>2022</td>
                <td><span class="badge badge-success">Available</span></td>
                <td>₹3500</td>
                <td>
                  <button class="btn btn-warning btn-sm">Edit</button>
                  <button class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>

              <tr>
                <td>Fortuner</td>
                <td>2021</td>
                <td><span class="badge badge-danger">Booked</span></td>
                <td>₹5500</td>
                <td>
                  <button class="btn btn-warning btn-sm">Edit</button>
                  <button class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      <!-- USER TABLE -->
      <div class="card-box mt-4">
        <h4><strong>Recent Users</strong></h4>
        <div class="table-responsive mt-3">
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Total Bookings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arun Kumar</td>
                <td>arun@gmail.com</td>
                <td>9876543210</td>
                <td>3</td>
              </tr>

              <tr>
                <td>Sameer</td>
                <td>sam@gmail.com</td>
                <td>9845123456</td>
                <td>1</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
body {
  background: #f4f6f9;
}

.admin-wrapper {
  display: flex;
  width: 100%;
}

/* CONTENT AREA */
.content {
  margin-left: 260px;
  padding: 20px;
  width: calc(100% - 260px);
  transition: all 0.3s ease;
}

/* STAT BOX */
.card-box {
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.1);
}

.stat-box {
  padding: 20px;
  border-radius: 12px;
  color: #fff;
}

.bg1 { background: #2e86de; }
.bg2 { background: #16a085; }
.bg3 { background: #e67e22; }
.bg4 { background: #8e44ad; }

/* ----------------------------------------
   RESPONSIVE FOR MOBILE (< 768px)
----------------------------------------- */
@media (max-width: 768px) {

  /* Sidebar is hidden by default (handled IN sidebar.vue) */
  .content {
    margin-left: 0 !important;    /* No more left spacing */
    width: 100% !important;        /* Full width */
  }

  .admin-wrapper {
    flex-direction: column;
  }
}
</style>


