import {createStore} from 'vuex'
import venues from './modules/venues'

const store = createStore({
    modules: {
        venues
    },
    

})

export default store; 