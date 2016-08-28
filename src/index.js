import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import { InspectionPreviewsContainer } from './components/containers/InspectionPreviews'
import { InspectionDetailsContainer } from './components/containers/InspectionDetails'
import { SearchForm } from './components/containers/SearchForm'
import { CreateForm } from './components/containers/CreateForm'
import InspectionSearchForm from './components/forms/InspectionSearchForm'
import CreateInspectionForm from './components/forms/CreateInspectionForm'
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
      <Redirect from="/" to="/inspections/search" />
      <Route path="/" component={App}>
        <Route path="inspections" component={InspectionPreviewsContainer}>
          <Route path="search" component={SearchForm} />
          <Route path="new" component={CreateForm} />
        </Route>
        <Route path="inspections/:dob" component={InspectionDetailsContainer} />
      </Route>
    </Router>
  </Provider>
)


render(routes, document.getElementById('root'));
