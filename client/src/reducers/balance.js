import { SET_BALANCE } from '../actions/types'

export default function balance(state = 0, action) {
    switch (action.type) {
        case SET_BALANCE:
            return action.payload
        default:
            return state;
    }
}