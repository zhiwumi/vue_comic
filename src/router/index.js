import Vue from 'vue'
import VueRouter from 'vue-router'
import ComIndex from '../views/ComIndex.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: ComIndex }
]

const router = new VueRouter({
  routes
})

export default router
