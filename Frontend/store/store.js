import { createStore } from 'vuex';
import api from '@/services/api';

const store = createStore({
	state() {
		return {
			loginStatus: null,
		};
	},

	getters: {
		isLoggedIn(state) {
			return !!state.loginStatus;
		},
	},

	mutations: {
		SET_USER(state, loginStatus) {
			state.loginStatus = loginStatus;
		},
		CLEAR_USER(state) {
			state.loginStatus = null;
		},
	},

	actions: {
		login({ commit }, loginStatus) {
			commit('SET_USER', loginStatus);
		},

		async fetchUser({ commit }) {
			try {
				const res = await api.get('/user/login-status', {
					withCredentials: true,
				});
				commit('SET_USER', res.data.loginStatus);
			} catch {
				commit('CLEAR_USER');
			}
		},

		async logout({ commit }) {
			await api.get('/logout');
			commit('CLEAR_USER');
		},
	},
});

export default store;
