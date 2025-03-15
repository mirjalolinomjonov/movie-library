<script setup lang="ts">
import { ref, computed } from 'vue'
import VIcon from '@/components/common/VIcon.vue'
import MoveDetails from '@/components/MoveDetails.vue'
import { useToast } from 'vue-toastification'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useStore()
const toast = useToast()

// TYPES
import type { IMovieItem } from '@/types'

// COMPUTED
const movie = computed(() => store.getters.getMovieById(+route.params.slug))

// METHODS
const isFavorite = (movieId: number): boolean => {
  return store.state.favorites?.some((movie: IMovieItem) => movie.id === movieId)
}
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
  <main class="app-container">
    <section class="section">
      <div class="flex-center-between gap-4">
        <h2 class="section__title">
          {{ movie?.title }}
        </h2>
        <button
          @click="addToFavorites(movie)"
          class="favorite"
          :class="{ active: isFavorite(movie?.id) }"
        >
          <VIcon name="favorite" />
        </button>
      </div>
      <div class="bg-[#24303D] p-8 mt-4 rounded-[4px]">
        <MoveDetails
          v-bind="{
            poster_image: movie?.poster_image,
            title: movie?.title,
            genre: movie?.genre,
            country: movie?.country,
            release_date: movie?.release_date,
            language: movie?.language,
            duration: movie?.duration,
            age_limit: movie?.age_limit,
          }"
        />
      </div>
    </section>
    <div class="description flex gap-2">
      <VIcon class="-mt-3" name="quote-up" />
      {{ movie?.description }}
      <VIcon class="self-end -mb-3" name="quote-down" />
    </div>
    <section class="section">
      <video class="rounded-[4px] w-full" controls>
        <source src="" />
      </video>
    </section>
  </main>
</template>

<style scoped lang="scss">
.section__title {
  border-left: 3px solid $blue;
  padding-left: 1rem;
}

.description {
  @include font(0.9rem, 400, 1rem, $white);
  padding: 2.25rem 1.5rem;
  background: #24303d;
  border-radius: 4px;
}
</style>
