<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <router-link to='/dev'>不登陆直接起飞试试？</router-link>
    <br>
    <label for="name">用户名（随便填)</label><input name="username" type="text">
    <br>
    <label for="pwd">密码（随便填）</label><input name="password" type="password">
    <br>
    <input type="button" value="起飞" @click="submit()">
  </div>
</template>

<script>
let developerRouters = [{
  path: '/dev',
  name: 'Developer',
  component: 'Developer',
  children: [
    {
      path: 'fresh-fish-dev',
      name: 'FreshFishDeveloper',
      component: 'FreshFishDeveloper'
    }]
}]
export default {
  name: 'Login',
  data () {
    return {
      msg: '请登陆，少年～'
    }
  },
  methods: {
    routerFormat: function rFormat (routers) {
      //简单检查是否是可以处理的数据
      if (!(routers instanceof Array)) {
        return false;
      }
      //处理后的容器
      let fmRouters = [];
      routers.forEach(router => {
        let {
            path = '/dev',
          component = 'Developer',
          name,
          children
        } = router;
        path = path || '';
        component = component || 'Developer';
        //如果有子组件，递归处理
        if (children && children instanceof Array) {
          children = rFormat(children);
        }
        let fmRouter = {
          path: path,
          component (resolve) {
            //拼出相对路径，由于component无法识别变量
            //利用Webpack 的 Code-Splitting 功能
            require(['./' + component + '.vue'], resolve)
          },
          name: name,
          children: children
        };
        fmRouters.push(fmRouter);
      });
      return fmRouters;
    },
    submit () {
      this.$router.addRoutes(this.routerFormat(developerRouters));
      this.$router.push('/dev')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  text-align: center;
}
input {
  margin-top: 20px;
}
input[type="submit"] {
  display: inline-block;
  width: 100px;
  height: 60px;
  line-height: 60px;
}
a {
  color: #42b983;
}
</style>
