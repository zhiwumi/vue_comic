<template>
   <div class="header">
    <!-- 导航栏 -->
    <div class="nav">
  <ul>
  <li><a href="">首页</a></li>
  <li><a href="" >分类<i class="el-icon-caret-bottom"></i></a></li>
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
  components: {
  }
}
</script>
