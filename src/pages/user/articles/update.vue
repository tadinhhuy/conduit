<script>
import { getArticleDetails } from '@/helpers/articles';
export default {
  components: {
    'v-articles-form': () => import('@/components/articles/form'),
  },
  data() {
    return {
      article: {},
    };
  },
  async created() {
    if (this.$route.params.slug) {
      try {
        this.article = await getArticleDetails(this.$route.params.slug);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<template>
  <v-articles-form :article="article" />
</template>
