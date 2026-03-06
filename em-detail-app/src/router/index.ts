import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/Home.vue'
import WeddingVenuesView from '@/views/WeddingVenues/WeddingVenuesView.vue'
import VenueDetails from '@/views/VenueDetails/VenueDetails.vue'
import VenueRegistration from '@/views/VenueRegistration/VenueRegistration.vue'

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
    {
      path: '/wedding-venue/:id', 
      props: true,
      component: VenueDetails,
    },
    {
      path: '/venue-registration',
      name: 'venue-registration',
      component: VenueRegistration,
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
