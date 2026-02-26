
export default {
    venues(state: any){
        return state.venues
    },
    hasVenues(state: any){
      return state.venues && state.venues.length > 0
    }
}