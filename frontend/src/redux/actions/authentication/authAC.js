import { 
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  SET_USERNAME,
  SET_PASSWORD,
} from './authTypes'

export const setCurrentUser = () => ({
  type: SET_CURRENT_USER,
})

export const unsetCurrentUser = () => ({
  type: UNSET_CURRENT_USER
})

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username, 
})

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
})