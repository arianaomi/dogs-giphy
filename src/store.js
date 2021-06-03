/* Usando VUEX: para poder tener acceder a favoritos desde otra vista */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    addFavorite(state, payload = {}) {
      let isFavoriteGif = state.favorites.some(favoriteGif => favoriteGif.id === payload.gif.id)

      if (!isFavoriteGif) {
        state.favorites.push(payload.gif)
      }
    },
    removeFavorite(state, payload = {}) {
      let favoriteGifs = state.favorites.filter(favoriteGif => favoriteGif.id !== payload.gif.id)

      state.favorites = favoriteGifs
    }
  }
})

export default store