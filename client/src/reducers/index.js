import { combineReducers } from 'redux'

// Reducers
import balance from './balance'
import messages from './messages'

export default combineReducers({ balance, messages })