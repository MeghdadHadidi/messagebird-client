import { combineReducers } from 'redux'

// Reducers
import balance from './balance'
import messages from './messages'
import page from './page'

export default combineReducers({ balance, messages, page })