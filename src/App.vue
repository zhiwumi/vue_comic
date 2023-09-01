<template>
  <div id="app">
    <ComHeader></ComHeader>
  <router-view></router-view>
  <!-- 根据路由元判断底部是否展示 -->
  <ComFooter v-show="$route.meta.show"></ComFooter>
  </div>

</template>
<script>
import ComHeader from './components/ComHeader.vue'
import ComFooter from './components/ComFooter.vue'
export default {
  name: 'App',
  components: {
    ComHeader,
    ComFooter
  }
}
</script>

<style>
</style>
