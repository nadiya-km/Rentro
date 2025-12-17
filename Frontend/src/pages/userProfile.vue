<template>
	<div class="profile-wrapper d-flex justify-content-center align-items-center">
		<div class="profile-card shadow-lg p-4">
			<h3 class="text-center text-light mb-4">User Profile</h3>

			<div v-if="loading" class="text-center text-light">Loading...</div>

			<div v-else-if="error" class="text-danger text-center">
				{{ error }}
			</div>

			<div v-else class="profile-details text-light">
				<p>
					<strong>Name:</strong>
					{{ user.name }}
				</p>
				<p>
					<strong>Email:</strong>
					{{ user.email }}
				</p>
				<p>
					<strong>Role:</strong>
					{{ user.role }}
				</p>
				<!-- 
				<button class="btn logout-btn w-100 mt-4" @click="logout">Logout</button> -->
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref({});
const loading = ref(true);
const error = ref('');

axios.defaults.withCredentials = true;

const fetchProfile = async () => {
	try {
		const res = await axios.get('http://localhost:3000/api/user/profile');
		user.value = res.data.user;
	} catch (err) {
		error.value = 'Not authenticated';
	} finally {
		loading.value = false;
	}
};

onMounted(fetchProfile);
</script>

<style scoped>
/* Background */
.profile-wrapper {
	min-height: 100vh;
	background: linear-gradient(135deg, #0a0f24, #1f2937, #0d1b2a);
	padding: 20px;
}

/* Card */
.profile-card {
	width: 100%;
	max-width: 420px;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 15px;
	backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.3s ease;
}

.profile-card:hover {
	transform: translateY(-3px);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

/* Text */
.profile-details p {
	margin-bottom: 12px;
	font-size: 15px;
}

/* Logout Button */
.logout-btn {
	background: #ff4d4d;
	border: none;
	color: #fff;
	font-weight: 600;
	transition: 0.2s;
}

.logout-btn:hover {
	background: #e63939;
}
</style>
