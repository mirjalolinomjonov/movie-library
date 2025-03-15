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
    <div v-if="itemData?.length" class="grid grid-cols-4 gap-4 my-6">
      <MovieItem v-for="item in itemData" :key="item.id" :movie="item" />
    </div>
    <p v-else class="text-white">Ushbu qidiruv bo‘yicha hech qanday ma'lumot topilmadi.</p>

    <!-- VIEW MORE BUTTON WRAPPER -->
    <div class="flex-center-center" v-if="itemData?.length > 15">
      <button class="view-more-btn">View more</button>
    </div>
  </section>
</template>
