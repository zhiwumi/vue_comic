import Vue from 'vue'
import VueRouter from 'vue-router'
import ComIndex from '../views/ComIndex.vue'
import ComSearch from '../views/ComSearch.vue'
import ComDetail from '../views/ComDetail.vue'
import ComClass from '../views/ComClass.vue'
Vue.use(VueRouter)

// 把VueRouter原型对象上的push,先保存一份
const originPush = VueRouter.prototype.push

// 重写push|replace
// 第一个参数,告诉原来push方法,往哪里跳转
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call,apply区别
    // 相同:可以调用函数一次,修改函数上下文一次
    // 不同:call传参用逗号,apply方法执行,传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}

const routes = [
  // 配置路由元信息,自己定义,是否展示底部组件
  { path: '/', component: ComIndex, meta: { show: true } },
  { path: '/search', component: ComSearch, meta: { show: true } },
  { path: '/detail', component: ComDetail, meta: { show: true } },
  { path: '/class', component: ComClass, meta: { show: true } }
]

const router = new VueRouter({
  routes
})

export default router
