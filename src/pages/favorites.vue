<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue'
</script>

<template>
  <main class="app-container">
    <MoviesList category="Sevimlilar" :item-data="[]" />
  </main>
</template>

<style scoped></style>
