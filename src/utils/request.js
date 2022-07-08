import axios from 'axios'
import store from '../store'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

http.interceptors.request.use(
  function (config) {
    const token = store.state.token
    config.headers.Authorization = 'Bearer ' + token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default http
