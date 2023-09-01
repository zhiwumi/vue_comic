<template>
  <div>
 <div class="searchShow">
  <p>
  <span>"{{ this.$route.query.q }}"</span>
  <span>的搜索结果</span>
 </p>
 <!-- 具体漫画 -->
<div class="spe">
  <div class="fixedTitle" v-for="(item,index) in result" :key="index">
    <a @click="gotoDetail(item.id)">
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
          // console.log(this.$route.query.q)
          // console.log(res.data.data.hit)
          this.result = res.data.data.hit
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

</style>
