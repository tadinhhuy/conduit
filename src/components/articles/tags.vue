<script>
import { getTags } from '@/helpers/articles';

export default {
  data() {
    return {
      tagsList: [],
    };
  },
  async created() {
    this.tagsList = await getTags();
  },
  methods: {
    onChangeTag(tag) {
      this.$store.commit('tag/SET_TAG', tag);
    },
  },
};
</script>

<template>
  <div class="sidebar">
    <p>Popular Tags</p>
    <div class="tag-list">
      <div
        v-for="(tag, index) in tagsList"
        :key="index"
        class="tag-default tag-pill"
        @click="onChangeTag(tag)"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sidebar {
  .tag-list {
    .tag-default {
      cursor: pointer;
      &:hover {
        background: #687077;
      }
    }
  }
}
</style>
