import { SET_CURRENT_PAGE } from '../actions/types'


let initialState = {
    current: {
        title: ''
    }
}

export default function page (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            if(!state.current.title){
                return {
                    ...state,
                    current: action.payload.page
                }
            }
            else{
                return state;
            }
        default:
            return state;
    }
}