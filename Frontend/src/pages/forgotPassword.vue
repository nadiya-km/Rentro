<template>
	<div class="login-wrapper d-flex justify-content-center align-items-center">
		<div class="login-card shadow-lg p-4">
			<!-- Logo -->
			<div class="text-center mb-3">
				<img src="@/assets/images/logo.png" height="60" />
			</div>

			<!-- Title -->
			<h3 class="text-center mb-2 text-light">Forgot Password</h3>
			<p class="text-center text-muted small mb-4">
				Enter your registered email to receive a reset link
			</p>

			<!-- Form -->
			<form @submit.prevent="sendResetLink">
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

				<button type="submit" class="btn btn-primary btn-block mt-4 login-btn" :disabled="loading">
					{{ loading ? 'Sending...' : 'Send Reset Link' }}
				</button>

				<div v-if="success" class="mt-3 text-center text-success small">
					{{ success }}
				</div>

				<div v-if="error" class="mt-3 text-center text-danger small">
					{{ error }}
				</div>

				<div class="mt-3 text-center">
					<a @click.prevent="$router.push('/login')" class="small forgot">Back to Login</a>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import api from '@/services/api';

export default {
	name: 'ForgotPassword',
	data() {
		return {
			email: '',
			loading: false,
			success: '',
			error: '',
		};
	},
	methods: {
		async sendResetLink() {
			this.loading = true;
			this.success = '';
			this.error = '';

			try {
				const res = await api.post('/user/forgot-password', {
					email: this.email,
				});
				this.success = res.data.message;
			} catch (err) {
				this.error = err.response?.data?.message || 'Something went wrong';
			} finally {
				this.loading = false;
			}
		},
	},
};
</script>

<style scoped>
.login-wrapper {
	min-height: 100vh;
	padding: 20px;
	/* RENTRO dusk gradient */
	background: radial-gradient(ellipse 60% 30% at 20% 5%, rgba(69, 61, 51, 0.4) 0%, transparent 50%),
		radial-gradient(ellipse 40% 20% at 75% 10%, rgba(54, 48, 37, 0.218) 0%, transparent 60%),
		linear-gradient(145deg, #2a3f52 0%, #1e2532 40%, #15181f 100%);
	color: #fdf4e6;
}

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

.login-btn:hover:not(:disabled) {
	background: linear-gradient(135deg, #ff4d30, #ff9960);
	transform: translateY(-1px);
	box-shadow: 0 15px 35px rgba(255, 120, 70, 0.6);
}

.login-btn:disabled {
	opacity: 0.7;
	cursor: not-allowed;
}

.text-success {
	color: #7bed9f !important;
}

.text-danger {
	color: #ff6b6b !important;
}

.forgot {
	color: #f0ddc5;
	cursor: pointer;
	text-decoration: none;
	transition: 0.3s ease;
}

.forgot:hover {
	color: #ff9960;
	text-decoration: underline;
}

@media (max-width: 480px) {
	.login-card {
		margin: 0 10px;
		padding: 24px;
	}
}
</style>
