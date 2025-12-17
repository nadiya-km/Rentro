<template>
  <div class="admin-wrapper">

    <!-- SIDEBAR -->
    <!-- <sidebar class="sidebar-box" /> -->

    <!-- MAIN -->
    <div class="content">
      <div class="container-fluid mt-4">

        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h3 class="font-weight-bold">Manage Users</h3>
        </div>

        <!-- Users Table -->
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Bookings</th>
                    <th>Status</th>
                    <th>Joined</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(user, index) in users" :key="user._id">
                    <td>{{ index + 1 }}</td>

                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone || "—" }}</td>

                    <td>
                      <span class="badge badge-info">
                        {{ user.bookingsCount }}
                      </span>
                    </td>


                    <td>
                      <span :class="[ 'badge', user.status === 'Active' ? 'badge-success' : 'badge-danger' ]">
                        {{ user.status || "Active" }}
                      </span>
                    </td>

                    <td>{{ formatDate(user.createdAt) }}</td>

                    <td>

                      <button class="btn btn-sm btn-danger ml-1" @click="deleteUser(user)">
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr v-if="users.length === 0">
                    <td colspan="8" class="text-center">No users found</td>
                  </tr>
                </tbody>


              </table>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";
import sidebar from "@/components/sidebar.vue";

export default {
  // components: {
  //   sidebar,
  // },

  data() {
    return {
      users: [], // ✅ dynamic users
    };
  },

  mounted() {
    this.fetchUsers(); // ✅ load users on page load
  },

  methods: {
    async fetchUsers() {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/admin/users",
          { withCredentials: true } // 🔐 admin auth
        );
        this.users = res.data.users;
      } catch (error) {
        console.error("FAILED TO FETCH USERS", error);
      }
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },

    viewUser(user) {
      alert(`Showing details for ${user.name}`);
    },

    async toggleStatus(user) {
      try {
        await axios.put(
          `http://localhost:3000/api/admin/users/${user._id}/toggle`,
          {},
          { withCredentials: true }
        );
        this.fetchUsers(); // refresh list
      } catch (error) {
        console.error("FAILED TO TOGGLE STATUS", error);
      }
    },

    async deleteUser(user) {
      if (!confirm("Are you sure you want to delete this user?")) return;

      try {
        await axios.delete(
          `http://localhost:3000/api/admin/users/${user._id}`,
          { withCredentials: true }
        );
        this.fetchUsers(); // refresh list
      } catch (error) {
        console.error("FAILED TO DELETE USER", error);
      }
    },
  },
};
</script>

<style scoped>
.admin-wrapper {
  display: flex;
}

.sidebar-box {
  width: 240px;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
}

.content {
  margin-left: 240px;
  padding: 20px;
  padding-top: 70px;
  width: calc(100% - 240px);
  transition: 0.3s ease-in-out;
}

/* MOBILE */
@media (max-width: 768px) {
  .sidebar-box {
    display: none;
  }

  .content {
    margin-left: 0 !important;
    width: 100% !important;
  }
}
</style>
