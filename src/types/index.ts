import { IMovieItem } from './index'
export interface IMovieItem {
  id: number
  poster_image: string
  title: string
  genre: string[]
  country: string
  release_date: number
  language: string
  duration: string
  age_limit: string
  description: string
  like: number
  views: number
}

export interface IMoviesList {
  id: number
  category: { label: string; code: string }
  data: IMovieItem[]
}
