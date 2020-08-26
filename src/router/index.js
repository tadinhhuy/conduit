import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../layouts/app'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../pages/home/index'),
      },

      //user
      {
        path: '/user/article/create',
        name: 'user.article.create',
        component: () => import('../pages/user/articles/create'),
      },
      {
        path: '/user/article/update/:slug',
        name: 'user.article.update',
        component: () => import('../pages/user/articles/update'),
      },
      {
        path: '/user/settings',
        name: 'user.settings',
        component: () => import('../pages/user/setting'),
      },
      {
        path: '/user/profile',
        name: 'user.profile',
        component: () => import('../pages/user/profile'),
      },

      //articles
      {
        path: '/article/:slug',
        name: 'article.view',
        component: () => import('../pages/articles/view/index'),
      },

      // auth
      {
        path: '/login',
        name: 'auth.login',
        component: () => import('../pages/auth/login/index'),
      },
      {
        path: '/register',
        name: 'auth.register',
        component: () => import('../pages/auth/register/index'),
      },
      { path: '*', redirect: '/' },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  await store.dispatch('login/init');
  next();
});

export default router;
