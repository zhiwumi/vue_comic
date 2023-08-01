<template>
  <div>
    <div class="topicHeader">
      <div class="box">
<img :src="detail.cover_image_url" alt="">
<div class="right">
<h3 style="font-size: 25px;">{{ detail.title }}</h3>
<div class="author">{{ detail.user.nickname }}</div>
<div class="share">
  <span class="el-icon-star-off">{{detail.popularity_info}}</span>
  <span class="el-icon-star-off">{{detail.likes_count}}</span>
  <span class="el-icon-star-off">{{detail.comments_count}}</span>
  <div  class="more">{{detail.description}}</div>
  <div class="btn">
    <el-button type="success" round>查看第一话</el-button>
    <el-button type="success" round>整本购</el-button>
    <el-button type="success" round>关注</el-button>
  </div>
</div>
</div>
      </div>
    </div>
    <!-- 章节目录 -->
    <div class="chapter">
<div class="Chalist">
  <span>章节列表</span>
<ul>
  <li>完结</li>
  <li></li>
  <li>共{{ detail.comics_count}}个内容</li>
  <li></li>
  <li>共{{ detail.comic_body_count}}篇正文</li>
</ul>
</div>
<div class="ChaBtn">
  <el-button round size="medium"
  v-for="(item,index) in btncount"
  :key="index"
  @click="getBtn(item)">
    {{ ((item-1)*50+1)+ ' - ' +item*50 }}
  </el-button>
</div>
<div class="detail">
  <!-- 注意此处不要循环错对象 -->
  <div class="par" v-for="(item,index) in arr" :key="index">
    <a href="">
      <span>{{item.title}}</span>
    </a>
  </div>
</div>

    </div>
  </div>
</template>

<script>
import { getDetail } from '@/api'
export default {
  name: 'ComDetail',
  data () {
    return {
      detail: [],
      detailList: [],
      pageSize: 50, // 每页显示数量
      currentPage: 1, // 当前页码
      btncount: [],
      arr: []
    }
  },
  created () {
    this.getDetail()
    // this.firstShow()
    // this.getBtn()
  },
  computed: {
    // startIndex () {
    //   return this.btncount[0]
    // },
    // endIndex () {
    //   return this.startIndex + this.pageSize - 1
    // },
    // paginatedData () {
    //   return this.detailList.slice(this.startIndex, this.endIndex)
    // }
  },
  methods: {
    async getDetail () {
      await getDetail(this.$route.query.id)
        .then(res => {
          this.detail = res.data.data.topic_info
          this.detailList = res.data.data.topic_info.comics
          // console.log(this.detailList)
        })
    },
    // firstShow () {
    //   this.arr = this.detailList.slice(0, 50)
    //   console.log(this.arr)
    // },
    getBtn (val) {
      // console.log(val)
      this.arr = this.detailList.slice(((val - 1) * 50), val * 50)
      // console.log(this.arr)
    }
    // async getBtn () {
    //   // 不加此方法拿不到detail数据
    //   await getDetail(this.$route.query.id)
    //     .then(res => {
    //       // this.detail = res.data.data.topic_info
    //       // this.detailList = res.data.data.topic_info.comics
    //       // console.log(this.detailList)
    //       const len = Math.ceil(this.detailList.length / 50)
    //       for (let i = 0; i < len; i++) {
    //         this.btncount[i] = i + 1
    //         // console.log(i)
    //       }
    //       console.log(this.btncount)
    //     })
    // }

  },
  mounted () {
    setTimeout(() => {
      // 这里就写你要执行的语句即可，先让数据加载进去数组中你在从数组中取值就好了
      const len = Math.ceil(this.detailList.length / 50)
      for (let i = 0; i < len; i++) {
        this.btncount[i] = i + 1
        // console.log(i)
      }
      this.btncount = JSON.parse(JSON.stringify(this.btncount))
      // console.log(this.btncount)
      // console.log(this.detailList)
      // 此处默认展示也要写在这，获取数据之后
      this.arr = this.detailList.slice(0, 50)
      // 时间太短不可
    }, 800)
  }
}
</script>

<style>

</style>
