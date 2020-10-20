import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page-create',
      meta: {
        title: '首页',
        icon: 'home'
      },
      component: () => import('@/views/page-create')
    },
    {
      path: '/module-manage',
      name: 'module-manage',
      meta: {
        title: '模块管理',
        icon: 'database'
      },
      component: () => import('@/views/module-manage')
    },
    {
      path: '*',
      meta: {
        hide: true
      },
      redirect: '/'
    }
  ]
})
