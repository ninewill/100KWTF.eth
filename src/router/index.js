import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    //component: HomeView
    component: () =>
      import(/* webpackChunkName: "testpage1" */ "../views/HomeView.vue"),
  },
  {
    path: "/testpage1",
    name: "testpage1",
    component: () =>
      import(/* webpackChunkName: "testpage1" */ "../views/TestPage1.vue"),
  },
  {
    path: "/testpage2",
    name: "testpage2",
    component: () =>
      import(/* webpackChunkName: "testpage2" */ "../views/TestPage2.vue"),
  },
  {
    path: "/testpage3",
    name: "testpage3",
    component: () =>
      import(/* webpackChunkName: "testpage3" */ "../views/TestPage3.vue"),
  },
  {
    path: "/testpage4",
    name: "testpage4",
    component: () =>
      import(/* webpackChunkName: "testpage4" */ "../views/TestPage4.vue"),
  },
  {
    path: "/testpage5",
    name: "testpage5",
    component: () =>
      import(/* webpackChunkName: "testpage5" */ "../views/TestPage5.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
