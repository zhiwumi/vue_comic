import axios from 'axios'
// 调用此函数，创建一个实例对象，用request来接收
const request = axios.create({
  // 设置了代理，将端口号改为自己的
  baseURL: 'http://localhost:8080'
})

export default request
