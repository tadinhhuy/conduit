<script>
import { getArticles } from '@/helpers/articles';
import { mapState } from 'vuex';

export default {
  components: {
    'v-pagination': () => import('@/components/ui/pagination/pagination'),
    'v-article-item': () => import('@/components/articles/item'),
  },
  props: {
    perPage: {
      type: Number,
      default: 10,
    },
    params: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      articles: [],
      page: 1,
      total: 0,
      loading: false,
    };
  },
  computed: {
    ...mapState('tag', ['tag']),
  },
  async created() {
    await this.load();
  },

  methods: {
    async load() {
      const offset = (this.page - 1) * this.perPage;
      try {
        this.loading = true;
        const data = await getArticles({
          ...this.params,
          limit: this.perPage,
          offset,
          tag: this.tag,
        });
        this.articles = data.articles;
        this.total = data.articlesCount;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    onUpdate(data) {
      const index = this.articles.findIndex(x => x.slug === data.slug);
      if (index !== -1) {
        this.$set(this.articles, index, data);
      }
    },
  },
  watch: {
    async tag() {
      await this.load();
    },
    async params() {
      await this.load();
    },
  },
};
</script>

<template>
  <div>
    <div v-if="loading">
      loading...
    </div>
    <div v-else>
      <div v-for="(item, index) in articles" :key="index">
        <v-article-item @update="onUpdate" :article="item" />
      </div>
      <v-pagination
        @input="load"
        v-model="page"
        :total="total"
        :perPage="perPage"
      />
    </div>
  </div>
</template>
