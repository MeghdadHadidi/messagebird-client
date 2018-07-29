import { SET_BALANCE } from './types'

export const getBalance = (dispatch) => {
    dispatch({
        type: SET_BALANCE,
        payload: 1
    })
}