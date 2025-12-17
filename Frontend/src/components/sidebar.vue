<template>
	<div>
		<!-- Toggle Button (only visible on small screens) -->
		<button class="toggle-btn btn btn-dark" @click="isOpen = !isOpen">
			<i class="fa fa-bars"></i>
		</button>

		<!-- SIDEBAR -->
		<div :class="['sidebar', { 'sidebar-open': isOpen }]">
			<h4 class="text-center mb-4">Admin Panel</h4>

			<router-link to="/admin/dashboard">
				<i class="fa fa-home mr-2"></i>
				Dashboard
			</router-link>

			<router-link to="/admin/manageCars">
				<i class="fa fa-car mr-2"></i>
				Manage Cars
			</router-link>

			<router-link to="/admin/addNewCar">
				<i class="fa fa-plus mr-2"></i>
				Add New Car
			</router-link>

			<router-link to="/admin/users">
				<i class="fa fa-users mr-2"></i>
				Users
			</router-link>

			<router-link to="/admin/booking">
				<i class="fa fa-book mr-2"></i>
				Bookings
			</router-link>
		</div>
	</div>
</template>


<script>
export default {
	data() {
		return {
			isOpen: false, // sidebar hidden on mobile
		};
	},
};
</script>

<style>
/* MAIN SIDEBAR */
.sidebar {
	height: 100vh;
	background: #000;
	color: #fff;
	position: fixed;
	width: 240px;
	margin-top: 40px;
	left: 0;
	transition: all 0.3s ease-in-out;
	z-index: 1000;
}

/* LINKS */
.sidebar a {
	color: #fff;
	display: block;
	padding: 13px 20px;
	font-size: 15px;
	border-bottom: 1px solid #222;
	text-decoration: none;
}

.sidebar a:hover {
	background: #111;
}

/* TOGGLE BUTTON */
.toggle-btn {
	position: fixed;
	top: 15px;
	left: 15px;
	z-index: 2000;
	display: none;
}

/* ----------- MOBILE VIEW ----------- */
@media (max-width: 768px) {

	/* Hide sidebar by default */
	.sidebar {
		left: -260px;
	}

	/* Show when toggled */
	.sidebar-open {
		left: 0;
	}

	/* Show toggle button */
	.toggle-btn {
		display: block;
	}
}
</style>
