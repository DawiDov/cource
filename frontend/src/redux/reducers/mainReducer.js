import {
  SET_ARTICLES,
} from 'redux/actions/main/mainTypes'

const initialState = {
  articles: [],
  count: 0,
}

const defaultAction = {}

const authReducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
  case SET_ARTICLES:
    return {
      ...state,
      articles: action.payload.results,
      count: action.payload.count,
    }
  default:
    return state
  }
}

export default authReducer
