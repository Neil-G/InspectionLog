import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { InspectionPreviewsContainer } from './components/containers/InspectionPreviews'
import { InspectionDetailsContainer } from './components/containers/InspectionDetails'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { mainReducer } from './reducers'
import createLogger from 'redux-logger'
import { mockInspection } from './mockInspection';

const loggerMiddleware = createLogger()

let store = createStore(
  mainReducer,
  applyMiddleware(
    loggerMiddleware
  )
)

store.dispatch({
  type: 'SET_INSPECTIONS',
  inspections: mockInspection
})

console.log("mockInspection", mockInspection)

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={InspectionPreviewsContainer} />
        <Route path="inspections/:dob" component={InspectionDetailsContainer} />
      </Route>
    </Router>
  </Provider>
)


render(routes, document.getElementById('root'));
