import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('v-header', () => import('./components/layouts/header/header'));
Vue.component('v-footer', () => import('./components/layouts/footer/footer'));
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
