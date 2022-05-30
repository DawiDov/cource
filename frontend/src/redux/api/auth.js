import axios from 'axios'
// import { setCurrentUser } from 'redux/actions/authentication/authAC'


export const getToken = (log, pass) => (dispatch) => {
  const data = {
    'username': log,
    'password': pass,
  }
  axios
  .post('http://127.0.0.1:8000/api-token-auth/', data)
  .then(response => {
    localStorage.setItem('token',response.data.token);
    console.log(response)
  })
}
