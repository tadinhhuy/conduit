<script>
import { mapGetters, mapState } from 'vuex';
export default {
  computed: {
    ...mapGetters('login', ['isLoggedIn']),
    ...mapState('login', ['user']),
  },
};
</script>

<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >conduit</router-link
      >
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'user.article.create' }"
              ><i class="ion-compose"></i> New Post</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'user.settings' }"
              ><i class="ion-gear-a"></i> Settings</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'user.profile' }">{{
              user.username
            }}</router-link>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'auth.login' }"
              >Sign in</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'auth.register' }"
              >Sign up</router-link
            >
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style></style>
