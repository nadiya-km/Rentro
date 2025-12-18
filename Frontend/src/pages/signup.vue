<template>
	<div class="signup-wrapper d-flex justify-content-center align-items-center">
		<div class="signup-card shadow-lg p-4">
			<!-- Logo -->
			<div class="text-center mb-3">
				<img src="@/assets/images/logo.png" height="60" />
			</div>

			<h3 class="text-center mb-4 text-light">Create Account</h3>

			<form @submit.prevent="signup">
				<div class="form-group">
					<label class="text-light">Full Name</label>
					<input
						type="text"
						class="form-control"
						placeholder="Enter your full name"
						v-model="name"
						required
					/>
				</div>

				<div class="form-group mt-3">
					<label class="text-light">Email</label>
					<input
						type="email"
						class="form-control"
						placeholder="Enter your email"
						v-model="email"
						required
					/>
				</div>

				<div class="form-group mt-3">
					<label class="text-light">Phone</label>
					<input
						type="tel"
						class="form-control"
						placeholder="Enter your phone number"
						v-model="phone"
						required
					/>
				</div>

				<div class="form-group mt-3">
					<label class="text-light">Password</label>
					<input
						type="password"
						class="form-control"
						placeholder="Create a password"
						v-model="password"
						required
					/>
				</div>

				<div class="form-group mt-3">
					<label class="text-light">Confirm Password</label>
					<input
						type="password"
						class="form-control"
						placeholder="Re-enter password"
						v-model="confirmPassword"
						required
					/>
				</div>

				<button type="submit" class="btn btn-primary btn-block mt-4 signup-btn">Sign Up</button>

				<div class="mt-3 text-center text-light small">
					Already have an account?
					<router-link to="/login" class="login-link">Login</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import api from '@/services/api';

export default {
	name: 'Signup',
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
		};
	},
	methods: {
		async signup() {
			if (this.password !== this.confirmPassword) {
				alert('Passwords do not match');
				return;
			}

			try {
				const res = await api.post('/user/register', {
					name: this.name,
					email: this.email,
					phone: this.phone,
					password: this.password,
				});

				// alert(res.data.message || 'Registered successfully!');

				// Redirect to login page
				this.$router.push('/login');
			} catch (err) {
				alert(err.response?.data?.message || 'Error occurred!');
			}
		},
	},
};
</script>

<style scoped>
/* RENTRO Background */
.signup-wrapper {
	min-height: 100vh;
	padding: 20px;
	background: radial-gradient(ellipse 60% 30% at 20% 5%, rgba(69, 61, 51, 0.4) 0%, transparent 50%),
		radial-gradient(ellipse 40% 20% at 75% 10%, rgba(54, 48, 37, 0.218) 0%, transparent 60%),
		linear-gradient(145deg, #2a3f52 0%, #1e2532 40%, #15181f 100%);
	color: #fdf4e6;
}

/* RENTRO Glass Card */
.signup-card {
	width: 100%;
	max-width: 460px;
	background: rgba(10, 12, 20, 0.95);
	border-radius: 20px;
	backdrop-filter: blur(20px);
	border: 1px solid rgba(254, 215, 165, 0.3);
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.65);
	transition: all 0.3s ease;
	padding: 2.5rem;
}

.signup-card:hover {
	transform: translateY(-6px);
	box-shadow: 0 40px 80px rgba(255, 120, 70, 0.3);
}

/* Labels */
.form-group label {
	color: #fdf4e6;
	font-weight: 500;
	margin-bottom: 8px;
	display: block;
}

/* RENTRO Form Inputs */
.form-control {
	background: rgba(37, 40, 56, 0.8);
	border: 1px solid rgba(254, 215, 165, 0.2);
	color: #fdf4e6;
	border-radius: 12px;
	padding: 12px 16px;
	font-size: 14px;
	transition: all 0.3s ease;
	width: 100%;
}

.form-control::placeholder {
	color: #d9cfc0;
}

.form-control:focus {
	background: rgba(37, 40, 56, 1);
	border-color: #ff9960;
	box-shadow: 0 0 0 3px rgba(255, 153, 96, 0.2);
	outline: none;
}

/* RENTRO Orange Button */
.signup-btn {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	border: none;
	color: #fff;
	font-weight: 600;
	border-radius: 12px;
	padding: 12px;
	font-size: 15px;
	box-shadow: 0 10px 26px rgba(255, 120, 70, 0.4);
	transition: all 0.3s ease;
	width: 100%;
}

.signup-btn:hover {
	background: linear-gradient(135deg, #ff4d30, #ff9960);
	transform: translateY(-1px);
	box-shadow: 0 15px 35px rgba(255, 120, 70, 0.6);
}

/* Links */
.login-link {
	color: #ff9960;
	font-weight: 600;
	text-decoration: none;
}

.login-link:hover {
	color: #ffb98a;
	text-decoration: underline;
}

/* Responsive */
@media (max-width: 480px) {
	.signup-card {
		margin: 0 10px;
		padding: 2rem;
	}
}
</style>
