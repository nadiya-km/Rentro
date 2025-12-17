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

/* Button */
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
</style>
