import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import Home from '../pages/home.vue';
import Login from '@/pages/login.vue';
import Signup from '@/pages/signup.vue';
import Cars from '@/pages/cars.vue';
import Dashbord from '@/admin/dashbord.vue';
import Manage from '@/admin/manage.vue';
import AdminLogin from '@/admin/adminLogin.vue';
import addNewCar from '@/admin/addNewCar.vue';
import userProfile from '@/pages/userProfile.vue';
import CarDetails from '@/pages/CarDetails.vue';



const routes = [
	{ path: '/', component: Home },
	{ path: '/login', component: Login },
	{ path: '/signup', component: Signup },
	{ path: '/cars', component: Cars },
		{
		path: '/profile',
		component: userProfile,

		meta: { requiresUser: true, hideMainNavbar: true, showuserNavbar: true },
	},
	//

	// admin
	{
		path: '/admin/login',
		component: AdminLogin,
		meta: { public: true, hideMainNavbar: true },
	},
	{
		path: '/admin/dashboard',
		component: Dashbord,
		meta: {
			requiresAdmin: true,
			hideMainNavbar: true,
			showAdminNavbar: true,
			showAdminSidebar: true,
		},
	},
	{
		path: '/admin/manageCars',
		component: Manage,
		meta: {
			requiresAdmin: true,
			hideMainNavbar: true,
			showAdminNavbar: true,
			showAdminSidebar: true,
		},
	},
	{
		path: '/admin/addNewCar',
		component: addNewCar,
		meta: {
			requiresAdmin: true,
			hideMainNavbar: true,
			showAdminNavbar: true,
			showAdminSidebar: true,
		},
	},
	{
		path: '/admin/users',
		component: () => import('@/admin/users.vue'),
		meta: {
			requiresAdmin: true,
			hideMainNavbar: true,
			showAdminNavbar: true,
			showAdminSidebar: true,
		},
	},
	{
		path: '/admin/booking',
		component: () => import('@/admin/booking.vue'),
		meta: {
			requiresAdmin: true,
			hideMainNavbar: true,
			showAdminNavbar: true,
			showAdminSidebar: true,
		},
	},
	{
		path: "/admin/edit-car/:id",
		component: () => import("@/admin/editCar.vue"),
	},
	{
		path: "/cars/:id",
		name: "CarDetails",
		component: CarDetails,
	},

	];



const router = createRouter({
	history: createWebHistory(),
	routes,
});

/* admin route protection */
router.beforeEach(async (to, from, next) => {
	if (to.meta.requiresAdmin) {
		try {
			await axios.get('http://localhost:3000/api/admin/check-auth', {
				withCredentials: true,
			});
			next(); // admin verified
		} catch (err) {
			next('/admin/login'); // not admin
		}
	} else {
		next();
	}
});

/* user route protection */
router.beforeEach(async (to, from, next) => {
	if (to.meta.requiresUser) {
		try {
			await axios.get('http://localhost:3000/api/user/check-auth', {
				withCredentials: true,
			});
			next(); // admin verified
		} catch (err) {
			next('/login'); // not admin
		}
	} else {
		next();
	}
});

export default router;
