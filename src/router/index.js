import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Developer from '@/components/Developer'
import FreshFishDeveloper from '@/components/FreshFishDeveloper'
import Operation from '@/components/Operation'
import E404 from '@/components/E404'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/404',
    name: 'E404',
    component: E404
  }, {
    path: '*',
    redirect: '/404'
  }]
})
