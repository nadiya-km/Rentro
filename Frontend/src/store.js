import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      admin: null,
      user: null,
      isAuthenticated: false,
      role: null, // "admin" | "user"
    };
  },

  mutations: {
    SET_AUTH(state, payload) {
      state.isAuthenticated = true;
      state.role = payload.role;

      if (payload.role === "admin") {
        state.admin = payload.data;
        state.user = null;
      } else {
        state.user = payload.data;
        state.admin = null;
      }
    },

    LOGOUT(state) {
      state.admin = null;
      state.user = null;
      state.isAuthenticated = false;
      state.role = null;
    },
  },

  actions: {
    // 🔐 ADMIN LOGIN
    async adminLogin({ commit }, credentials) {
      const res = await axios.post(
        "http://localhost:3000/api/admin/login",
        credentials,
        { withCredentials: true }
      );

      commit("SET_AUTH", {
        role: "admin",
        data: res.data.admin,
      });
    },

    // 🔐 USER LOGIN
    async userLogin({ commit }, credentials) {
      const res = await axios.post(
        "http://localhost:3000/api/user/login",
        credentials,
        { withCredentials: true }
      );

      commit("SET_AUTH", {
        role: "user",
        data: res.data.user,
      });
    },

    // 🔓 LOGOUT (ADMIN / USER)
    async logout({ commit, state }) {
      if (state.role === "admin") {
        await axios.post(
          "http://localhost:3000/api/admin/logout",
          {},
          { withCredentials: true }
        );
      } else {
        await axios.post(
          "http://localhost:3000/api/user/logout",
          {},
          { withCredentials: true }
        );
      }

      commit("LOGOUT");
    },
  },

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    isAdmin: (state) => state.role === "admin",
    isUser: (state) => state.role === "user",
    currentAdmin: (state) => state.admin,
    currentUser: (state) => state.user,
  },
});

export default store;
