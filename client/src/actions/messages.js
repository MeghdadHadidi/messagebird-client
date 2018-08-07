import { 
    GET_MESSAGES_END, 
    GET_MESSAGES_START, 
    GET_MESSAGES_ERROR, 
    SET_MESSAGES, 
    SEND_MESSAGES_START, 
    SEND_MESSAGES_END, 
    SEND_MESSAGES_ERROR, 
    SEND_MESSAGES_SUCCESS
} from './types'
import axios from 'axios'
import iziToast from 'izitoast'

export const getMessages = () => {
    return dispatch => {
        dispatch({ type: GET_MESSAGES_START })
        return axios.get('/api/messages')
            .then(({ data }) => {
                dispatch({ type: GET_MESSAGES_END })
                dispatch({
                    type: SET_MESSAGES,
                    payload: data.content
                })
            })
            .catch(reason => {
                dispatch({
                    type: GET_MESSAGES_ERROR,
                    payload: reason
                })
            })
    }
}

export const sendMessage = (data) => {
    return dispatch => {
        dispatch({ type: SEND_MESSAGES_START });
        return axios.post('/api/messages', {
                'originator': 'MessageBird', 
                'recipients': 989126036931, 
                'body': 'This is a test message.'
            })
            .then(({ data }) => {
                dispatch({ type: SEND_MESSAGES_END })
                if(data.success){
                    dispatch({ 
                        type: SEND_MESSAGES_SUCCESS, 
                        payload: data 
                    })
                }
            })
            .catch(reason => {
                dispatch({ type: SEND_MESSAGES_END })
                iziToast.error({
                    title: 'Error: '+reason.response.status,
                    message: reason.response.statusText,
                    position: 'topRight'
                })
                dispatch({ 
                    type: SEND_MESSAGES_ERROR, 
                    payload: reason
                })
                //TODO:
                // Add easy toast
                
            })
    }
}

export const getMessageDetail = (id) => {
    return dispatch => {
        return axios.get(`/api/messages/${id}`)
            .then(({ data }) => {
                if(data.success && data.content){
                    this.setState({
                        selectedMessage: data.content
                    })
                }
            })
            .catch(reason => {
                if(reason.content && reason.content.status){
                    console.log(reason.content)
                }
            })
    }
}