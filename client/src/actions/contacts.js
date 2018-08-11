import { GET_CONTACTS_START, GET_CONTACTS_END, GET_CONTACTS_ERROR, SET_CONTACTS } from './types'
import axios from 'axios'
import iziToast from 'izitoast'

export const getContacts = () => {
    return dispatch => {
        dispatch({ type: GET_CONTACTS_START })
        return axios.get('/api/contacts')
            .then(({ data }) => {
                dispatch({ type: GET_CONTACTS_END })
                dispatch({
                    type: SET_CONTACTS,
                    payload: data.content
                })
            })
            .catch(reason => {
                iziToast.error({
                    title: 'ContactList: '+reason.response.status,
                    message: reason.response.statusText,
                    position: 'topRight'
                })
                dispatch({ type: GET_CONTACTS_END })
                dispatch({
                    type: GET_CONTACTS_ERROR,
                    payload: reason
                })
            })
    }
}

export const getcontactDetail = (id) => {
    return dispatch => {
        dispatch({ type: GET_CONTACTS_START })
        return axios.get('/api/contacts', id)
            .then(({ data }) => {
                dispatch({ type: GET_CONTACTS_END })
                dispatch({ 
                    type: GET_CONTACTS_START,
                    payload: data.content
                })
            })
            .catch(reason => {
                iziToast.error({
                    title: 'Contact: '+reason.response.status,
                    message: reason.response.statusText,
                    position: 'topRight'
                })
                dispatch({ type: GET_CONTACTS_END })
                dispatch({ 
                    type: GET_CONTACTS_ERROR,
                    payload: reason 
                })
            })
    }
}