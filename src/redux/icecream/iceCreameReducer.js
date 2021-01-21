import { BUY_ICE_CREAME } from "./ActionType"

const initialState= {
    numbersOfIceCreame:20
}

const iceCreameReducer = (state = initialState, action) =>{
    switch (action.type){
        case BUY_ICE_CREAME:return {
            ...state,
            numbersOfIceCreame:state.numbersOfIceCreame-1
        }
        default: return state
    }
}

export default iceCreameReducer