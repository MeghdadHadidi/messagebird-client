import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()