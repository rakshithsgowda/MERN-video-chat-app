import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {} from '@redux-devtools/core'

import authReducer from './reducers/authReducer.js'

const rootReducer = combineReducers({ auth: authReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
