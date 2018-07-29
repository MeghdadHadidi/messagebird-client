import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={ App } />
                </Switch>
            </Router>
        </Provider>
    )
}

export default Root;