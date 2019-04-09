import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main_gjz from '@/views/leading/Main_gjz'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Main_gjz',
      component: Main_gjz
    }
  ]
})
