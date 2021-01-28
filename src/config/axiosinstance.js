import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://creativent-app.herokuapp.com'
})

export default instance
