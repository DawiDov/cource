import axios from 'axios'
import { getUrl } from './apiService'
// import { setCurrentUser } from 'redux/actions/authentication/authAC'


export const getToken = (log, pass) => (dispatch) => {
  const data = {
    'username': log,
    'password': pass,
  }
  const url = getUrl('api-token-auth/')

  axios.post(url, data).then(response => console.log(response))
}