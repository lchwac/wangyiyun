import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import flexible from "@/mobile/flexible";
import reset from "@/styles/reset.css";
import "@/utils/vant.js";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
