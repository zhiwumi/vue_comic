<template>
  <div>
 <div class="searchShow">
  <p>
  <span>"{{ this.$route.query.q }}"</span>
  <span>的搜索结果</span>
 </p>
 <!-- 具体漫画 -->
<div class="spe">
  <!-- 只取6条数据 -->
  <div class="fixedTitle" v-for="(item,index) in result" :key="index">
    <a href="" >
    <div><img :src="item.vertical_image_url" alt=""></div>
    <div class="title">{{ item.title }}</div>
  </a>
  </div>
</div>
</div>
</div>
</template>

<script>
import { getResult } from '@/api'
export default {
  name: 'ComSearch',
  data () {
    return {
      result: []
    }
  },
  created () {
    this.getResult()
  },
  methods: {
    async getResult () {
      await getResult(this.$route.query.q)
        .then(res => {
          // console.log(q)
          console.log(this.$route.query.q)
          console.log(res.data.data.hit)
          this.result = res.data.data.hit
        })
    }
  }
}
</script>

<style>

</style>
