<script>
import { deleteArticle, getArticleDetails } from '@/helpers/articles';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      article: null,
    };
  },
  async created() {
    this.article = await getArticleDetails(this.$route.params.slug);
  },
  computed: {
    ...mapState('login', ['user']),
    formatedDate() {
      const date = new Date(this.article.createdAt);
      return date.toDateString();
    },
  },
  methods: {
    async onDeleteArticle() {
      await deleteArticle(this.$route.params.slug);
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<template>
  <div>
    <div v-if="article">
      <div class="article-page">
        <div class="banner">
          <div class="container">
            <h1>{{ article.title }}</h1>
            <div class="article-meta">
              <a class="" href="#@xzcxzcxzcxzcxz">
                <img v-if="article.image" :src="article.image" />
                <img v-else src="@/assets/placeholder.jpg" />
              </a>
              <div class="info">
                <a class="author" href="#@xzcxzcxzcxzcxz">{{
                  article.author.username
                }}</a
                ><span class="date">{{ formatedDate }}</span>
              </div>
              <span v-if="article.author.username === user.username"
                ><router-link
                  class="btn btn-outline-secondary btn-sm"
                  :to="{
                    name: 'user.article.update',
                    params: { slug: article.slug },
                  }"
                  ><i class="ion-edit"></i> Edit Article</router-link
                ><button
                  class="btn btn-outline-danger btn-sm"
                  @click="onDeleteArticle"
                >
                  <i class="ion-trash-a"></i>
                  Delete Article
                </button></span
              >
            </div>
          </div>
        </div>
        <div class="container page">
          <div class="row article-content">
            <div class="col-xs-12">
              <div>
                <p>{{ article.body }}</p>
              </div>
              <ul class="tag-list">
                <li v-for="(tag, index) in article.tagList" :key="index">
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="article-actions"></div>
          <div class="row">
            <div class="col-xs-12 col-md-8 offset-md-2">
              <div>
                <!-- <list-errors></list-errors> -->
                <form class="card comment-form">
                  <div class="card-block">
                    <textarea
                      class="form-control"
                      placeholder="Write a comment..."
                      rows="3"
                    ></textarea>
                  </div>
                  <div class="card-footer">
                    <img src="" class="comment-author-img" /><button
                      class="btn btn-sm btn-primary"
                      type="submit"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<style></style>
