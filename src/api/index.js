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
export function getDailyUpdate (pos) {
  return request({
    url: '/api/v2/pweb/daily/topics',
    method: 'get',
    params: {
      pos
    }
  })
}

// 搜索结果

export function getResult (q) {
  return request({
    url: '/api/v1/search/topic',
    method: 'get',
    params: {
      q
    }
  })
}
