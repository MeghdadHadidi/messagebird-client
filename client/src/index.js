import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger),
  // other store enhancers if any
);

const store = createStore(
    rootReducer,
    enhancer
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()