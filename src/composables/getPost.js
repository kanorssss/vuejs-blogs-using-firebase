import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  // lagay tayu error handling kapag may error sa pag kuha
  const error = ref(null);

  //use async
  const load = async () => {
    try {
      //mag lagay tayu ng delay para sa pag fetch ng data sa database or api natin/spinner
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("post does not exist");
      }
      //get that posts kargahan natin yung consts posts
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};
export default getPost;
