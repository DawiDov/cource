import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
} from '../actions/authentication/authTypes'

const initialState = {
  isAuthenticated: false,
  user: {},
}

const defaultAction = {}

const authReducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      ...state,
      user: action.payload,
      isAuthenticated: true
    }
  case UNSET_CURRENT_USER:
    return {
      ...state,
      isAuthenticated: false
    }
  default:
    return state
  }
}

export default authReducer
