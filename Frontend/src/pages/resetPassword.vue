<template>
	<div class="login-wrapper d-flex justify-content-center align-items-center">
		<div class="login-card shadow-lg p-4">
			<!-- Logo -->
			<div class="text-center mb-3">
				<img src="@/assets/images/logo.png" height="60" />
			</div>

			<!-- Title -->
			<h3 class="text-center mb-4 text-light">Reset Password</h3>

			<form @submit.prevent="resetPassword">
				<div class="form-group">
					<label class="text-light">New Password</label>
					<input
						type="password"
						class="form-control"
						placeholder="Enter new password"
						v-model="password"
						required
					/>
				</div>

				<div class="form-group mt-3">
					<label class="text-light">Confirm Password</label>
					<input
						type="password"
						class="form-control"
						placeholder="Confirm new password"
						v-model="confirmPassword"
						required
					/>
				</div>

				<button type="submit" class="btn btn-primary btn-block mt-4 login-btn">
					Reset Password
				</button>

				<p v-if="message" class="text-success text-center mt-3">
					{{ message }}
				</p>

				<p v-if="error" class="text-danger text-center mt-3">
					{{ error }}
				</p>
			</form>
		</div>
	</div>
</template>

<script>
import api from '@/services/api';

export default {
	name: 'ResetPassword',
	data() {
		return {
			password: '',
			confirmPassword: '',
			message: '',
			error: '',
			token: '',
		};
	},
	created() {
		this.token = this.$route.query.token;

		if (!this.token) {
			this.error = 'Invalid or missing reset token';
		}
	},
	methods: {
		async resetPassword() {
			this.error = '';
			this.message = '';

			if (this.password !== this.confirmPassword) {
				this.error = 'Passwords do not match';
				return;
			}

			try {
				const res = await api.post('/user/reset-password', {
					token: this.token,
					password: this.password,
				});

				this.message = res.data.message;

				setTimeout(() => {
					this.$router.push('/login');
				}, 2000);
			} catch (err) {
				this.error = err.response?.data?.message || 'Password reset failed';
			}
		},
	},
};
</script>

<style scoped>
/* RENTRO Background - matches home/cars */
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
}

.login-card:hover {
	transform: translateY(-6px);
	box-shadow: 0 40px 80px rgba(255, 120, 70, 0.3);
}

/* RENTRO Form Inputs */
.form-group label {
	color: #fdf4e6;
	font-weight: 500;
	margin-bottom: 8px;
	display: block;
}

.form-control {
	background: rgba(37, 40, 56, 0.8);
	border: 1px solid rgba(254, 215, 165, 0.2);
	color: #fdf4e6;
	border-radius: 12px;
	padding: 12px 16px;
	font-size: 14px;
	transition: all 0.3s ease;
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
	padding: 12px;
	font-size: 14px;
	box-shadow: 0 10px 26px rgba(255, 120, 70, 0.4);
	transition: all 0.3s ease;
}

.login-btn:hover {
	background: linear-gradient(135deg, #ff4d30, #ff9960);
	transform: translateY(-1px);
	box-shadow: 0 15px 35px rgba(255, 120, 70, 0.6);
}

.text-success {
	color: #7bed9f !important;
}

.text-danger {
	color: #ff6b6b !important;
}

/* Responsive */
@media (max-width: 480px) {
	.login-card {
		margin: 0 10px;
		padding: 24px;
	}
}
</style>
