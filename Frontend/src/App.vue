<template>
   <div>
    <!-- MAIN NAVBAR (visible on user pages only) -->
    <Navbar v-if="!$route.meta.hideMainNavbar" />

    <!-- ADMIN NAVBAR (visible only on admin pages) -->
    <adminNavbar v-if="$route.meta.showAdminNavbar" />

     <!-- Show admin sidebar -->
    <Sidebar v-if="$route.meta.showAdminSidebar" />

    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import adminNavbar from "@/components/adminNavbar.vue";
import Sidebar from "./components/sidebar.vue";

export default {
  components: {
    Navbar,
    adminNavbar,
    Sidebar
  },
};
</script>
