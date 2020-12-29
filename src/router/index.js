import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/active',
      name: 'active',
      component: () => import('../pages/active/active.vue')
    }, {
      path: '/index',
      name: 'index',
      component: () => import('../pages/index/index.vue')
    },
    {
      path: '/me',
      name: 'HelloWorld',
      component: () => import('../pages/me/me.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../pages/shop/shop.vue')
    },
  ]
})
