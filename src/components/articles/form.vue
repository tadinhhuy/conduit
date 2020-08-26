<script>
import { publishArticle, updateArticle } from '@/helpers/articles';
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      initForm: {
        title: null,
        description: null,
        body: null,
        tagList: [],
        slug: null,
      },
      form: {},
      loading: false,
    };
  },

  computed: {
    isHasArticle() {
      return this.article && this.article.slug;
    },
  },
  created() {
    this.load(this.article);
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true;
        if (this.isHasArticle) {
          await updateArticle(this.form);
          this.$router.push({
            name: 'article.view',
          });
        } else {
          await publishArticle(this.form);
          this.$router.push({ name: 'home' });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    load(data) {
      if (data && data.slug) {
        this.form = { ...data };
      } else {
        this.form = { ...this.initForm };
      }
    },
  },
  watch: {
    article(newValue) {
      this.load(newValue);
    },
  },
};
</script>
<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="form.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="form.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="form.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="form.tagList"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="onSubmit"
                :disabled="loading"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
