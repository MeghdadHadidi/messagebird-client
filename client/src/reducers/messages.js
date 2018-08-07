import { 
    GET_MESSAGES_START, 
    GET_MESSAGES_END, 
    GET_MESSAGES_ERROR, 
    SET_MESSAGES, 
    SEND_MESSAGES_START, 
    SEND_MESSAGES_END, 
    SEND_MESSAGES_SUCCESS, 
    SEND_MESSAGES_ERROR 
} from '../actions/types'

const initialState = {
    count: 0,
    offset: 0,
    error: null,
    items: [],
    fetching: false,
    fetched: false,
    sent: false
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
        case SEND_MESSAGES_START:
            return {
                ...state,
                sending: true,
                sent: false,
                error: null
            }
        case SEND_MESSAGES_END:
            return {
                ...state,
                sending: false,
                sent: false
            }
        case SEND_MESSAGES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SEND_MESSAGES_SUCCESS:
            return {
                ...state,
                sent: true,
                error: null
            }
        default:
            return state;
    }
}