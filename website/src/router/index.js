import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:"/main",
    name:"Main",
    component: () => import("../views/main.vue")
  },
  {
    path:"/",
    name:"Start",
    component: () => import("../views/start.vue")
  },
  {
    path:"/varor",
    name:"Varor",
    component: () => import("../views/varor.vue")
  },
  {
    path:"/best",
    name:"Bestallningar",
    component: () => import("../views/bestallningar.vue")
  },
];

const router = new VueRouter({
  routes,
});

export default router;
