import axios from 'axios'
import qs from 'qs'
import base from './config.base'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
axios.defaults.baseURL = base.baseURL
axios.defaults.timeout = 5000
axios.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}]
axios.interceptors.request.use((config) => {
  NProgress.start()
  return config
}, (err) => {
  NProgress.done()
  return Promise.reject(err)
})
axios.interceptors.response.use((response) => {
  NProgress.done()
  return response.data
}, (err) => {
  NProgress.done()
  return Promise.reject(err)
})
export default axios
