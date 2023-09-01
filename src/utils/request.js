import axios from 'axios'
import { showLoading, hideLoading } from './Loading'

// 调用此函数，创建一个实例对象，用request来接收
const request = axios.create({
  // 设置了代理，将端口号改为自己的
  baseURL: 'http://localhost:8080',
  // 请求超时的时间
  timeout: 5000
})

// 请求拦截器:发请求之前,可定事件
request.interceptors.request.use(
  config => {
    showLoading()

    return config
  },
  err => {
    hideLoading()

    return Promise.reject(err)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    hideLoading()

    return response
  },
  error => {
    hideLoading()

    return error.response
    // return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  }
)

export default request
