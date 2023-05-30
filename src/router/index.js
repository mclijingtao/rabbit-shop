import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Layout/LayoutIndex.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/Home/HomeIndex.vue"),
        },
        {
          path: "category/:id",
          component: () => import("@/views/Category/CategoryIndex.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("@/views/Login/LoginIndex.vue"),
    },
  ],
});

export default router;
