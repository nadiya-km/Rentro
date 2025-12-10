import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Login from "@/pages/login.vue";
import Signup from "@/pages/signup.vue";
import Cars from "@/pages/cars.vue";
import Dashbord from "@/admin/dashbord.vue";
import Manage from "@/admin/manage.vue";
import AdminLogin from "@/admin/adminLogin.vue";
import addNewCar from "@/admin/addNewCar.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
   {
    path: "/login",
    name: "login",
    component: Login,
  },
   {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
   {
    path: "/cars",
    name: "cars",
    component: Cars,
  },
  {
    path: "/adminLogin",
    name: "adminLogin",
    component: AdminLogin,
     meta: {
    hideMainNavbar: true,     // hide user navbar
    showAdminNavbar: false,   // hide admin navbar
  },
},
 {
  path: "/admin",
  name: "adminDashboard",
  component:Dashbord,
  meta: {
    hideMainNavbar: true,
    showAdminNavbar: true,
    showAdminSidebar: true
  },
},

 {
  path: "/admin/manageCars",
  name: "manage",
  component:Manage,
  meta: {
    hideMainNavbar: true,
    showAdminNavbar: true,
    showAdminSidebar: true
  },
},
 {
  path: "/admin/addNewCar",
  name: "addNewCar",
  component: addNewCar,
  meta: {
    hideMainNavbar: true,
    showAdminNavbar: true,
    showAdminSidebar: true
  },
},
{
  path: "/admin/users",
  name: "users",
  component: () => import("@/admin/users.vue"),
  meta: {
    hideMainNavbar: true,
    showAdminNavbar: true,
    showAdminSidebar: true
  },
},
{
  path: "/admin/booking",
  name: "booking",
  component: () => import("@/admin/booking.vue"),
  meta: {
    hideMainNavbar: true,
    showAdminNavbar: true,
    showAdminSidebar: true
  },
}



];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
