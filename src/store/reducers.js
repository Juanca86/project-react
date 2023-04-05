import { combineReducers } from 'redux'
import EpisodesReducer from './episodes/reducer'
import CharactersReducer from './characters/reducer'
import LocationsReducer from './locations/reducer'

const rootReducer = combineReducers({
    EpisodesReducer,
    CharactersReducer,
    LocationsReducer,

})

export default rootReducer