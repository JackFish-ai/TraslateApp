import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', // 主页面的路径
    name: 'start', // name属性：可有可无
    component: () => import('@/components/enginStart.vue') // 动态配置路由
  },
  {
    path: '/login', // LoginMain.vue的路由的路径
    name: 'LoginMain',
    component: () => import('@/components/LoginMain.vue')
  },
  {
    path: '/rediter',
    name: 'Regiter',
    component: () => import('@/components/RegiterUser.vue')
  },
  {
    path: '/translate',
    name: 'Translate',
    component: () => import('@/components/translateT.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router/index.js
// const router = new VueRouter({
//   mode: 'hash',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
