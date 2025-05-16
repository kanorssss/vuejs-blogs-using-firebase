<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required />
      <label>Content</label>
      <textarea v-model="body" required></textarea>
      <label>Tags(Hit enter to add tag)</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown" />
      <div v-for="tag in tags" :key="tag" class="pill">{{ tag }}</div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import toastr from "toastr";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const router = useRouter();

    const handleKeydown = () => {
      // check natin kung unique yung mga na
      // pupunta sa tags array natin inm anf
      // out pag meron hindi siya mapupunta sa array kapag wala namn masasama siya
      if (!tags.value.includes(tag.value)) {
        //remove natin mga spacing/whitespace sa pag pasok ng data sa array
        tag.value = tag.value.replace(/\s/, "");
        // push natin yung mga data sa tags array kapag unique siya at naka pag enter na yung user
        tags.value.push(tag.value);
      }
      // clear input check
      tag.value = "";
    };
    //lets add db.json
    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };
      //try catch natin para makita natin yung error kung meron o wala
      try {
        await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        });
        // using use router on  composition api
        router.push({ name: "home" });

        title.value = "";
        body.value = "";
        tags.value = [];
      } catch (err) {
        console.log(err);
      }
    };

    return { title, body, tag, handleKeydown, tags, handleSubmit };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
