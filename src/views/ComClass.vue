<template>
<div>
  <!-- 选项 -->
<div class="classTop">
  <!-- 已选 -->
<!-- <div class="hid">
  <div class="tit">已选</div>
  <ul>
    <li>111</li>
    <li>1111</li>
    <li>1111</li>
  </ul>
</div> -->
<!-- 题材 -->
<div class="hid">
  <div class="tit">题材</div>
  <div style="margin-left: 58px;" >
    <div v-for="(item,index) in classResult" :key="index">
  <a  :class="{active:one===item.tagId}" href="" :data-cateid1="item.tagId" @click.prevent="gotoClass1(item.tagId)">{{item.title}}</a>

    </div>
  </div>

</div>
<!-- 进度 -->
<div class="hid">
  <div class="tit">进度</div>
  <div>
    <div v-for="(item,index) in update_status" :key="index">
  <a :class="{active:two===item.id}" href="" :data-cateid2="item.id" @click.prevent="gotoClass2(item.id)">{{item.title}}</a>
  </div>
  </div>

</div>
<!-- 排序 -->
<div class="hid">
  <div class="tit">排序</div>
  <div>
    <div v-for="(item,index) in sort" :key="index">
  <a :class="{active:thr===item.id}" href="" :data-cateid3="item.id" @click.prevent="gotoClass3(item.id)">{{item.title}}</a>

  </div>
  </div>

</div>
</div>
<!-- 展示界面 -->
<div class="classBottom">
  <!-- 此处类名与search.css一致 -->
  <div class="spe">
  <div class="fixedTitle" v-for="(item,index) in classCom" :key="index">
    <a @click="gotoDetail(item.id)">
    <div><img :src="item.vertical_image_url"></div>
    <div class="title">{{ item.title }}</div>
  </a>
  </div>
</div>
</div>
</div>
</template>

<script>
import { getClass } from '@/api'
export default {
  name: 'ComClass',
  data () {
    return {
      one: 0,
      two: 0,
      thr: 1,
      classResult: [],
      classCom: [],
      sort: [
        { id: 1, title: '全部' },
        { id: 2, title: '最火热' },
        { id: 3, title: '新上架' }
      ],
      update_status: [
        { id: 0, title: '全部' },
        { id: 1, title: '连载中' },
        { id: 2, title: '完结' }
      ],
      cate1: 0,
      cate2: 0,
      cate3: 1

    }
  },
  created () {
    this.getClass()
    // this.btn1(this.$route.query.cateid1)
    // console.log(this.$route.query.cateid1)
  },
  mounted () {
    // console.log(this.$route.query.cateid1)
    // 字符串转数字
    this.one = parseInt(this.$route.query.cateid1)
    this.two = parseInt(this.$route.query.cateid2)
    this.thr = parseInt(this.$route.query.cateid3)
  },
  methods: {
    gotoClass1 (id1) {
      this.cate1 = id1
      // 将其他参数值保存,一同传入
      this.cate2 = sessionStorage.getItem('cate2')
      this.cate3 = sessionStorage.getItem('cate3')
      console.log(sessionStorage.getItem('cate2'))
      // 解决点击单个类别其他参数为空情况
      if (sessionStorage.getItem('cate2') === null) {
        this.cate2 = 0
      }
      if (sessionStorage.getItem('cate3') === null) {
        this.cate3 = 1
      }
      this.$router.push({
        path: '/class',
        query: {
          cateid1: this.cate1,
          cateid2: this.cate2,
          cateid3: this.cate3
        }
      })
      sessionStorage.setItem('cate1', this.cate1)
      window.location.reload()
    },
    gotoClass2 (id2) {
      this.cate2 = id2
      this.cate1 = sessionStorage.getItem('cate1')
      this.cate3 = sessionStorage.getItem('cate3')
      if (sessionStorage.getItem('cate1') === null) {
        this.cate1 = 0
      }
      if (sessionStorage.getItem('cate3') === null) {
        this.cate3 = 1
      }
      this.$router.push({
        path: '/class',
        query: {
          cateid1: this.cate1,
          cateid2: this.cate2,
          cateid3: this.cate3
        }
      })
      sessionStorage.setItem('cate2', this.cate2)
      window.location.reload()
    },
    gotoClass3 (id3) {
      this.cate3 = id3
      this.cate1 = sessionStorage.getItem('cate1')
      this.cate2 = sessionStorage.getItem('cate2')
      if (sessionStorage.getItem('cate1') === null) {
        this.cate1 = 0
      }
      if (sessionStorage.getItem('cate2') === null) {
        this.cate2 = 0
      }
      this.$router.push({
        path: '/class',
        query: {
          cateid1: this.cate1,
          cateid2: this.cate2,
          cateid3: this.cate3
        }
      })
      sessionStorage.setItem('cate3', this.cate3)
      window.location.reload()
    },
    async getClass () {
      await getClass(this.$route.query.cateid1, this.$route.query.cateid2, this.$route.query.cateid3)
        .then(res => {
          // console.log(this.cate1)
          // console.log(this.$route.query.q)
          // console.log(res.data.hits)
          this.classResult = res.data.hits.topicCategories
          this.classCom = res.data.hits.topicMessageList
        })
    },
    gotoDetail (id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style>
.active {
        background: #f5a623 !important;
    }
</style>
