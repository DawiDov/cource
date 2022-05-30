import { SET_ARTICLES } from './mainTypes'

export const setArticles = (articles) => ({
  type: SET_ARTICLES,
  payload: articles,
})

