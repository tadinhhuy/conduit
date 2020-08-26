<script>
export default {
  props: {
    value: Number,
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pages() {
      return new Array(Math.ceil(this.total / this.perPage));
    },
  },
  methods: {
    onPageChange(page) {
      this.$emit('input', page);
    },
  },
};
</script>

<template>
  <ul class="pagination">
    <li
      v-for="(a, index) in pages"
      :key="index"
      class="page-item"
      :class="{ active: index + 1 === value }"
    >
      <div class="page-link" @click="onPageChange(index + 1)">
        {{ index + 1 }}
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.pagination {
  .page-item {
    color: #5cb85c;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
