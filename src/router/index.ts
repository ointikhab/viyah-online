import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/Home.vue'
import WeddingVenuesView from '@/views/Home/WeddingVenues/WeddingVenuesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/wedding-venue',
      name: 'wedding-venue',
      component: WeddingVenuesView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
