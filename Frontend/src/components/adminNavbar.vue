<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">

    <!-- LEFT SIDE LOGO -->
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img
        src="@/assets/images/logo.png"
        alt="Logo"
        height="40"
        class="mr-2"
      />
    </a>

    <!-- MOBILE TOGGLE -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#adminNavbar"
      aria-controls="adminNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- NAV MENU -->
    <div class="collapse navbar-collapse justify-content-end" id="adminNavbar">
      <ul class="navbar-nav">

        <!-- HOME (Visible Always) -->
       

        <!-- ADMIN LINKS (ONLY ON SMALL SCREENS) -->
        <li class="nav-item d-lg-none">
          <a class="nav-link" href="/admin/dashboard">
            <i class="fa fa-home mr-2"></i>Dashboard
          </a>
        </li>

        <li class="nav-item d-lg-none">
          <a class="nav-link" href="/admin/manageCars">
            <i class="fa fa-car mr-2"></i>Manage Cars
          </a>
        </li>

        <li class="nav-item d-lg-none">
          <a class="nav-link" href="/admin/add-car">
            <i class="fa fa-plus mr-2"></i>Add New Car
          </a>
        </li>

        <li class="nav-item d-lg-none">
          <a class="nav-link" href="/admin/users">
            <i class="fa fa-users mr-2"></i>Users
          </a>
        </li>

        <li class="nav-item d-lg-none">
          <a class="nav-link" href="/admin/bookings">
            <i class="fa fa-book mr-2"></i>Bookings
          </a>
        </li>

        <!-- LOGOUT BUTTON (Optional) -->
        <li class="nav-item ml-3 d-none d-lg-block">
          <a class="btn btn-danger px-3" href="/logout">Logout</a>
        </li>

        <!-- LOGOUT (MOBILE) -->
        <li class="nav-item d-lg-none mt-2 mb-2">
          <a class="btn btn-danger btn-block" href="/logout">Logout</a>
        </li>

      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: "adminNavbar",
};
</script>

<style scoped>
.navbar-brand img {
  object-fit: cover;
}
</style>
