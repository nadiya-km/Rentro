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
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- RIGHT SIDE MENU -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>

        <li class="nav-item ml-3">
          <a class="btn btn-outline-light px-3" href="/login">Login</a>
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
.navbar-brand img {
  object-fit: cover;
}
</style>
