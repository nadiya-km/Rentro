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
            <th>Action</th>
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
              <button class="view-btn" @click="goToDetails(item.id)">
                View
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: "AdminAllBookings",

  data() {
    return {
      bookings: [
        {
          id: 1,
          user: "Rahul Sharma",
          car: "Toyota Fortuner",
          pickup: "Bengaluru Airport",
          drop: "Whitefield",
          pickupDate: "12 Oct 2024",
          returnDate: "15 Oct 2024",
          payment: "Online Paid",
          paymentColor: "green",
          status: "Completed",
          statusColor: "green",
        },
        {
          id: 2,
          user: "Arun Kumar",
          car: "Honda City",
          pickup: "MG Road",
          drop: "Koramangala",
          pickupDate: "03 Nov 2024",
          returnDate: "05 Nov 2024",
          payment: "Cash on Pickup",
          paymentColor: "yellow",
          status: "Upcoming",
          statusColor: "blue",
        },
        {
          id: 3,
          user: "Meera S",
          car: "Maruti Swift",
          pickup: "Yelahanka",
          drop: "Hebbal",
          pickupDate: "01 Sep 2024",
          returnDate: "03 Sep 2024",
          payment: "Refunded",
          paymentColor: "red",
          status: "Cancelled",
          statusColor: "red",
        },
      ],
    };
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
