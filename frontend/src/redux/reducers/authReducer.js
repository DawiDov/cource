import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  SET_USERNAME,
  SET_PASSWORD,
} from '../actions/authentication/authTypes'

const initialState = {
  username: '',
  password: '',
  isAuthenticated: false,
}

const defaultAction = {}

const authReducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      ...state,
      isAuthenticated: true
    }
  case UNSET_CURRENT_USER:
    return {
      ...state,
      isAuthenticated: false
    }
  case SET_USERNAME:
    return {
      ...state,
      username: action.payload,
    }
  case SET_PASSWORD:
    return {
      ...state,
      password: action.payload,
    }
  default:
    return state
  }
}

export default authReducer
