import { GET_BALANCE } from '../actions/types'

let initialState = {
    balance: 0
}

export default function balance(state = initialState, action) {
    switch (action.type) {
        case GET_BALANCE:
            return {
                balance: action.payload.amount
            }
        default:
            break;
    }
}