<template>
	<div class="admin-login-container">
		<div class="login-card">
			<div class="text-center mb-4">
				<img src="@/assets/images/logo.png" alt="Logo" class="logo" />
				<h3 class="title">Admin Login</h3>
				<p class="subtitle">Access your dashboard securely</p>
			</div>

			<form @submit.prevent="loginAdmin">
				<div class="form-group">
					<label>Email</label>
					<input
						type="email"
						class="form-control"
						v-model="email"
						placeholder="Enter admin email"
						required
					/>
				</div>

				<div class="form-group mt-3">
					<label>Password</label>
					<input
						type="password"
						class="form-control"
						v-model="password"
						placeholder="Enter password"
						required
					/>
				</div>

				<button class="btn btn-dark btn-block mt-4 login-btn">Login</button>
			</form>

			<p class="text-center mt-3 forgot-text">Forgot password?</p>
		</div>
	</div>
</template>

<script>
import api from '@/services/api';

export default {
	name: 'AdminLogin',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		async loginAdmin() {
			try {
				const res = await api.post(
					'/api/admin/login',
					{ email: this.email, password: this.password },
					{ withCredentials: true } // imp
				);

				// alert(res.data.message);

				// Redirect to admin dashboard
				this.$router.push('/admin/dashboard');
			} catch (err) {
				console.log(err.response.data);
				alert(err.response.data.message || 'Login failed');
			}
		},
	},
};
</script>

<style scoped>
/* MAIN CONTAINER */
.admin-login-container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background: linear-gradient(135deg, #0f0f0f, #2c2c2c);
}

/* CARD */
.login-card {
	width: 100%;
	max-width: 420px;
	padding: 30px;
	background: #fff;
	border-radius: 20px;
	box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
	animation: fadeIn 0.5s ease-in-out;
}

/* LOGO */
.logo {
	width: 70px;
	height: 70px;
	object-fit: contain;
}

/* TITLES */
.title {
	margin-top: 10px;
	font-weight: 700;
}

.subtitle {
	font-size: 14px;
	color: #555;
}

/* INPUTS */
.form-control {
	height: 45px;
	border-radius: 10px;
}

/* LOGIN BUTTON */
.login-btn {
	height: 45px;
	border-radius: 10px;
	font-size: 16px;
	font-weight: 600;
	transition: 0.3s;
}

.login-btn:hover {
	background: #333;
}

/* FORGOT */
.forgot-text {
	font-size: 13px;
	color: #666;
	cursor: pointer;
}

/* ANIMATION */
@keyframes fadeIn {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

/* RESPONSIVE */
@media (max-width: 480px) {
	.login-card {
		padding: 25px;
		border-radius: 16px;
	}
	.title {
		font-size: 22px;
	}
}
</style>
