<script>
import { likeArticle, unlikeArticle } from '@/helpers/articles';
export default {
  props: {
    article: Object,
  },
  data() {
    return {};
  },
  computed: {
    formatedDate() {
      const date = new Date(this.article.createdAt);
      return date.toDateString();
    },
    tagList() {
      return this.article.tagList;
    },
  },
  methods: {
    async toggleFavoriteArticle() {
      const { slug } = this.article;
      const data = this.article.favorited
        ? await unlikeArticle(slug)
        : await likeArticle(slug);
      this.$emit('update', data);
    },
  },
};
</script>

<template>
  <div class="article-preview">
    <div class="article-meta">
      <a class="" href="#@enixan25"
        ><img v-if="article.author.image" :src="article.author.image" />
        <img v-else src="@/assets/placeholder.jpg" />
      </a>
      <div class="info">
        <a class="author" href="#@enixan25">{{
          article.author ? article.author.username : 'N/A'
        }}</a>
        <span class="date">{{ formatedDate }}</span>
      </div>
      <div class="pull-xs-right">
        <button
          class="btn btn-sm btn-outline-primary"
          :class="{ 'btn-outline-primary': article.favorited }"
          @click.stop="toggleFavoriteArticle"
        >
          <i class="ion-heart"></i>&nbsp;{{ article.favoritesCount }}
        </button>
      </div>
    </div>
    <router-link
      :to="{ name: 'article.view', params: { slug: article.slug } }"
      class="preview-link"
    >
      <h1>
        {{ article.title }}
      </h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>

      <ul class="tag-list" v-if="article.tagList">
        <li
          v-for="(tag, index) in article.tagList"
          :key="index"
          class="tag-default tag-pill tag-outline"
        >
          {{ tag }}
        </li>
      </ul>
    </router-link>
  </div>
</template>

<style></style>
