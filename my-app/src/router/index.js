import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmsView from '../views/FilmsView.vue'
import CenterView from '../views/CenterView.vue'
import CinemasView from '../views/CinemasView.vue'
import NowPlaying from '../views/films/NowPlaying.vue'
import ComingSoon from '../views/films/ComingSoon.vue'
import DetailView from '../views/DetailView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'films',
    component: FilmsView,
    children: [
      {
        path: '/films/nowplaying',
        component: NowPlaying
      },
      {
        path: '/films/comingsoon',
        component: ComingSoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
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
    path: '/detail/:id',
    component: DetailView
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
