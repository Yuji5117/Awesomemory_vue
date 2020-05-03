import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // FOR BOOTSTRAP
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)


import 'bootstrap/dist/css/bootstrap.css' // FOR BOOTSTRAP 
import 'bootstrap-vue/dist/bootstrap-vue.css' // FOR BOOTSTRAP

  const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/schedule',
    name: 'Schedule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Schedule.vue')
  },
  {
    path: '/schedule/create',
    name: 'CreateSchedule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateSchedule.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
