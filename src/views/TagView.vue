<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <SpinnerView />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import SpinnerView from "@/components/SpinnerView.vue";
import TagCloud from "@/components/TagCloud.vue";
import getPosts from "@/composables/getPosts";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: { PostList, SpinnerView, TagCloud },
  setup() {
    // gamit tayo ng useRoute para kunin natin yung tag sa index.js sa router
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();
    // gumamit tayo ng computed property para ma filter yung mga posts na merong tags gamit ang useRoute
    const postsWithTag = computed(() => {
      // hetong params.tag kinuha natin yung tag sa index.js kung ano yung nulagay natin na parameter dun
      return posts.value.filter((posts) =>
        posts.tags.includes(route.params.tag)
      );
    });
    return { error, posts, postsWithTag };
  },
};
</script>
<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
