import { GET_MESSAGES_START, GET_MESSAGES_END, GET_MESSAGES_ERROR, SET_MESSAGES } from '../actions/types'

const initialState = {
    count: 0,
    offset: 0,
    items: [],
    fetching: false,
    fetched: false
}

export default function messages(state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES_START:
            return {
                ...state,
                fetching: true
            }
        case GET_MESSAGES_END:
            return {
                ...state,
                fetching: false
            }
        case SET_MESSAGES:
            return {
                ...state,
                fetched: true,
                items: action.payload.items,
                count: action.payload.totalCount,
                offset: action.payload.offset
            }
        case GET_MESSAGES_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}