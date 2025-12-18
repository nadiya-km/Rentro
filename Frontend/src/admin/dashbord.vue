<template>
	<div class="admin-wrapper">
		<!-- MAIN CONTENT -->
		<div class="content">
			<h3 class="mb-4"><strong>Dashboard Overview</strong></h3>

			<!-- STATS CARDS -->
			<div class="row">
				<div class="col-sm-6 col-lg-3 mb-3">
					<div class="stat-box bg1">
						<h4>Total Cars</h4>
						<h2>{{ stats.totalCars }}</h2>
					</div>
				</div>

				<div class="col-sm-6 col-lg-3 mb-3">
					<div class="stat-box bg2">
						<h4>Available Cars</h4>
						<h2>{{ stats.availableCars }}</h2>
					</div>
				</div>

				<div class="col-sm-6 col-lg-3 mb-3">
					<div class="stat-box bg3">
						<h4>Booked Cars</h4>
						<h2>{{ stats.bookedCars }}</h2>
					</div>
				</div>

				<div class="col-sm-6 col-lg-3 mb-3">
					<div class="stat-box bg4">
						<h4>Total Users</h4>
						<h2>{{ stats.totalUsers }}</h2>
					</div>
				</div>
			</div>

			<!-- REVENUE SECTION  -->
			<div class="card-box mt-4">
				<h4><strong>Revenue Overview</strong></h4>

				<div class="row mt-3">
					<div class="col-md-4 mb-3">
						<div class="stat-box bg1">
							<h5>Today Revenue</h5>
							<h3>₹{{ revenue.today }}</h3>
						</div>
					</div>

					<div class="col-md-4 mb-3">
						<div class="stat-box bg2">
							<h5>This Month</h5>
							<h3>₹{{ revenue.weekly }}</h3>
						</div>
					</div>

					<div class="col-md-4 mb-3">
						<div class="stat-box bg3">
							<h5>Total Revenue</h5>
							<h3>₹{{ revenue.total }}</h3>
						</div>
					</div>
				</div>
			</div>

			<!-- RECENTLY ADDED CARS -->
			<div class="card-box mt-4">
				<h4><strong>Recently Added Cars</strong></h4>

				<div class="table-responsive mt-3">
					<table class="table table-bordered">
						<thead class="thead-dark">
							<tr>
								<th>Car Name</th>
								<th>Model</th>
								<th>Price / Day</th>
								<th>Status</th>
								<th>Added Date</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="car in recentCars" :key="car._id">
								<td>{{ car.name }}</td>
								<td>{{ car.year }}</td>
								<td>₹{{ car.price }}</td>
								<td>
									<span
										class="badge"
										:class="
											car.status === 'Available'
												? 'badge-success'
												: car.status === 'Booked'
												? 'badge-danger'
												: 'badge-warning'
										"
									>
										{{ car.status }}
									</span>
								</td>
								<td>{{ formatDate(car.createdAt) }}</td>
							</tr>

							<tr v-if="recentCars.length === 0">
								<td colspan="5" class="text-center">No cars added yet</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- USER TABLE (UNCHANGED) -->
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
							<tr v-for="user in recentUsers" :key="user._id">
								<td>{{ user.name }}</td>
								<td>{{ user.email }}</td>
								<td>{{ user.phone || '—' }}</td>
								<td>{{ user.bookingsCount }}</td>
							</tr>

							<tr v-if="recentUsers.length === 0">
								<td colspan="4" class="text-center">No users found</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
// import adminNavbar from "@/components/adminNavbar.vue";
// import sidebar from "@/components/sidebar.vue";

export default {
	name: 'AdminDashboard',
	//   components: {
	//     adminNavbar,
	//     sidebar,
	//   },

	data() {
		return {
			recentCars: [],
			recentUsers: [], // ✅ ADDED

			stats: {
				totalCars: 0,
				availableCars: 0,
				bookedCars: 0,
				totalUsers: 0, //  ADDED
			},
			revenue: {
				today: 0,
				weekly: 0,
				monthly: 0,
				total: 0,
			},
		};
	},

	mounted() {
		this.fetchRecentCars();
		this.fetchCarStats();
		this.fetchRecentUsers();
		this.fetchRevenue();
	},

	methods: {
		async fetchRecentCars() {
			try {
				const res = await axios.get('http://localhost:3000/api/cars/recent');
				this.recentCars = res.data.cars;
			} catch (error) {
				console.error('Failed to fetch recent cars', error);
			}
		},

		async fetchCarStats() {
			try {
				const res = await axios.get('http://localhost:3000/api/cars/stats');
				this.stats.totalCars = res.data.stats.totalCars;
				this.stats.availableCars = res.data.stats.availableCars;
				this.stats.bookedCars = res.data.stats.bookedCars;
			} catch (error) {
				console.error('FAILED TO FETCH STATS', error);
			}
		},

		// ✅ ADDED
		async fetchRecentUsers() {
			try {
				const res = await axios.get('http://localhost:3000/api/admin/users/recent', {
					withCredentials: true,
				});
				this.recentUsers = res.data.users;
				this.stats.totalUsers = res.data.totalUsers;
			} catch (error) {
				console.error('FAILED TO FETCH USERS', error);
			}
		},
		async fetchRevenue() {
			try {
				const res = await axios.get('http://localhost:3000/api/admin/revenue', {
					withCredentials: true,
				});
				this.revenue = res.data.revenue;
			} catch (error) {
				console.error('FAILED TO FETCH REVENUE', error);
			}
		},

		formatDate(date) {
			return new Date(date).toLocaleDateString('en-IN', {
				day: '2-digit',
				month: 'short',
				year: 'numeric',
			});
		},
	},
};
</script>

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
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}

.stat-box {
	padding: 20px;
	border-radius: 12px;
	color: #fff;
}

.bg1 {
	background: #2e86de;
}
.bg2 {
	background: #16a085;
}
.bg3 {
	background: #e67e22;
}
.bg4 {
	background: #8e44ad;
}

@media (max-width: 768px) {
	/* Sidebar is hidden by default (handled IN sidebar.vue) */
	.content {
		margin-left: 0 !important;
		width: 100% !important;
	}

	.admin-wrapper {
		flex-direction: column;
	}
}
</style>
