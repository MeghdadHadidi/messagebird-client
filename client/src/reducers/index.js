import { combineReducers } from 'redux'

// Reducers
import balance from './balance'
import messages from './messages'
import contacts from './contacts'
import pages from './pages'

export default combineReducers({ balance, messages, contacts, pages })