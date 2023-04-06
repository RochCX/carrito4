import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
    {
      path: "/HomePage",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/ProductsPage",
      name: "ProductsPage",
      component: ProductsPage
    },
    {
        path: "/LoginPage",
        name: "LoginPage",
        component: LoginPage
  
      // component: () =>
      // import(/* webpackChunkName: "about" */ "../views/ProductsPage.vue")
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;