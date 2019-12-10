import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import rootReducers from './models/display'
import logger from 'redux-logger'
export const store = createStore(
    rootReducers,
    applyMiddleware(logger)
)
