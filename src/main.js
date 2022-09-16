import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import flexible from "@/mobile/flexible";
import reset from "@/styles/reset.css";

import {
  Icon,
  Col,
  Row,
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
} from "vant";
import { Image as VanImage } from "vant";

Vue.use(VanImage);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
