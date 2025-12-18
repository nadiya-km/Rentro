<template>
	<nav class="navbar navbar-expand-lg navbar-dark fixed-top px-3" :style="navbarStyle">
		<!-- LOGO -->
		<RouterLink class="navbar-brand d-flex align-items-center" to="/">
			<img src="@/assets/images/logo2.png" alt="Logo" height="40" />
		</RouterLink>

		<!-- MOBILE TOGGLE -->
		<button class="navbar-toggler" type="button" @click="isOpen = !isOpen">
			<span class="navbar-toggler-icon"></span>
		</button>

		<!-- CENTER + RIGHT MENU -->
		<div :class="['collapse navbar-collapse', isOpen && 'show']">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item">
					<RouterLink class="nav-link" to="/">Home</RouterLink>
				</li>

				<li class="nav-item">
					<RouterLink class="nav-link" to="/cars">Cars</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink class="nav-link" to="/about">About</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink class="nav-link" to="/contact">Contact</RouterLink>
				</li>
			</ul>

			<ul class="navbar-nav">
				<li class="nav-item ms-3">
					<RouterLink class="btn btn-outline-light btn-danger px-3 rounded-pill" to="/login">
						Login
					</RouterLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			isOpen: false,
			navbarStyle: {
				backgroundColor: 'rgba(0,0,0,0.6)', // semi-dark for readability
				backdropFilter: 'blur(10px)', // glass effect
				WebkitBackdropFilter: 'blur(10px)', // Safari support
				borderRadius: '0 0 10px 10px',
			},
		};
	},
};
</script>

<style scoped>
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
