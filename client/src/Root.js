import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// Components
import App from './App'
import MessagesList from './components/MessagesList'

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <App>
                    <Route exact path="/messages" component={ MessagesList } />
                </App>
            </Router>
        </Provider>
    )
}

export default Root;