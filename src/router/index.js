import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: () => import("@/views/Layout/LayoutIndex.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/Home/HomeIndex.vue"),
        },
        {
          path: "category",
          name: "category",
          component: () => import("@/views/Category/CategoryIndex.vue")
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/LoginIndex.vue"),
    },
  ],
});

export default router
