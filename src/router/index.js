import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home";
import Search from "@/views/Search/Search";
import Play from "@/views/Play";
Vue.use(VueRouter);

/* const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" '../views/AboutView.vue')
  }
] */

const router = new VueRouter({
  routes: [
    { path: "/play", component: Play },
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home, meta: { title: "首页" }, props: true },
    {
      path: "/search",
      component: Search,
      meta: { title: "搜索" },
      props: true,
    },
  ],
});

export default router;
