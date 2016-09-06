import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import mainReducer from './reducers'
import blankInspection from './utils/blankInspection'

const loggerMiddleware = createLogger()

// create store
let store = createStore(
	mainReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
)

// store.dispatch({
// 	type: 'SET_INSPECTIONS',
// 	inspections: [blankInspection(), blankInspection("2"), blankInspection("3")]
// })

export default store
