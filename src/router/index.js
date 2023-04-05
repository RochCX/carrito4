import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
      path: "/home",
      name: "HomeRoot",
      component: Home
    },
    {
      path: "/about",
      name: "AboutUs",

      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;
  