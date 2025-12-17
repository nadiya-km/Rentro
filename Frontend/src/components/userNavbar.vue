<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
		<!-- LEFT SIDE LOGO -->
		<a class="navbar-brand d-flex align-items-center" href="#">
			<img src="@/assets/images/logo.png" alt="Logo" height="40" class="mr-2" />
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
					<router-link class="nav-link" to="/">
						<i class="fa fa-home mr-2"></i>
						Home
					</router-link>
				</li>
				<li class="nav-item d-lg-none">
					<router-link class="nav-link" to="/cars">
						<i class="fa fa-book mr-2"></i>
						Cars
					</router-link>
				</li>
				<li class="nav-item d-lg-none">
					<router-link class="nav-link" to="/user/profile">
						<i class="fa fa-car mr-2"></i>
						Profile
					</router-link>
				</li>

				<!-- LOGOUT -->
				<li class="nav-item ml-3">
					<button @click="logout" class="btn btn-danger px-3">Logout</button>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import axios from 'axios';

export default {
	name: 'userNavbar',
	methods: {
		async logout() {
			const confirmLogout = window.confirm('Are you sure you want to logout?');

			if (!confirmLogout) return; // cancel clicked

			try {
				await axios.post('http://localhost:3000/api/user/logout', {}, { withCredentials: true });

				this.$router.push('/login');
			} catch (err) {
				alert('Logout failed');
			}
		},
	},
};
</script>

<style scoped>
.navbar-brand img {
	object-fit: cover;
}
</style>
