import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import tag from './modules/tag';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { login, tag },
});
