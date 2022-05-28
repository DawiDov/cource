import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import authReducer from './reducers/authReducer'
import mainReducer from './reducers/mainReducer'

const reducers = combineReducers({
  auth: authReducer,
  main: mainReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store
