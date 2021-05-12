import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/MainLayout'
import Login from '@/components/Login'

import { authService } from '@/plugins/fbase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    meta: {
      title: '발자취'
    },
    component: Main
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '로그인'
    },
    component: Login
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const routeMetaTitle = to.meta.title
  if (!routeMetaTitle) {
    document.title = 'LOUIS MAPS'
  } else {
    document.title = `${to.meta.title} | LOUIS MAPS`
  }

  authService.onAuthStateChanged(user => {
    if (!user) {
      if (to.query && to.query.portfolio) {
        next({ name: 'Main', query: { portfolio: true } })
      } else {
        next({ name: 'Login' })
      }
    } else {
      if (to.name === 'Login') {
        next({ name: 'Main' })
      }
    }
  })

  next()
})

export default router
