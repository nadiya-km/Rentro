<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
		<!-- LEFT SIDE LOGO -->
		<a class="navbar-brand d-flex align-items-center" href="/">
			<img src="@/assets/images/logo2.png" alt="Logo" height="40" class="mr-2" />
		</a>

		<!-- MOBILE TOGGLE -->
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#adminNavbar"
			aria-controls="adminNavbar" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<!-- NAV MENU -->
		<div class="collapse navbar-collapse justify-content-end" id="adminNavbar">
			<ul class="navbar-nav">
				<!-- HOME (Visible Always) -->

				<!-- ADMIN LINKS (ONLY ON SMALL SCREENS) -->
				<li class="nav-item d-lg-none">
					<router-link class="nav-link" to="/admin/dashboard">
						<i class="fa fa-home mr-2"></i>
						Dashboard
					</router-link>
				</li>

				<li class="nav-item d-lg-none">
					<router-link class="nav-link" to="/admin/manageCars">
						<i class="fa fa-car mr-2"></i>
						Manage Cars
					</router-link>
				</li>

				<li class="nav-item d-lg-none">
					<router-link class="nav-link" to="/admin/addNewCar">
						<i class="fa fa-plus mr-2"></i>
						Add New Car
					</router-link>
				</li>

				<li class="nav-item d-lg-none">
					<router-link class="nav-link" to="/admin/users">
						<i class="fa fa-users mr-2"></i>
						Users
					</router-link>
				</li>

				<li class="nav-item d-lg-none">
					<router-link class="nav-link" to="/admin/booking">
						<i class="fa fa-book mr-2"></i>
						Bookings
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
	name: 'adminNavbar',
	methods: {
		async logout() {
			const confirmLogout = window.confirm('Are you sure you want to logout?');

			if (!confirmLogout) return; // cancel clicked

			try {
				await axios.post('http://localhost:3000/api/admin/logout', {}, { withCredentials: true });

				this.$router.push('/admin/login');
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
