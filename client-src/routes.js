import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './App'
import store from './store'
import Pages from './components/pages'

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Pages.HomePage} />
      </Route>
    </Router>
  </Provider>
)

export default routes
