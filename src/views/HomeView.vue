<template>
  <div class="home">
    <h3>Homepage</h3>
  </div>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length" class="layout">
    <PostList :posts="posts" />
    <TagCloud :posts="posts" />
  </div>
  <div v-else>
    <SpinnerView />
    <!-- Loading.... -->
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
// lets use that composables
import getPosts from "@/composables/getPosts";
import SpinnerView from "@/components/SpinnerView.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  name: "home",
  components: { PostList, SpinnerView, TagCloud },
  // using props on composition api
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
