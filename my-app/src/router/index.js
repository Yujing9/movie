import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmsView from '../views/FilmsView.vue'
import CenterView from '../views/CenterView.vue'
import CinemasView from '../views/CinemasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'films',
    component: FilmsView
  },
  {
    path: '/center',
    name: 'center',
    component: CenterView
  },
  {
    path: '/cinemas',
    name: 'cinemas',
    component: CinemasView
  },
  {
    path: '/',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
