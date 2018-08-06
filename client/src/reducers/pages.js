import { SET_CURRENT_PAGE } from '../actions/types'

const initialState = {
    current: {
        title: '',
        description: ''
    }
}

export default function pages(state = initialState, action) {
    switch(action.type){
        case SET_CURRENT_PAGE:
            if(state.current.title === action.payload.title && state.current.description === action.payload.description) return state;
            return {
                ...state,
                current: action.payload
            }
        default:
            return state
    }
}