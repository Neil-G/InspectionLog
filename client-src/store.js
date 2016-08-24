import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import mainReducer from './reducers'

const loggerMiddleware = createLogger()

// create store
let store = createStore(
	mainReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
)

export default store
