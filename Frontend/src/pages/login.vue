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
					<input
						type="email"
						class="form-control"
						placeholder="Enter your email"
						v-model="email"
						required
					/>
				</div>

				<div class="form-group mt-3">
					<label class="text-light">Password</label>
					<input
						type="password"
						class="form-control"
						placeholder="Enter your password"
						v-model="password"
						required
					/>
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

				this.$router.push('/user/cars');
			} catch (err) {
				alert(err.response?.data?.message || 'Invalid credentials!');
			}
		},
	},
};
</script>

<style scoped>
/* RENTRO Background */
.login-wrapper {
	min-height: 100vh;
	padding: 20px;
	background: radial-gradient(ellipse 60% 30% at 20% 5%, rgba(69, 61, 51, 0.4) 0%, transparent 50%),
		radial-gradient(ellipse 40% 20% at 75% 10%, rgba(54, 48, 37, 0.218) 0%, transparent 60%),
		linear-gradient(145deg, #2a3f52 0%, #1e2532 40%, #15181f 100%);
	color: #fdf4e6;
}

/* RENTRO Glass Card */
.login-card {
	width: 100%;
	max-width: 420px;
	background: rgba(10, 12, 20, 0.95);
	border-radius: 20px;
	backdrop-filter: blur(20px);
	border: 1px solid rgba(254, 215, 165, 0.3);
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.65);
	transition: all 0.3s ease;
	padding: 2.5rem;
}

.login-card:hover {
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
.login-btn {
	background: linear-gradient(135deg, #ff9960, #ff4d30);
	border: none;
	color: #fff;
	font-weight: 600;
	border-radius: 12px;

	font-size: 15px;
	box-shadow: 0 10px 26px rgba(255, 120, 70, 0.4);
	transition: all 0.3s ease;
	width: 100%;
}

.login-btn:hover {
	background: linear-gradient(135deg, #ff4d30, #ff9960);
	transform: translateY(-1px);
	box-shadow: 0 10px 35px rgba(255, 120, 70, 0.6);
}

/* Links */
.forgot {
	color: #f0ddc5;
	text-decoration: none;
	display: block;
	text-align: right;
	margin-top: 8px;
	transition: 0.3s ease;
}

.forgot:hover {
	color: #ff9960;
	text-decoration: underline;
}

.signup-link {
	color: #ff9960;
	font-weight: 600;
	text-decoration: none;
}

.signup-link:hover {
	color: #ffb98a;
	text-decoration: underline;
}

/* Responsive */
@media (max-width: 480px) {
	.login-card {
		margin: 0 10px;
		padding: 2rem;
	}
}
</style>
