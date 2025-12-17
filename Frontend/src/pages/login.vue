<template>
	<div class="login-wrapper d-flex justify-content-center align-items-center">
		<div class="login-card shadow-lg p-4">
			<!-- Logo -->
			<div class="text-center mb-3">
				<img src="@/assets/images/logo.png" height="60" />
			</div>

			<!-- Title -->
			<h3 class="text-center mb-4 text-light">Welcome Back</h3>

			<!-- Form -->
			<form @submit.prevent="login">
				<div class="form-group">
					<label class="text-light">Email</label>
					<input type="email" class="form-control" placeholder="Enter your email" v-model="email" required />
				</div>

				<div class="form-group mt-3">
					<label class="text-light">Password</label>
					<input type="password" class="form-control" placeholder="Enter your password" v-model="password"
						required />
				</div>

				<button type="submit" class="btn btn-primary btn-block mt-4 login-btn">Login</button>

				<router-link to="/user/forgot-password" class="small forgot">Forgot Password?</router-link>

				<div class="mt-2 text-center text-light small">
					Don't have an account?
					<router-link to="/signup" class="signup-link">Sign Up</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import api from '@/services/api';

export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		async login() {
			try {
				await api.post('/user/login', {
					email: this.email,
					password: this.password,
				});

				this.$router.push('/cars');
			} catch (err) {
				alert(err.response?.data?.message || 'Invalid credentials!');
			}
		},
	},
};
</script>

<style scoped>
/* Background */
.login-wrapper {
	min-height: 100vh;
	background: linear-gradient(135deg, #0a0f24, #1f2937, #0d1b2a);
	padding: 20px;
}

/* Card */
.login-card {
	width: 100%;
	max-width: 420px;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 15px;
	backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.3s ease;
}

.login-card:hover {
	transform: translateY(-3px);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

/* Inputs */
.form-control {
	background: rgba(255, 255, 255, 0.1);
	border: none;
	color: #fff;
}

.form-control:focus {
	background: rgba(255, 255, 255, 0.15);
	outline: none;
	box-shadow: 0 0 5px #39ff14;
}

/* Login Button */
.login-btn {
	background: #39ff14;
	border: none;
	color: #000;
	font-weight: 600;
	transition: 0.2s;
}

.login-btn:hover {
	background: #2dd10f;
}

/* Links */
.forgot {
	color: #bbb;
}

.signup-link {
	color: #39ff14;
	font-weight: 600;
}
</style>
