/* Configurando router */
import Vue from 'vue'
import Router from 'vue-router'
//My views
import Home from '@/views/Home'
import Favorite from '@/views/Favorite'
import Error from '@/views/Error'

Vue.use(Router)

/* Declarando las rutas de las páginas que contine nuestra sitio */
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