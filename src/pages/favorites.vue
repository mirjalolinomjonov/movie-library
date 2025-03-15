<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <main class="app-container">
    <MoviesList category="Sevimlilar" :item-data="store.state.favorites" />
  </main>
</template>

<style scoped></style>
