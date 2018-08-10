import { SET_BALANCE, GET_BALANCE_START, GET_BALANCE_END, GET_BALANCE_ERROR } from './types'
import axios from 'axios'
import iziToast from 'izitoast'

export const getBalance = () => {
    return dispatch => {
        dispatch({ type: GET_BALANCE_START })
        return axios.get('http://localhost:4000/api/balance')
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
                iziToast.error({
                    title: 'Balance: ' + reason.response.status,
                    message: reason.response.statusText,
                    position: 'topRight'
                })
                dispatch({ type: GET_BALANCE_END })
                dispatch({
                    type: GET_BALANCE_ERROR,
                    payload: reason
                })
            })
    }
}