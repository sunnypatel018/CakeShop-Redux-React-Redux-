import {combineReducers} from 'redux'
import cakeReducer from './cakeReducer'
import iceCreameReducer from './icecream/iceCreameReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: iceCreameReducer
})

export default rootReducer