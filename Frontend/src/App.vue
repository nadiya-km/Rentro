<template>
	<div>
		<Navbar v-if="!$route.meta.hideMainNavbar" />

		<!-- ADMIN NAVBAR  -->
		<adminNavbar v-if="$route.meta.showAdminNavbar" />

		<!-- user  -->
		<userNavbar v-if="$route.meta.showUserNavbar" />

		<!-- Show admin sidebar -->
		<Sidebar v-if="$route.meta.showAdminSidebar" />

		<router-view />
	</div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import adminNavbar from '@/components/adminNavbar.vue';
import userNavbar from './components/userNavbar.vue';
import Sidebar from './components/sidebar.vue';

export default {
	components: {
		Navbar,
		adminNavbar,
		userNavbar,
		Sidebar,
	},
};
</script>
<style>
/* body {
   background: linear-gradient(
  180deg,
  #C8C6D0 5%,
  #232727 35%,
  #232727 55%,
  #C8C6D0 75%,
  #0D1D25 100%
);

  } */
</style>
