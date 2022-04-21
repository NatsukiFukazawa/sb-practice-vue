import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInPageView from '../views/LogInPageView'
import HomePageView from '../views/HomePageView'
import TestUserIndex from '../views/TestUserIndex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LogInPageView
  },
  {
    path: '/home',
    component: HomePageView
  },
  {
    path: '/test_user_index',
    component: TestUserIndex
  },
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
