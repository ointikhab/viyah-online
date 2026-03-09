import { createRouter, createWebHistory } from 'vue-router'
import VenueDetails from '@/views/VenueDetails/VenueDetails.vue'

const router = createRouter({
  history: createWebHistory(), // ✅ remove BASE_URL
  routes: [
    {
      path: '/wedding-venue/:id',
      props: true,
      component: VenueDetails,
    },
  ],
})

export default router