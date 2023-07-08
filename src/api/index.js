import request from '../utils/request.js'
// 轮播图
export function getBannerImg () {
  return request({
    url: '/api/v2/pweb/home',
    method: 'get'
  })
}
// 原创
export function getOriginal () {
  return request({
    url: '/api/v2/pweb/ugc/rec_topics',
    method: 'get'
  })
}
// 每日更新
export function getDailyUpdate () {
  return request({
    url: '/api/v2/pweb/daily/topics?pos=2',
    method: 'get'
  })
}
