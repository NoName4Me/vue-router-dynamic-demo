<template>
  <div >
    <router-link to='/dev/fresh-fish-dev'>显示二级页面</router-link>
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'Developer',
  data () {
    return {
      msg: '这是开发者页面啦～～'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
