import axios from 'axios'
import { Snackbar } from '@varlet/ui'
import router from '@/router'
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8088/',
    timeout: 5000
  })
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = `${localStorage.getItem('Authorization')}`
    console.log(config)
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })

  instance.interceptors.response.use(function (response) {
    // eslint-disable-next-line eqeqeq
    if (response.data.resultCode === 509) {
      router.push('/login')
    } else if (response.data.resultCode !== 200) {
      Snackbar('发生错误!' + response.data.message)
    }
    // if (response.success === false) {
    //   Snackbar('发生错误!' + response.data.message)
    // }
    return response
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Snackbar('发生错误!' + error)
    return Promise.reject(error)
  })
  return instance
}
