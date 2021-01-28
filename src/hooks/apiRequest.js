import axios from 'axios'

export function login (payload){
  return axios({
    method: "POST",
    url: "http://localhost:3000/admin/login",
    body: payload
  })
}