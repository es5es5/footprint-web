import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/MainLayout'
import Login from '@/components/Login'

// eslint-disable-next-line no-unused-vars
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

  // authService.onAuthStateChanged(user => {
  //   console.log('authService.onAuthStateChanged(user => {', user)
  //   if (!user) {
  //     if (to.query && to.query.portfolio && to.query.user) {
  //       next({
  //         name: 'Main',
  //         query: {
  //           portfolio: to.query.portfolio,
  //           user: to.query.user,
  //         }
  //       })
  //     } else {
  //       next({ name: 'Login' })
  //     }
  //   } else {
  //     if (to.name === 'Login') {
  //       next({ name: 'Main' })
  //     }
  //   }
  // })

  next()
})

export default router

// http://localhost:8000/main?portfolio=true&user=louis
