import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      user: null,        // logged in user/admin
      isAuthenticated: false,

      users: [],         // admin users list
      bookings: [],      // admin bookings
      stats: null,       // dashboard stats
    };
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },

    LOGOUT(state) {
      state.user = null;
      state.isAuthenticated = false;
    },

    SET_USERS(state, users) {
      state.users = users;
    },

    SET_BOOKINGS(state, bookings) {
      state.bookings = bookings;
    },

    SET_STATS(state, stats) {
      state.stats = stats;
    },
  },

  actions: {
    // 🔐 LOGIN
    async login({ commit }, credentials) {
      const res = await axios.post(
        "http://localhost:3000/api/user/login",
        credentials,
        { withCredentials: true }
      );

      commit("SET_USER", res.data.user);
    },

    // 🔓 LOGOUT
    async logout({ commit }) {
      await axios.post(
        "http://localhost:3000/api/user/logout",
        {},
        { withCredentials: true }
      );
      commit("LOGOUT");
    },

    // 👥 ADMIN USERS
    async fetchUsers({ commit }) {
      const res = await axios.get(
        "http://localhost:3000/api/admin/users",
        { withCredentials: true }
      );
      commit("SET_USERS", res.data.users);
    },

    // 📦 BOOKINGS
    async fetchBookings({ commit }) {
      const res = await axios.get(
        "http://localhost:3000/api/admin/bookings",
        { withCredentials: true }
      );
      commit("SET_BOOKINGS", res.data.bookings);
    },

    // 📊 DASHBOARD STATS
    async fetchStats({ commit }) {
      const res = await axios.get(
        "http://localhost:3000/api/admin/stats",
        { withCredentials: true }
      );
      commit("SET_STATS", res.data);
    },
  },

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
  },
});

export default store;
