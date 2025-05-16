<template>
  <NavbarView />
  <RouterView />
</template>
<script>
import NavbarView from "./components/NavbarView.vue";

export default {
  components: { NavbarView },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
