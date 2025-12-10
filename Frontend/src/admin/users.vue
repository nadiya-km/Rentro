<template>
  <div class="admin-wrapper">

    <!-- SIDEBAR -->
    <sidebar class="sidebar-box" />

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
                  <tr v-for="(user, index) in users" :key="index">
                    <td>{{ index + 1 }}</td>

                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>

                    <td>
                      <span class="badge badge-info">{{ user.bookings }}</span>
                    </td>

                    <td>
                      <span
                        :class="[
                          'badge',
                          user.status === 'Active'
                            ? 'badge-success'
                            : 'badge-danger'
                        ]"
                      >
                        {{ user.status }}
                      </span>
                    </td>

                    <td>{{ user.joined }}</td>

                    <td>
                      <button class="btn btn-sm btn-primary" @click="viewUser(user)">
                        View
                      </button>

                      <button
                        class="btn btn-sm btn-warning ml-1"
                        @click="toggleStatus(index)"
                      >
                        {{ user.status === 'Active' ? 'Block' : 'Unblock' }}
                      </button>

                      <button
                        class="btn btn-sm btn-danger ml-1"
                        @click="deleteUser(index)"
                      >
                        Delete
                      </button>
                    </td>

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
export default {
  data() {
    return {
      users: [
        {
          name: "Arjun Kumar",
          email: "arjun@gmail.com",
          phone: "9876543210",
          bookings: 5,
          status: "Active",
          joined: "2025-01-03",
        },
        {
          name: "Sneha R",
          email: "sneha@gmail.com",
          phone: "9556432211",
          bookings: 2,
          status: "Blocked",
          joined: "2025-01-15",
        }
      ]
    };
  },

  methods: {
    viewUser(user) {
      alert(`Showing details for ${user.name}`);
    },

    toggleStatus(index) {
      this.users[index].status =
        this.users[index].status === "Active" ? "Blocked" : "Active";
    },

    deleteUser(index) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.users.splice(index, 1);
      }
    }
  }
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
