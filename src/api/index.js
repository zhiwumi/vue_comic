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

// 漫画详情
export function getDetail (id) {
  return request({
    // 此处请求的样式
    // http://localhost:8080/api/v2/pweb/topic/13497?id=13497
    url: '/api/v2/pweb/topic/' + id,
    method: 'get',
    // 此处不用params请求样式上面?后没有
    query: {
      id
    }
  })
}

// 分类
export function getClass (id, sort, status) {
  return request({
    url: '/api/search/mini/topic/multi_filter?size=12&tag_id=' + id + '&sort=' + sort + '&update_status=' + status,
    method: 'get',
    params: {
      id,
      sort,
      status
    }
  })
}
