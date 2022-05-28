import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import authReducer from './reducers/authReducer'
import mainReducer from './reducers/mainReducer'
import articlePageReducer from './reducers/articlePageReducer'

const reducers = combineReducers({
  auth: authReducer,
  main: mainReducer,
  articlePage: articlePageReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store
