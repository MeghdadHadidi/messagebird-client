import { SET_BALANCE, GET_BALANCE_START, GET_BALANCE_END, GET_BALANCE_ERROR } from './types'
import axios from 'axios'

export const getBalance = () => {
    return dispatch => {
        dispatch({ type: GET_BALANCE_START })
        return axios.get('/api/balance')
            .then(({ data }) => {
                dispatch({ type: GET_BALANCE_END })
                if(data.success && data.content.amount){
                    dispatch({
                        type: SET_BALANCE,
                        payload: data.content.amount
                    })
                }
            })
            .catch(reason => {
                dispatch({
                    type: GET_BALANCE_ERROR,
                    payload: reason
                })
            })
    }
}