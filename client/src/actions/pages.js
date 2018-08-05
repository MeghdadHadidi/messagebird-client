import { SET_CURRENT_PAGE } from './types'

export const setCurrentPage = (pageData) => ({
    type: SET_CURRENT_PAGE,
    payload: pageData
})