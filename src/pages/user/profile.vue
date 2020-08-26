<script>
import { mapState } from 'vuex';

export default {
  components: {
    'v-article-list': () => import('@/components/articles/list'),
  },
  computed: {
    ...mapState('login', ['user']),
    params() {
      return {
        author: this.user.username,
      };
    },
  },
};
</script>

<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img v-if="user.image" :src="user.image" class="user-img" alt="" />
            <img
              v-else
              src="@/assets/placeholder.jpg"
              class="user-img"
              alt=""
            />
            <h4>{{ user.username }}</h4>
            <p>{{ user.bio }}</p>
            <router-link
              class="btn btn-sm btn-outline-secondary action-btn"
              :to="{ name: 'user.settings' }"
              ><i class="ion-gear-a"></i> Edit Profile Settings</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="#@xzcxzcxzcxzcxz"
                  >My Articles</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#@xzcxzcxzcxzcxz/favorites"
                  >Favorited Articles</a
                >
              </li>
            </ul>
          </div>
          <v-article-list :params="params" :perPage="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
