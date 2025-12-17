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
					<input type="email" class="form-control" placeholder="Enter your email" v-model="email" required />
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
/* SAME STYLES AS LOGIN */

.login-wrapper {
	min-height: 100vh;
	background: linear-gradient(135deg, #0a0f24, #1f2937, #0d1b2a);
	padding: 20px;
}

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

.forgot {
	color: #bbb;
	cursor: pointer;
}

.forgot:hover {
	color: #39ff14;
	text-decoration: underline;
}
</style>
