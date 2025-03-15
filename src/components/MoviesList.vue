<script setup lang="ts">
import MovieItem from './MovieItem.vue'
import type { IMovieItem } from '@/types/index.ts'

interface IMoviesList {
  category: string
  itemData: IMovieItem[]
}

// PROPS
defineProps<IMoviesList>()
</script>

<template>
  <section class="section">
    <h2 class="section__title">{{ category }}</h2>
    <div class="grid grid-cols-4 gap-4 my-6">
      <MovieItem v-for="item in 4" :key="item" />
    </div>

    <!-- VIEW MORE BUTTON WRAPPER -->
    <div class="flex-center-center">
      <button class="view-more-btn">View more</button>
    </div>
  </section>
</template>
