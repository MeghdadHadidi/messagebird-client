import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// Components
import App from './App'
import Dashboard from './components/Dashboard'
import MessagesList from './components/MessagesList'

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <App>
                    <Route exact path="/" render={ () => {
                        store.dispatch({ type: 'SET_CURRENT_PAGE', payload: {page: {title: 'Widgets'}} })
                        return <Dashboard />
                    }} />
                    <Route exact path="/messages" render={ () => {
                        store.dispatch({ type: 'SET_CURRENT_PAGE', payload: {page: {title: 'Messages List'}} })
                        return <MessagesList />
                    }} />
                </App>
            </Router>
        </Provider>
    )
}

export default Root;