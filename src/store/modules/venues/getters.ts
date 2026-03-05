
export default {
    venues(state: any){
        return state.venues
    },
    hasVenues(state: any){
      return state.venues && state.venues.length > 0
    },
    totalVenues(state: any, getters: any) {
      return getters.hasVenues ? state.venues.length : 0
   },
   venueDetails(state: any){
        return state.venueDetails
    },

}