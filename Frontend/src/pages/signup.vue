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
/* Background */
.signup-wrapper {
	min-height: 100vh;
	padding: 20px;
	background: linear-gradient(135deg, #0a0f24, #1f2937, #0d1b2a);
}

/* Card */
.signup-card {
	width: 100%;
	max-width: 460px;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 15px;
	backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.3s ease;
}

.signup-card:hover {
	transform: translateY(-3px);
	box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.5);
}

/* Inputs */
.form-control {
	background: rgba(255, 255, 255, 0.1);
	border: none;
	color: white;
}

.form-control:focus {
	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 0 6px #39ff14;
	outline: none;
}

/* Button */
.signup-btn {
	background: #39ff14;
	border: none;
	color: #000;
	font-weight: 600;
	transition: 0.3s;
}

.signup-btn:hover {
	background: #2dd10f;
}

/* Links */
.login-link {
	color: #39ff14;
	font-weight: 600;
}
</style>
