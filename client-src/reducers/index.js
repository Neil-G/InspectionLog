import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const mainReducer = combineReducers({
	routing: routerReducer
})

export default mainReducer
