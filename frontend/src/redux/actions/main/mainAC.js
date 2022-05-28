import { GET_ARTICLES } from './mainTypes'

export const getArticles = (articles) => ({
  type: GET_ARTICLES,
  payload: articles,
})

