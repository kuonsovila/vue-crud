import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: () => import("../components/product/Product.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/product/new",
    name: "newProduct",
    component: () => import("../components/product/Create.vue"),
  },
  {
    path: "/product/update/:id",
    name: "updateProduct",
    component: () => import("../components/product/Update.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
