// store/index.ts
import { createStore } from 'vuex'
import { useToast } from 'vue-toastification'

const toast = useToast()

// TYPES
import type { IMoviesList, IMovieItem } from '@/types'
interface IState {
  isLoading: boolean
  moviesList: IMoviesList[]
  favorites: IMovieItem[]
  searchQuery: string
}

export default createStore<IState>({
  state: {
    isLoading: false,
    moviesList: [],
    favorites: [],
    searchQuery: '',
  },
  mutations: {
    SET_IS_LOADING(state: IState, payload: boolean) {
      state.isLoading = payload
    },
    SET_MOVIES_LIST(state: IState, payload: IMoviesList[]) {
      state.moviesList = payload
    },
    SET_TO_FAVORITES(state: IState, payload: IMovieItem) {
      state.favorites.push(payload)
    },
    REMOVE_FROM_FAVORITES(state: IState, id: number) {
      state.favorites = state.favorites.filter((movie) => movie.id !== id)
    },
  },
  actions: {
    async fetchList({ commit }) {
      try {
        commit('SET_IS_LOADING', true)
        const response = await fetch('/data/movies-list.json') // public/data/movies-list.json joylashuvi
        if (!response.ok) {
          throw new Error('Ma’lumotlarni yuklashda xatolik yuz berdi')
        }
        const data = await response.json()
        console.log('data', data)

        commit('SET_MOVIES_LIST', data)
      } catch (error) {
        toast.error((error as Error)?.message)
      } finally {
        commit('SET_IS_LOADING', false)
      }
    },
  },
  getters: {
    isLoading: (state: IState) => state.isLoading,
    moviesList: (state: IState) => state.moviesList,
    favorites: (state: IState) => state.favorites,
    filteredList: (state: IState) => {
      const query = state.searchQuery.trim().toLowerCase()
      if (query === '') {
        return state.moviesList
      }
      return state.moviesList.map((category) => {
        const filteredMovies = category?.data?.filter((movie: any) => {
          const matchesTitle = movie.title.toLowerCase().includes(query)
          const matchesGenre = movie.genre.some((g: any) => g.trim().toLowerCase().includes(query))
          return matchesTitle || matchesGenre
        })
        return { ...category, data: filteredMovies }
      })
    },
    getMovieById: (state: IState) => (id: number) => {
      for (const category of state.moviesList) {
        const foundMovie = category.data?.find((movie: IMovieItem) => movie.id === id)
        if (foundMovie) return foundMovie
      }
      return null
    },
  },
})
