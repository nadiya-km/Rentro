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
import forgotPassword from '../pages/forgotPassword.vue';
import resetPassword from '../pages/resetPassword.vue';
import CarDetails from '@/pages/CarDetails.vue';
import about from '@/pages/about.vue';
const routes = [
	{
		path: '/', 
	    component: Home 
	},
	{
		path: '/login',
		component: Login,
		meta: { hideMainNavbar: true },
	},
	{ 
		path: '/signup', 
		component: Signup, 
		meta: { hideMainNavbar: true }
	},
	{ 
		path: '/cars', 
		component: Cars,
		meta: { hideMainNavbar: true, showuserNavbar: true }
	},
	{
		path: '/user/profile',
		component: userProfile,
		meta: { 
			requiresUser: true,
			hideMainNavbar: true, 
			showuserNavbar: true 
		},
	},
	{ 
		path: '/about', 
		component: about, 
		meta: { hideMainNavbar: true }
	},
	{
		path: "/cars/:id",
		name: "CarDetails",
		component: CarDetails,
	},
	{
		path: '/admin/login',
		component: AdminLogin,
		meta: { 
			public: true,
			hideMainNavbar: true 
		},
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
		path: '/admin/edit-car/:id',
		component: () => import('@/admin/editCar.vue'),
	},
	{
		path: '/user/forgot-password',
		name: 'ForgotPassword',
		component: forgotPassword,
		meta: {
			hideMainNavbar: true,
		},
	},
	{
		path: '/user/reset-password',
		name: 'ResetPassword',
		component: resetPassword,
		meta: {
			hideMainNavbar: true,
		},
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
