<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <!-- kaya yan post kasi nasa loob siya ng for/parang foreach -->
      <SinglePosts :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePosts from "./SinglePosts.vue";
export default {
  props: ["posts"],
  components: { SinglePosts },
  //lagay natin yung posts sa set up function
  setup(props) {},
};
</script>
