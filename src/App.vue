<template>
  <div id="app">
    <ComHeader></ComHeader>
  <router-view></router-view>
  <ComFooter></ComFooter>
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
