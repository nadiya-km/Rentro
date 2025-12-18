<template>
	<div class="cars-page">
		<div class="container-fluid mt-4">
			<div class="row">
				<!-- LEFT CAPSULE FILTER BAR -->
				<div class="col-lg-2 col-md-3 filter-sidebar">
					<div class="filter-glass">
						<button
							v-for="filter in filters"
							:key="filter"
							:class="['filter-pill', activeFilter === filter && 'active']"
							@click="activeFilter = filter"
						>
							{{ filter }}
						</button>
					</div>
				</div>

				<!-- RIGHT CONTENT -->
				<div class="col-lg-10 col-md-9">
					<!-- MAIN CONTENT -->
					<div class="content-glass">
						<!-- CAR GRID -->
						<div class="row">
							<!-- CAR GRID -->
							<div
								class="col-xl-3 col-lg-4 col-md-6 mb-4"
								v-for="car in filteredCars"
								:key="car._id"
							>
								<div class="car-card">
									<img
										:src="car.images?.[0]?.url || defaultImage"
										class="car-img"
										alt="car image"
									/>

									<div class="car-info">
										<h5>{{ car.name }}</h5>
										<p class="type">{{ car.category }}</p>

										<span
											:class="[
												'availability',
												car.status === 'Available' ? 'available' : 'unavailable',
											]"
										>
											{{ car.status === 'Available' ? 'Available' : 'Not Available' }}
										</span>

										<div class="price">
											₹{{ car.price }}
											<span>/ day</span>
										</div>

										<button class="book-btn" @click="goToDetails(car._id)">view details</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
* {
	font-family: 'Inter', sans-serif;
}

/* BACKGROUND – RENTRO dusk theme but slightly lighter center */
.cars-page {
	min-height: 100vh;
	padding: 60px 0;
	background: radial-gradient(ellipse 60% 30% at 20% 5%, rgba(69, 61, 51, 0.4) 0%, transparent 50%),
		radial-gradient(ellipse 40% 20% at 75% 10%, rgba(54, 48, 37, 0.218) 0%, transparent 60%),
		linear-gradient(145deg, #2a3f52 0%, #1e2532 40%, #15181f 100%);
	color: #fdf4e6;
}

/* ===== LEFT FILTER SIDEBAR ===== */
.filter-sidebar {
	display: flex;
	justify-content: center;
	height: max-content;
	margin-top: 150px;
}

.filter-glass {
	width: 100%;
	padding: 12px;
	border-radius: 18px;
	background: rgba(10, 12, 20, 0.9); /* darker, opaque base */
	backdrop-filter: blur(18px);
	border: 1px solid rgba(254, 215, 165, 0.25);
	display: flex;
	flex-direction: column;
	gap: 8px;
}

/* base pill */
.filter-pill {
	padding: 10px 16px;
	border-radius: 999px;
	background: #252838; /* solid so text is readable */
	border: 1px solid rgba(254, 215, 165, 0.35);
	color: #f5e1c9;
	font-size: 11px;
	font-weight: 500;
	text-align: left;
	transition: 0.3s ease;
}

.filter-pill:hover {
	background: #31364a;
}

/* active pill with RENTRO accent */
.filter-pill.active {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	color: #ffffff;
	box-shadow: 0 8px 25px rgba(255, 120, 70, 0.7);
	border-color: transparent;
}

/* ===== AVAILABILITY BADGES ===== */
.availability {
	display: inline-block;
	margin-top: 6px;
	padding: 4px 10px;
	border-radius: 999px;
	font-size: 11px;
	font-weight: 600;
	text-transform: uppercase;
}

.available {
	background: rgba(46, 204, 113, 0.16);
	color: #7bed9f;
	border: 1px solid rgba(46, 204, 113, 0.6);
}

.unavailable {
	background: rgba(231, 76, 60, 0.16);
	color: #ff6b6b;
	border: 1px solid rgba(231, 76, 60, 0.6);
}

/* ===== TOP PICKUP PANEL ===== */
.top-glass {
	margin-bottom: 18px;
	padding: 14px;
	border-radius: 20px;
	background: rgba(10, 12, 20, 0.9);
	backdrop-filter: blur(22px);
	border: 1px solid rgba(254, 215, 165, 0.25);
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.55);
}

/* ===== RIGHT CONTENT GLASS ===== */
.content-glass {
	padding: 26px;
	border-radius: 24px;
	background: rgba(10, 12, 20, 0.95);
	backdrop-filter: blur(24px);
	border: 1px solid rgba(254, 215, 165, 0.3);
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.65);
}

/* ===== SEARCH BAR ===== */
.search-box {
	display: flex;
	gap: 12px;
}

.search-box input {
	flex: 1;
	padding: 10px 14px;
	border-radius: 12px;
	border: none;
	background: #252838;
	color: #fdf4e6;
	font-size: 13px;
}

.search-box input::placeholder {
	color: #f0ddc5;
}

.search-btn {
	padding: 10px 26px;
	border-radius: 12px;
	border: none;
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	color: white;
	font-weight: 600;
	font-size: 13px;
	box-shadow: 0 10px 26px rgba(255, 120, 70, 0.7);
}

/* compact */
.search-box.compact input {
	padding: 8px 12px;
	font-size: 12px;
}

.search-box.compact .search-btn {
	padding: 8px 20px;
	font-size: 12px;
}

/* ===== CAR CARD ===== */
.car-card {
	height: 100%;
	padding: 18px;
	border-radius: 20px;
	background: #1b1e2b; /* solid dark card */
	backdrop-filter: blur(18px);
	border: 1px solid rgba(254, 215, 165, 0.25);
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
	transition: 0.35s ease;
}

.car-card:hover {
	transform: translateY(-8px);
	box-shadow: 0 30px 60px rgba(255, 120, 70, 0.5);
}

.car-img {
	width: 100%;
	height: 130px;
	object-fit: contain;
	filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.8));
}

.car-info h5 {
	margin-top: 14px;
	font-size: 15px;
	font-weight: 600;
	color: #fdf4e6;
}

.type {
	font-size: 12px;
	color: #f0ddc5;
}

.price {
	margin: 10px 0;
	font-size: 17px;
	font-weight: 700;
	color: #fed7a5;
}

.price span {
	font-size: 12px;
	color: #f0ddc5;
}

/* ===== GLASS BUTTON ===== */
.book-btn {
	width: 100%;
	padding: 10px;
	border-radius: 12px;
	background: #252838;
	border: 1px solid rgba(254, 215, 165, 0.35);
	color: #fdf4e6;
	font-size: 13px;
	font-weight: 600;
	text-transform: capitalize;
	transition: 0.3s ease;
}

.book-btn:hover {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	border-color: transparent;
	box-shadow: 0 10px 30px rgba(255, 120, 70, 0.7);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
	.filter-sidebar {
		flex-direction: row;
		justify-content: center;
		margin: 20px 0;
		width: 100%;
	}

	.filter-glass {
		flex-direction: row;
		flex-wrap: wrap;
		gap: 6px;
		padding: 8px;
		border-radius: 16px;
	}

	.filter-pill {
		padding: 6px 10px;
		font-size: 10px;
	}

	.search-box {
		flex-direction: column;
		gap: 8px;
	}

	.search-box input {
		width: 100%;
	}

	.search-btn {
		width: 100%;
		padding: 10px;
		font-size: 13px;
	}

	.car-card {
		padding: 16px;
	}

	.car-img {
		height: 120px;
	}

	.car-info h5 {
		font-size: 14px;
	}

	.type {
		font-size: 11px;
	}

	.price {
		font-size: 16px;
	}

	.book-btn {
		padding: 10px;
		font-size: 12px;
	}
}
</style>

<script>
import axios from 'axios';

export default {
	name: 'CarsPage',

	data() {
		return {
			activeFilter: 'All Cars',

			filters: ['All Cars', 'Available', 'SUV', 'Sedan', 'Hatchback', 'Luxury'],

			cars: [], // all cars from backend
			loading: false,
		};
	},

	computed: {
		filteredCars() {
			if (this.activeFilter === 'All Cars') {
				return this.cars;
			}

			if (this.activeFilter === 'Available') {
				return this.cars.filter((car) => car.status === 'Available');
			}

			// category filter
			return this.cars.filter((car) => car.category === this.activeFilter);
		},
	},

	async mounted() {
		await this.fetchCars();
		await this.checkLoginStatus();
	},

	methods: {
		async fetchCars() {
			try {
				this.loading = true;

				const res = await axios.get('http://localhost:3000/api/cars');

				// 🔥 YOUR API RETURNS { success, cars }
				this.cars = res.data.cars;
			} catch (error) {
				console.error('Failed to fetch cars', error);
			} finally {
				this.loading = false;
			}
		},
		// async checkLoginStatus() {
		// 	try {
		// 		await axios.get('http://localhost:3000/api/user/check-auth', { withCredentials: true });
		// 		this.userLoggedIn = true;
		// 	} catch (err) {
		// 		this.userLoggedIn = false;
		// 	}
		// },
		async goToDetails(carId) {
			try {
				// check login
				await axios.get('http://localhost:3000/api/user/check-auth', {
					withCredentials: true,
				});

				// logged-in user
				this.$router.push(`/user/cars/${carId}`);
			} catch {
				// guest user
				this.$router.push(`/cars/${carId}`);
			}
		},
	},
};
</script>
