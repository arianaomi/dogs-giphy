
import Vue from 'vue'
import Router from 'vue-router'
//My views
import Home from '@/views/Home'
import Favorite from '@/views/Favorite'
import Error from '@/views/Error'

Vue.use(Router)

/* Rutas que contiene nuestro sitio */
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favoritos',
      name: 'favorites',
      component: Favorite
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})