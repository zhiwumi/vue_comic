import Vue from 'vue'
import VueRouter from 'vue-router'
import ComIndex from '../views/ComIndex.vue'
import ComSearch from '../views/ComSearch.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: ComIndex },
  { path: '/search', component: ComSearch }
]

const router = new VueRouter({
  routes
})

export default router
