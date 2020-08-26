const state = {
  tag: null,
};

const mutations = {
  SET_TAG(state, tag) {
    state.tag = tag;
  },
};

export default {
  state,
  mutations,
  namespaced: true,
};
