import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/MainLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
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
    document.title = '발자취'
  } else {
    document.title = `${to.meta.title} | 발자취`
  }
  next()
})

export default router
