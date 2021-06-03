import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //similar a data 
    favorites: []
  },
  mutations: {
    //metodos
    addFavorite(state, payload = {}) {
      let isFavorite = state.favorites.some(gif => gif.id === payload.gif.id)
      if (!isFavorite) {
        state.favorites.push(payload.gif)
      }
    },
    removeFavorite(state, payload = {}) {
      let currentFavorite = state.favorites.filter(gif => gif.id !== payload.gif.id)
      state.favorites = currentFavorite
    }
  }
})

export default store