//mas maganda same file name to consts name
import { ref, reactive, computed, watch } from "vue";
const getPosts = () => {
  const posts = ref([]);
  // lagay tayu error handling kapag may error sa pag kuha
  const error = ref(null);

  //use async
  const load = async () => {
    try {
      // same here
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("no data available");
      }
      //get that posts kargahan natin yung consts posts
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

//export natin siya para ma gamit natin siya sa ibang component or page
export default getPosts;
