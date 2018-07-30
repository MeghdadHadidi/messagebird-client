import { GET_MESSAGES_END, GET_MESSAGES_START, GET_MESSAGES_ERROR, SET_MESSAGES } from './types'
import axios from 'axios'

export const getMessages = (dispatch) => {
    dispatch({ type: GET_MESSAGES_START })
    axios.get('/api/messages')
      .then(({ data }) => {
          dispatch({ type: GET_MESSAGES_END })
          dispatch({
              type: SET_MESSAGES,
              payload: data
          })
      })
      .catch(reason => {
        dispatch({
            type: GET_MESSAGES_ERROR,
            payload: reason
        })
      })
}