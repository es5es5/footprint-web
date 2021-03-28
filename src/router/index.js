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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
