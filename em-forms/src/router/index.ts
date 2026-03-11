import { createRouter, createWebHistory } from 'vue-router'
import VenueRegistration from '@/views/VenueRegistration/VenueRegistration.vue';

const router = createRouter({
  history: createWebHistory(), // ✅ remove BASE_URL
  routes: [
    { path: '/venue-registration', name: 'venue-registration', component: VenueRegistration },
  ],
})

export default router