import {
  GET_ARTICLES,
} from 'redux/actions/main/mainTypes'

const initialState = {
  articles: [],
  isBlocked: true,
}

const defaultAction = {}

const authReducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
  case GET_ARTICLES:
    return {
      ...state,
      articles: action.payload,
    }
  default:
    return state
  }
}

export default authReducer
