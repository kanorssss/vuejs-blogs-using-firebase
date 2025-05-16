import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import toastr from "toastr";
toastr.options = {
  closeButton: true,
  progressBar: true,
  positionClass: "toast-top-right",
  timeOut: 3000,
};
createApp(App).use(router).mount("#app");
