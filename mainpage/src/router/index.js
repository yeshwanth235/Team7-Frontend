import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ViewProduct from "../views/ViewProduct.vue";
import CartView from "../views/CartView";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path:"/productDetails/:id",
    name: "productDetails",
    component: ViewProduct,
  },
  {
    path: "/carts",
    name: "userCart",
    component: CartView,
  },
  {
    path: "/login",
    name: "userLogin",
    component: LoginView,
  },
  {
    path: "/register",
    name: "userRegister",
    component: RegisterView,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;