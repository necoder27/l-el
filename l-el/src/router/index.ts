import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: MainView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CVView.vue'),
    },
    {
      path: '/cat',
      name: 'cat',
      component: () => import('../views/CatView.vue'),
    },
  ],
})

export default router
