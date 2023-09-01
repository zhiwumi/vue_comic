<template>
  <div style="margin-bottom: 100px;">
    <div style=" min-width:1200px; background-color: rgb(51, 50, 64);padding:35px 0;">
    <!-- 走马灯 -->
    <div style="min-width: 1200px;">
      <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="(item,index) in banners" :key="index">
    <img :src="item.cover_image_url" alt=""  @click="gotoDetail(item.id)">
    </el-carousel-item>
  </el-carousel>
</div>
<!-- 分类导航 -->
<div class="sortNav">
  <ul>
    <li v-for="(item,index) in homeCate.slice(0,14)" :key="index"><a href="">{{item.title}}</a></li>
  </ul>
</div>
  </div>
  <!-- 漫画展示1 -->
<div class="comShow1">
<!-- 介绍 -->
<div class="intr">
<span>原创投稿</span>
<span>编辑推荐</span>
<span>最新上架</span>
</div>
<!-- 具体漫画 -->
<div class="spe1">
  <!-- 只取6条数据 -->
  <div class="fixedTitle" v-for="(item,index) in original.slice(0, 6)" :key="index">
    <a  @click="gotoDetail(item.id)" >
    <div><img :src="item.vertical_image_url" alt=""></div>
    <div class="title">{{ item.title }}</div>
  </a>
  </div>
</div>
</div>
<!-- 每日更新 -->
<div class="update">
<!-- 介绍 -->
<div class="intr">
<span>每日更新</span>
<li v-for="(item,index) in arr" :key="index"  @click="btn(index)"><a :class="{active:one===index}" href="" @click.prevent="getDailyUpdate(item)">{{item|getDate}}</a></li>
</div>
<!-- 具体漫画 -->
<div class="spe2">
  <!-- 只取10条数据 -->
  <div class="fixedTitle" v-for="(item,index) in daily.slice(0, 10)" :key="index">
    <a  @click="gotoDetail(item.id)" >
    <div><img :src="item.cover_image_url" alt=""></div>
    <div class="title">{{ item.title }}</div>
  </a>
  </div>
</div>
</div>
  </div>
</template>

<script>
import { getBannerImg, getDailyUpdate, getOriginal } from '../api/index.js'

export default {
  name: 'ComIndex',
  data () {
    return {
      banners: [],
      homeCate: [],
      daily: [],
      original: [],
      // 每日更新日期获取
      date: new Date(),
      arr: [],
      // 每日更新默认第一个高亮
      one: 0
    }
  },
  created () {
    this.getBannerImg()
    this.getDailyUpdate()
    this.getOriginal()
    this.getarr()
    // console.log(this.arr[0])
    // this.getDate()
  },
  mounted () {
    // 显示今天的更新内容,挂载到这因为arr获取到已经
    this.getDailyUpdate(this.arr[0])
  },
  methods: {
    btn (index) {
      this.one = index
    },
    async getBannerImg () {
      await getBannerImg()
        .then(res => {
          console.log(res.data.data.categories)
          this.banners = res.data.data.popularity_topics
          this.homeCate = res.data.data.categories
        })
    },
    async getDailyUpdate (item) {
      await getDailyUpdate(item)
        .then(res => {
          // console.log(res.data.data.topics[0])
          this.daily = res.data.data.topics
        })
    },
    async getOriginal () {
      await getOriginal()
        .then(res => {
          // console.log(res.data.data.topics)
          this.original = res.data.data.topics
        })
    },
    async getarr () {
      for (let i = 0; i <= 6; i++) {
        if (this.date.getDay() - i >= 0) {
          this.arr[i] = this.date.getDay() - i
        } else {
          this.arr[i] = this.date.getDay() - i + 7
        }
      }
    },
    // async getDate () {
    //   // 显示周是0-6
    //   const arrDate = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    //   for (let i = 0; i <= 6; i++) {
    //     this.arr1[i] = arrDate[this.arr[i]]
    //   }
    //   this.arr1[0] = '今天'
    //   this.arr1[1] = '昨天'
    //   console.log(this.arr1)
    // }
    gotoDetail (id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }
  },
  filters: {
    getDate (val) {
      const arrDate = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      return arrDate[val]
    }

  }
}
</script>

<style>
.intr .active {
  color: #f5a623;
  /* 原样式为红色 */
  background: none !important
}

</style>
