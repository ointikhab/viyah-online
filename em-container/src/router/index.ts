import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home/Home.vue';
import WeddingVenuesView from '@/views/WeddingVenues/WeddingVenuesView.vue';
import VenueRegistration from '@/views/VenueRegistration/VenueRegistration.vue';
import VenueDetails from '@/views/VenueDetails/VenueDetails.vue';


const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/wedding-venue', name: 'wedding-venue', component: WeddingVenuesView },
    {
      path: '/wedding-venue/:id',
      name: 'venue-details',
      component: VenueDetails,
      props: true, 
    },
    { path: '/venue-registration', name: 'venue-registration', component: VenueRegistration },
  ],
});

export default router;