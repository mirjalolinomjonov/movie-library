import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/:slug',
      name: 'home_slug',
      component: () => import('@/pages/_slug.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/pages/favorites.vue'),
    },
  ],
})

export default router
