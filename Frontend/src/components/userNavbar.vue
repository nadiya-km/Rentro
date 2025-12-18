<template>
	<nav class="navbar navbar-expand-lg navbar-dark fixed-top px-3" :style="navbarStyle">
		<!-- BACK BUTTON -->
		<button
			v-if="showBack"
			@click="goBack"
			class="btn btn-outline-light back-btn d-flex align-items-center"
		>
			<i class="fa fa-arrow-left me-1"></i>
			<
		</button>

		<!-- LOGO -->
		<RouterLink class="navbar-brand d-flex align-items-center" to="/">
			<img src="@/assets/images/logo2.png" alt="Logo" height="40" />
		</RouterLink>

		<!-- MOBILE TOGGLE -->
		<button class="navbar-toggler" type="button" @click="isOpen = !isOpen">
			<span class="navbar-toggler-icon"></span>
		</button>

		<!-- NAV MENU -->
		<div
			:class="['collapse navbar-collapse justify-content-end', isOpen && 'show']"
			:style="isOpen ? mobileMenuStyle : {}"
		>
			<ul class="navbar-nav mx-auto">
				<li class="nav-item d-lg-none">
					<RouterLink class="nav-link" to="/user/profile">Profile</RouterLink>
				</li>
			</ul>

			<ul class="navbar-nav align-items-center">
				<li class="nav-item d-none d-lg-block ms-3">
					<RouterLink to="/user/profile" class="btn profile-btn px-3">
						<i class="fa fa-car me-2"></i>
						Profile
					</RouterLink>
				</li>

				<li class="nav-item ms-3">
					<button @click="logout" class="btn logout-btn px-3">Logout</button>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import axios from 'axios';

export default {
	name: 'userNavbar',
	data() {
		return {
			isOpen: false,
			showBack: false,
			navbarStyle: {
				backgroundColor: 'rgba(0,0,0,0.6)',
				backdropFilter: 'blur(10px)',
				WebkitBackdropFilter: 'blur(10px)',
				borderRadius: '0 0 8px 8px',
			},
			mobileMenuStyle: {
				backgroundColor: 'rgba(0, 0, 0, 0.6)',
				backdropFilter: 'blur(10px)',
				WebkitBackdropFilter: 'blur(10px)',
				borderRadius: '8px',
				padding: '10px',
			},
		};
	},
	mounted() {
		this.showBack = this.$route.path !== '/';
	},
	methods: {
		goBack() {
			this.$router.back();
		},
		async logout() {
			const confirmLogout = window.confirm('Are you sure you want to logout?');
			if (!confirmLogout) return;

			try {
				await axios.post('http://localhost:3000/api/user/logout', {}, { withCredentials: true });
				this.$router.push('/login');
			} catch (err) {
				alert('Logout failed');
			}
		},
	},
};
</script>

<style scoped>
.navbar {
	background-color: transparent !important;
}

/* Links */
.nav-link {
	color: white !important;
	font-weight: 500;
}

.nav-link:hover {
	color: #ff4d30 !important;
}

/* Logo */
.navbar-brand img {
	object-fit: contain;
}

/* Back Button */
.back-btn {
	font-size: 0.9rem;
	padding: 0.25rem 0.6rem;
	margin-right: 15px; /* GAP between back button and logo */
}

/* Profile Button Custom */
.profile-btn {
	background-color: #3b3b46; /* Blue */
	color: white;
	border: none;
	border-radius: 14px;
}

.profile-btn:hover {
	background-color: #4b4c4d;
	color: white;
}
.back-btn:hover {
	background-color: #7c7d7f;
	color: rgb(219, 215, 215);
}

/* Logout Button Custom */
.logout-btn {
	background-color: #832e21; /* Orange-red */
	color: white;
	border: none;
	margin: 10px;
	border-radius: 14px;
}

.logout-btn:hover {
	background-color: #e1dbd8;
	color: rgb(105, 78, 78);
}
</style>
