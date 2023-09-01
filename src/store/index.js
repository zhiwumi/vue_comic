import Vue from 'vue'
import Vuex from 'vuex'
import classs from './classs'

Vue.use(Vuex)

// 暴露store类的一个实例
export default new Vuex.Store({
  // 实现模块式开发
  modules: {
    classs
  }
})
