import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// Components
import App from './App'
import Dashboard from './components/Dashboard'
import MessagesList from './components/MessagesList'

// Actions
import { setCurrentPage } from './actions/pages'

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <App>
                    <Route exact path="/" render={ () => {
                        store.dispatch(setCurrentPage({
                            title: 'Dashboard',
                            description: 'Widgets'
                        }))

                        return <Dashboard />
                    }} />
                    <Route exact path="/messages" render={ () => {
                        store.dispatch(setCurrentPage({
                            title: 'SMS',
                            description: 'List of messages'
                        }))

                        return <MessagesList />
                    }} />
                </App>
            </Router>
        </Provider>
    )
}

export default Root;