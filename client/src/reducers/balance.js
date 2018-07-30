import { SET_BALANCE, GET_BALANCE_START, GET_BALANCE_END, GET_BALANCE_ERROR } from '../actions/types'

const initialState = {
    amount: null,
    fetching: false,
    fetched: false,
    errors: null
}

export default function balance(state = initialState, action) {
    switch (action.type) {
        case GET_BALANCE_START:
            return {
                ...state,
                fetching: true
            }
        case GET_BALANCE_END:
            return {
                ...state,
                fetching: false
            }
        case SET_BALANCE:
            return {
                ...state,
                fetched: true,
                amount: action.payload
            }
        case GET_BALANCE_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}