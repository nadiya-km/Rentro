<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top px-3">

    <!-- LEFT: LOGO IMAGE (from Navbar 2) -->
    <RouterLink class="navbar-brand d-flex align-items-center" to="/">
      <img
        src="@/assets/images/logo2.png"
        alt="Logo"
        height="40"
      />
    </RouterLink>

    <!-- MOBILE TOGGLE -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- CENTER + RIGHT MENU -->
    <div class="collapse navbar-collapse" id="navbarContent">

      <!-- CENTER MENU (from Navbar 1) -->
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About Us</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link text-danger fw-semibold" to="/services">
            Service
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/cars">Cars</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </li>
      </ul>

      <!-- RIGHT SIDE (from Navbar 2) -->
      <ul class="navbar-nav">
        <li class="nav-item ms-3">
          <RouterLink class="btn btn-outline-light btn-danger px-3" to="/login">
            Login
          </RouterLink>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background-color: transparent !important;
}

.nav-link {
  color: white !important;
  font-weight: 500;
}

.nav-link:hover {
  color: #ff4d30 !important;
}

.navbar-brand img {
  object-fit: contain;
}
</style>
