// store/index.ts
import { createStore } from 'vuex'

interface Movie {
  id: number
  title: string
  description: string
  genre: string
  releaseDate: string
  posterImage: string
}

interface State {
  favorites: Movie[]
}

export default createStore<State>({
  state: {
    favorites: [], // Sevimli filmlar roʻyxati
  },
  mutations: {
    ADD_TO_FAVORITES(state: State, movie: Movie) {
      state.favorites.push(movie)
    },
    REMOVE_FROM_FAVORITES(state: State, movieId: number) {
      state.favorites = state.favorites.filter((movie) => movie.id !== movieId)
    },
  },
  actions: {
    addToFavorites({ commit }, movie: Movie) {
      commit('ADD_TO_FAVORITES', movie)
    },
    removeFromFavorites({ commit }, movieId: number) {
      commit('REMOVE_FROM_FAVORITES', movieId)
    },
  },
  getters: {
    favorites: (state: State) => state.favorites,
  },
})
