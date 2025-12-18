<template>
  <div class="profile-container">
    <h2>User Profile</h2>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else>
      <!-- PROFILE FORM -->
      <form @submit.prevent="updateProfile" class="profile-card">
        <label>Name</label>
        <input v-model="form.name" type="text" required />

        <label>Email</label>
        <input :value="user.email" disabled />

        <label>Phone</label>
        <input v-model="form.phone" type="text" />

        <button type="submit" :disabled="saving">
          {{ saving ? "Saving..." : "Update Profile" }}
        </button>
      </form>

      <!-- BOOKINGS -->
      <h3 class="mt-4">My Bookings</h3>

      <div v-if="bookings.length === 0" class="text-muted">
        No bookings found
      </div>

      <div v-for="booking in bookings" :key="booking._id" class="booking-card">
        <p><strong>Car:</strong> {{ booking.car.name }}</p>
        <p><strong>Pickup:</strong> {{ formatDate(booking.pickupDateTime) }}</p>
        <p><strong>Return:</strong> {{ formatDate(booking.dropDateTime) }}</p>
        <p><strong>Total:</strong> ₹{{ booking.totalAmount }}</p>
        <span class="badge">{{ booking.status }}</span>
      </div>

      <button class="logout-btn" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

axios.defaults.withCredentials = true;

const user = ref({});
const bookings = ref([]);
const form = ref({ name: "", phone: "" });

const loading = ref(true);
const saving = ref(false);
const error = ref("");

const fetchProfile = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/user/profile");
    user.value = res.data.user;
    bookings.value = res.data.bookings;

    form.value.name = user.value.name;
    form.value.phone = user.value.phone || "";
  } catch (err) {
    error.value = "Please login again";
  } finally {
    loading.value = false;
  }
};

const updateProfile = async () => {
  try {
    saving.value = true;
    const res = await axios.put(
      "http://localhost:3000/api/user/profile",
      form.value
    );
    user.value = res.data.user;
    alert("Profile updated");
  } catch (err) {
    alert("Failed to update profile");
  } finally {
    saving.value = false;
  }
};

const logout = async () => {
  await axios.post("http://localhost:3000/api/user/logout");
  window.location.href = "/login";
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN");

onMounted(fetchProfile);
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.profile-card {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}

button {
  padding: 8px 15px;
}

.booking-card {
  background: #f7f7f7;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.logout-btn {
  margin-top: 20px;
  background: #e74c3c;
  color: white;
}
</style>
