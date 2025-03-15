<script setup lang="ts">
import VIcon from './common/VIcon.vue'
import { useToast } from 'vue-toastification'
import { turncate } from '@/utils/helpers'
import { useStore } from 'vuex'

const store = useStore()
const toast = useToast()

// TYPES
import type { IMovieItem } from '@/types'

// PROPS
defineProps<{ movie: IMovieItem }>()

// METHODS
const isFavorite = (movieId: number): boolean => {
  return store.state.favorites?.some((movie: IMovieItem) => movie.id === movieId)
}
// const getFavoriteById = (id: number) => favorites.value.find((movie: IMovieItem) => movie.id === id)
function addToFavorites(payload: IMovieItem): void {
  if (!isFavorite(payload.id)) {
    store.commit('SET_TO_FAVORITES', payload)
    toast.success("Sevimlilar ro'yxatiga qo'shildi")
  } else {
    store.commit('REMOVE_FROM_FAVORITES', payload.id)
    toast.warning("Sevimlilar ro'yxatidan olib tashlandi")
  }
}
</script>

<template>
  <article :title="movie.title" class="movie-item">
    <figure class="movie-item__figure">
      <img :src="movie.poster_image" loading="lazy" :alt="movie.title" />
      <div class="movie-item__icons flex-center-between gap-2 w-full">
        <span class="flex-col items-center gap-1">
          {{ movie.views }}
          <VIcon name="eye" />
        </span>
        <span class="flex-col items-center gap-1">
          {{ movie.duration }}
          <VIcon name="time" />
        </span>
        <button
          @click="addToFavorites(movie)"
          class="flex-col items-center gap-1 favorite"
          :class="{ active: isFavorite(movie.id) }"
        >
          {{ movie.like }}
          <VIcon name="favorite" />
        </button>
      </div>
    </figure>
    <figcaption class="movie-item__figcaption mt-2">
      <router-link class="underline" :to="`/${movie.id}`">
        {{ turncate(movie.title, 30, '...') }}
      </router-link>
      <span class="movie-item__created-at mt-2">{{ movie.release_date }}</span>
    </figcaption>
  </article>
</template>

<style scoped lang="scss">
.movie-item {
  width: 100%;
  height: 350px;
  // movie-item__figure
  &__figure {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 4px;
    background: $light-black;
    img {
      @include img-cover;
    }
  }
  // movie-item__icons
  &__icons {
    position: absolute;
    z-index: 2;
    bottom: 0;
    padding: 1rem 2rem;
    background: linear-gradient(to top, #000, #0000001f);
    span,
    button {
      @include font(0.7rem, 400, 1rem, $white);
    }
  }
  // movie-item__figcaption
  &__figcaption {
    @include font(1.2rem, 500, 1.3rem, $white);
    text-align: center;
  }
  // movie-item__created-at
  &__created-at {
    display: block;
    @include font(0.8rem, 400, 1rem, $light-black);
  }
}
</style>
