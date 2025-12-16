<template>
	<div class="profile-container">
		<h2>User Profile</h2>

		<div v-if="loading">Loading...</div>

		<div v-else-if="error" class="error">
			{{ error }}
		</div>

		<div v-else class="profile-card">
			<p>
				<strong>User ID:</strong>
				{{ user.id }}
			</p>
			<p>
				<strong>Role:</strong>
				{{ user.role }}
			</p>

			<button @click="logout">Logout</button>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref({});
const loading = ref(true);
const error = ref('');

// VERY IMPORTANT (cookie auth)
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

const logout = async () => {
	try {
		await axios.post('http://localhost:3000/api/user/logout');
		window.location.href = '/login';
	} catch (err) {
		console.error(err);
	}
};

onMounted(fetchProfile);
</script>

<style scoped>
.profile-container {
	max-width: 400px;
	margin: 80px auto;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	font-family: sans-serif;
}

.profile-card p {
	margin: 10px 0;
}

button {
	margin-top: 15px;
	padding: 8px 15px;
	border: none;
	background: #111;
	color: white;
	border-radius: 5px;
	cursor: pointer;
}

.error {
	color: red;
}
</style>