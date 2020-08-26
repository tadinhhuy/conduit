import axios from '../../services/axios';
import { setAuthToken, checkToken, removeAuthToken } from '../../helpers/auth';
import ENDPOINTS from '../../constants/endpoints';
const state = {
  user: null,
  login_fail: false,
  register_fail: false,
};

const getters = {
  isLoggedIn(state) {
    return state.user !== null;
  },
};
const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_LOGIN_FAIL(state) {
    state.login_fail = true;
  },

  SET_REGISTER_FAIL(state) {
    state.register_fail = true;
  },
};
const actions = {
  async login({ commit }, form) {
    try {
      const { data, status } = await axios.post(ENDPOINTS.USERS.LOGIN, {
        user: form,
      });
      if (status === 200) {
        setAuthToken(data.user.token);
        commit('SET_USER', data.user);
        return data;
      }
    } catch (error) {
      commit('SET_LOGIN_FAIL');
      return Promise.reject(error);
    }
  },
  async getUser({ commit }) {
    try {
      const { data } = await axios.get(ENDPOINTS.GET_USER);
      commit('SET_USER', data.user);
    } catch (error) {
      console.log(error);
    }
  },
  async init({ getters, dispatch }) {
    if (!getters.isLoggedIn && checkToken()) {
      await dispatch('getUser');
    }
  },
  logout({ commit }) {
    try {
      commit('SET_USER', null);
      removeAuthToken();
    } catch (error) {
      console.log(error);
    }
  },
  async updateUser({ commit }, form) {
    try {
      const { data } = await axios.put(ENDPOINTS.GET_USER, {
        user: form,
      });
      commit('SET_USER', data.user);
      return data.user;
    } catch (error) {
      console.log(error);
    }
  },
  async registerUser({ commit }, form) {
    try {
      const data = await axios.post(ENDPOINTS.GET_USERS, {
        user: form,
      });
      return data;
    } catch (error) {
      commit('SET_REGISTER_FAIL');
      return Promise.reject(error);
    }
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
