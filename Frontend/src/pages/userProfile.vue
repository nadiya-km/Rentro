<template>
	<div class="profile-container">
		<h2>User Profile</h2>
		<div v-if="loading">Loading...</div>
		<div v-else-if="error">{{ error }}</div>
		<div v-else>
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
