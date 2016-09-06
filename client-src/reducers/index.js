import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import inspections from './inspections'

const mainReducer = combineReducers({
	routing: routerReducer,
	inspections
})

export default mainReducer
