<template>
	<div class="car-page">
		<div class="container">
			<div class="glass-layout row">
				<!-- ===== LEFT : CAR DETAILS ===== -->
				<div class="col-lg-7 left-section">
					<!-- Image -->
					<div class="image-box">
						<img :src="images[currentIndex]" />
						<button class="nav prev" @click="prevImage">‹</button>
						<button class="nav next" @click="nextImage">›</button>
					</div>

					<!-- Thumbnails -->
					<div class="thumbs">
						<img
							v-for="(img, i) in images"
							:key="i"
							:src="img"
							:class="{ active: currentIndex === i }"
							@click="currentIndex = i"
						/>
					</div>

					<!-- Car Info -->
					<div class="car-info">
						<h2>{{ car.name }}</h2>

						<div class="meta">
							<span>{{ car.transmission }}</span>
							<span>• {{ car.fuel }}</span>
							<span>• {{ car.seats }} Seats</span>
						</div>

						<p class="desc">{{ car.description }}</p>

						<div class="price">
							₹{{ car.price }}
							<span>/ day</span>
						</div>
					</div>
				</div>

				<!-- ===== RIGHT : BOOKING CARD ===== -->
				<div class="col-lg-5 right-section">
					<div class="booking-card">
						<h3>Book Your Ride</h3>

						<div class="form-group">
							<label>Pickup Location</label>
							<input type="text" v-model="booking.pickupLocation" />
						</div>

						<div class="form-group">
							<label>Drop Location</label>
							<input type="text" v-model="booking.dropLocation" />
						</div>

						<div class="form-group">
							<label>Pickup Date & Time</label>
							<input type="datetime-local" v-model="booking.pickupDateTime" />
						</div>

						<div class="form-group">
							<label>Drop Date & Time</label>
							<input type="datetime-local" v-model="booking.dropDateTime" />
						</div>

						<div class="summary">
							<div>
								<span>Days</span>
								<strong>{{ totalDays }}</strong>
							</div>
							<div>
								<span>Total</span>
								<strong>₹{{ totalPrice }}</strong>
							</div>
						</div>

						<button class="book-btn" @click="confirmBooking">Confirm Booking</button>
					</div>
				</div>
			</div>

			<!-- SUCCESS MODAL -->
			<div v-if="showSuccessModal" class="success-overlay">
				<div class="success-modal">
					<h2>Booking Confirmed 🎉</h2>
					<p>Your car has been booked successfully</p>
					<button @click="closeModal">Done</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.car-page {
	min-height: 100vh;
	padding: 80px 0;
	background: radial-gradient(
			ellipse 60% 30% at 20% 5%,
			rgba(254, 215, 165, 0.4) 0%,
			transparent 50%
		),
		radial-gradient(ellipse 40% 20% at 75% 10%, rgba(175, 159, 139, 0.3) 0%, transparent 60%),
		linear-gradient(145deg, #2a3f52 0%, #1e2532 40%, #15181f 100%);
	color: #fdf4e6;
	font-family: 'Poppins', sans-serif;
}

.glass-layout {
	background: rgba(10, 12, 20, 0.95);
	backdrop-filter: blur(24px);
	border-radius: 26px;
	padding: 30px;
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
	border: 1px solid rgba(254, 215, 165, 0.3);
}

/* LEFT */
.image-box {
	position: relative;
	border-radius: 18px;
	overflow: hidden;
}

.image-box img {
	width: 100%;
	height: 340px;
	object-fit: contain;
}

.nav {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(255, 153, 96, 0.2);
	border: none;
	color: #fdf4e6;
	font-size: 28px;
	padding: 6px 12px;
}

.prev {
	left: 10px;
}

.next {
	right: 10px;
}

.thumbs {
	display: flex;
	gap: 10px;
	margin-top: 14px;
}

.thumbs img {
	width: 70px;
	height: 50px;
	border-radius: 10px;
	opacity: 0.5;
	cursor: pointer;
}

.thumbs img.active {
	opacity: 1;
	border: 2px solid #ff9960;
}

.car-info {
	margin-top: 20px;
}

.car-info h2 {
	color: #fdf4e6;
}

.meta {
	color: #f0ddc5;
	font-size: 14px;
	margin-bottom: 12px;
}

.desc {
	color: #d9cfc0;
	margin-bottom: 16px;
}

.price {
	font-size: 26px;
	font-weight: 700;
	color: #ff9960;
}

/* RIGHT */
.booking-card {
	background: rgba(37, 40, 56, 0.95);
	padding: 24px;
	border-radius: 22px;
	border: 1px solid rgba(254, 215, 165, 0.3);
}

.booking-card h3 {
	color: #fdf4e6;
	margin-bottom: 18px;
}

.form-group label {
	font-size: 13px;
	color: #f0ddc5;
}

.form-group input {
	width: 100%;
	padding: 12px;
	border-radius: 12px;
	border: 1px solid rgba(254, 215, 165, 0.2);
	background: rgba(37, 40, 56, 0.8);
	color: #fdf4e6;
}

.form-group input::placeholder {
	color: #d9cfc0;
}

.summary {
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
	font-size: 18px;
}

.summary span,
.summary strong {
	color: #fdf4e6;
}

.summary strong {
	color: #ff9960;
}

.book-btn {
	width: 100%;
	padding: 14px;
	border-radius: 14px;
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	border: none;
	color: #fff;
	font-weight: 600;
}

/* MODAL */
.success-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
}

.success-modal {
	background: rgba(10, 12, 20, 0.98);
	padding: 30px;
	border-radius: 20px;
	text-align: center;
	border: 1px solid rgba(254, 215, 165, 0.4);
}

.success-modal h2 {
	color: #7bed9f;
}

.success-modal p {
	color: #f0ddc5;
}

.success-modal button {
	background: linear-gradient(135deg, #7bed9f, #4ade80);
	border: none;
	color: #000;
}
</style>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			currentIndex: 0,
			images: [],
			car: {},

			booking: {
				pickupLocation: '',
				dropLocation: '',
				pickupDateTime: '',
				dropDateTime: '',
			},

			showSuccessModal: false,
		};
	},
	computed: {
		totalDays() {
			if (!this.booking.pickupDateTime || !this.booking.dropDateTime) {
				return 0;
			}

			const start = new Date(this.booking.pickupDateTime).getTime();
			const end = new Date(this.booking.dropDateTime).getTime();

			if (isNaN(start) || isNaN(end) || end <= start) {
				return 0;
			}

			const diff = end - start;
			return Math.ceil(diff / (1000 * 60 * 60 * 24));
		},
		totalPrice() {
			if (!this.totalDays || !this.car.price) return 0;
			return this.totalDays * Number(this.car.price);
		},
	},

	async mounted() {
		const carId = this.$route.params.id;
		const res = await axios.get(`http://localhost:3000/api/cars/${carId}`);
		this.car = res.data.car;
		this.images = this.car.images.map((i) => i.url);
	},

	methods: {
		async confirmBooking() {
			try {
				const res = await axios.post(
					'http://localhost:3000/api/bookings',
					{
						carId: this.car._id,
						pickupLocation: this.booking.pickupLocation,
						dropLocation: this.booking.dropLocation,
						pickupDateTime: this.booking.pickupDateTime,
						dropDateTime: this.booking.dropDateTime,
					},
					{ withCredentials: true }
				);

				if (res.data.success) {
					this.showSuccessModal = true;
				}
			} catch (error) {
				alert(error.response?.data?.message || 'Booking failed');
			}
		},
		closeModal() {
			this.showSuccessModal = false;
			this.$router.push('/cars');
		},
		nextImage() {
			this.currentIndex = (this.currentIndex + 1) % this.images.length;
		},
		prevImage() {
			this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
		},
	},
};
</script>
