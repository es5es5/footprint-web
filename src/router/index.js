import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/MainLayout'
import Login from '@/components/Login'

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
    component: Main
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
  next()
})

export default router
