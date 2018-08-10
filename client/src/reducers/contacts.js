import { GET_CONTACTS_START, GET_CONTACTS_END, GET_CONTACTS_ERROR, SET_CONTACTS } from '../actions/types'

const initialState = {
    fetching: false,
    fetched: false,
    items: [],
    error: null,
    count: 0
}

export default function contacts(state = initialState, action){
    switch (action.type) {
        case GET_CONTACTS_START:
            return {
                ...state,
                fetching: true
            }
        case GET_CONTACTS_END:
            return {
                ...state,
                fetching: false,
                fetched: true
            }
        case GET_CONTACTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_CONTACTS:
            return {
                ...state,
                items: action.payload.items,
                count: action.payload.totalCount
            }
        default:
            return state
    }
}