import { SET_CURRENT_USER, UNSET_CURRENT_USER } from './authTypes'

export const setCurrentUser = () => ({
  type: SET_CURRENT_USER,
})

export const unsetCurrentUser = () => ({
  type: UNSET_CURRENT_USER
})