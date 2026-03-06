import { CITIES, STAFF_OPTIONS, VENUE_TYPES } from "@/constants/FilterBarConstants";

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
        ],
        parking: Math.random() < 0.5,      // randomly true or false
        wheelchair: Math.random() < 0.5,   // randomly true or false
        staff: Math.random() < 0.3 // 30% chance to be "All"
            ? 'All'
            : STAFF_OPTIONS
                .filter(() => Math.random() < 0.5) // random subset
                .join(', ') || STAFF_OPTIONS[Math.floor(Math.random() * STAFF_OPTIONS.length)] // fallback if empty

      }));

      // Commit the transformed data to Vuex store
      context.commit('setVenues', venues);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  },

   async loadVenueDetails(context, payload: any) {
    const { venueId } = payload;
    const response = await fetch(
      `https://dummyjson.com/products/${venueId}`
    )

    if (!response.ok) {
      console.log('error while fetching product details')
      return
    }

    const responseData = await response.json()

    console.log('venue details:', responseData)

    const transformedDetails = {
      ...responseData,
      venueType: VENUE_TYPES[
          Math.floor(Math.random() * VENUE_TYPES.length)
        ],
        city: CITIES[
          Math.floor(Math.random() * CITIES.length)
        ],
        parking: Math.random() < 0.5,      // randomly true or false
        wheelchair: Math.random() < 0.5,   // randomly true or false
        staff: Math.random() < 0.3 // 30% chance to be "All"
            ? 'All'
            : STAFF_OPTIONS
                .filter(() => Math.random() < 0.5) // random subset
                .join(', ') || STAFF_OPTIONS[Math.floor(Math.random() * STAFF_OPTIONS.length)] // fallback if empty

    }

    context.commit('setVenueDetails', transformedDetails)
  },
};
