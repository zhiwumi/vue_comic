<template>
   <div class="header">
    <!-- 导航栏 -->
    <div class="nav">
  <ul>
  <li><a href="">首页</a></li>
  <li><a @click="gotoClass()">分类<i class="el-icon-caret-bottom"></i></a></li>
  <li><a href="">漫剧</a></li>
  <li><a href="">世界</a></li>
  <li><a href="">投稿</a></li>
  <li><a href="">开放平台</a></li>
  <li><a href="">合作</a></li>
<!-- 搜索框 -->
<li>
  <el-input
          v-model="search"
          @focus="focus"
          @blur="blur"
          @keyup.enter.native="searchHandler"
          placeholder="搜索"
        >
        <el-button round slot="append" icon="el-icon-search" id="search" @click="searchHandler" ></el-button>
        </el-input></li>
  <li><a href="">登录</a><i>|</i><a href="">注册</a></li>
  <li><a href="">会员中心</a></li>
</ul>
</div>
</div>
 </template>

<script>

export default {
  name: 'ComHeader',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    gotoClass () {
      this.$router.resolve({
        path: '/class',
        query: {
          cateid1: 0,
          cateid2: 0,
          cateid3: 1
        }
      })
      window.open('http://localhost:8080/#/class?cateid1=0&cateid2=0&cateid3=1', '_blank')
    },
    searchHandler () {
      if (this.search === '') {
        this.$message({
          message: '请输入内容',
          type: 'warning'
        })
      } else {
        // 报错显示是路由重复，vue-router 实例上的 push 方法返回的是 promise 对象，所以传入的参数期望有一个成功和失败的回调，如果省略不写则会报错。
        // 此处在路由index文件也写了相应解决方法,可解决全部
        // size为数量，默认为10，可改
        this.$router.push('/search?q=' + this.search, () => {}, () => {})
        // 刷新页面，更新数据
        window.location.reload()
      }
    }
  },
  components: {
  }
}
</script>
