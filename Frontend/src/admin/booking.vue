<template>
  <div class="admin-bookings">

    <h2>All Booking Records</h2>

    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Car</th>
            <th>Pickup</th>
            <th>Drop-off</th>
            <th>Pickup Date</th>
            <th>Return Date</th>
            <th>Payment</th>
            <th>Status</th>
            
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in bookings" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.user }}</td>
            <td>{{ item.car }}</td>
            <td>{{ item.pickup }}</td>
            <td>{{ item.drop }}</td>
            <td>{{ item.pickupDate }}</td>
            <td>{{ item.returnDate }}</td>
            <td>
              <span :class="['badge', item.paymentColor]">
                {{ item.payment }}
              </span>
            </td>
            <td>
              <span :class="['badge', item.statusColor]">
                {{ item.status }}
              </span>
            </td>
            <td>
              
            </td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminAllBookings",

  data() {
    return {
      bookings: [],
    };
  },

  async mounted() {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/bookings/admin",
        { withCredentials: true }
      );

      this.bookings = res.data.bookings.map((b) => ({
        id: b._id,
        user: b.user?.name || "N/A",
        car: b.car?.name || "N/A",
        pickup: b.pickupLocation,
        drop: b.dropLocation,
        pickupDate: new Date(b.pickupDateTime).toLocaleDateString(),
        returnDate: new Date(b.dropDateTime).toLocaleDateString(),
        payment: `₹${b.totalAmount}`,
        paymentColor: "green",
        status: "Confirmed",
        statusColor: "green",
      }));
    } catch (err) {
      console.error("Failed to load bookings", err);
    }
  },

  methods: {
    goToDetails(id) {
      this.$router.push(`/admin/bookings/${id}`);
    },
  },
};
</script>

<style scoped>
.admin-bookings {
  margin-left: 260px; /* sidebar gap */
  padding: 20px;
  padding-top: 110px;
  background: #f5f6fa;
  min-height: 100vh;
}

h2 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 18px;
}

.table-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow-x: auto;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: #f1f3f4;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #e5e5e5;
}

th {
  font-weight: 600;
}

/* Badges */
.badge {
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 6px;
  color: #fff;
  font-weight: 500;
}

.green {
  background: #28a745;
}
.red {
  background: #dc3545;
}
.yellow {
  background: #ffc107;
  color: #000;
}
.blue {
  background: #007bff;
}

/* View Button */
.view-btn {
  background: #00aaff;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.2s;
}
.view-btn:hover {
  background: #0088cc;
}

/* Responsive */
@media (max-width: 768px) {
  .admin-bookings {
    margin-left: 0; /* remove sidebar gap on small screens */
  }

  th, td {
    white-space: nowrap;
  }
}
</style>
