import { CITIES, VENUE_TYPES } from "@/constants/FilterBarConstants";

export default {
  async loadProducts(context: any) {
    try {
      const response = await fetch('https://dummyjson.com/products');

      if (!response.ok) {
        console.log('Error while fetching data');
        return;
      }

      const responseData = await response.json();
      

      // Transform the data here before committing
      const venues = responseData.products.map((p: any) => ({
        id: p.id,
        price: `AED ${p.price}`,
        type: p.title,
        guests: Math.floor(Math.random() * 200) + 50, // example: random guest count
        location: p.category,
        images: [p.thumbnail, ...(p.images?.slice(0, 2) || [])], // first 3 images
        rating: Math.floor(Math.random() * 5) + 1, // random rating 1-5
        badges: ['FEATURED', '20% OFF'], // static for now
        description: p.description,
        venueType: VENUE_TYPES[
          Math.floor(Math.random() * VENUE_TYPES.length)
        ],
        city: CITIES[
          Math.floor(Math.random() * CITIES.length)
        ]
      }));

      // Commit the transformed data to Vuex store
      context.commit('setVenues', venues);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  },
};
