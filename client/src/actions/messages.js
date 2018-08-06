import { GET_MESSAGES_END, GET_MESSAGES_START, GET_MESSAGES_ERROR, SET_MESSAGES } from './types'
import axios from 'axios'

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
        return axios.post('/api/messages', {
                'originator': 'MessageBird', 
                'recipients': 989126036931, 
                'body': 'This is a test message.'
            })
            .then(({ data }) => {
                if(data.success){
                    this.setState({
                        sent: true
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