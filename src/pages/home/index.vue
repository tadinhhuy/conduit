<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
    'v-banner': () => import('@/components/ui/banner/banner'),
    'v-article-list': () => import('@/components/articles/list'),
    'v-article-tags': () => import('@/components/articles/tags'),
  },
  computed: {
    ...mapState('tag', ['tag']),
  },
  methods: {
    onRemoveTag() {
      this.$store.commit('tag/SET_TAG', null);
    },
  },
};
</script>

<template>
  <div class="home-page">
    <v-banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <template>
                  <div class="nav-link nav-btn">
                    Your Feed
                  </div>
                </template>
                <div
                  class="nav-link nav-btn"
                  :class="{ active: !tag }"
                  @click="onRemoveTag"
                >
                  Global Feed
                </div>
                <div v-if="tag" class="nav-link" :class="{ active: !!tag }">
                  #&nbsp;{{ tag }}
                </div>
              </li>
            </ul>
          </div>
          <v-article-list />
        </div>
        <div class="col-md-3">
          <v-article-tags />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.article-preview {
  text-align: left;
}
.feed-toggle {
  .nav-pills {
    .nav-btn {
      cursor: pointer;
    }
    .nav-item {
      display: flex;
    }
  }
}
</style>
