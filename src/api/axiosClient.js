import axios from 'axios'
import queryString from 'querystring'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3005/',
  paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.response.use( response => {
   if (response && response.data) {
     return response.data
   }
   return response
}, (error) => {
  throw error
})

export default axiosClient
