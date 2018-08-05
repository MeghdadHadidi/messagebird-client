import { combineReducers } from 'redux'

// Reducers
import balance from './balance'
import messages from './messages'
import pages from './pages'

export default combineReducers({ balance, messages, pages })