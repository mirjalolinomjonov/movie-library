<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue'
</script>

<template>
  <main class="app-container">
    <!-- POPULAR -->
    <MoviesList category="Popular" :item-data="[]" />

    <!-- SERIES -->
    <MoviesList category="Series" :item-data="[]" />
  </main>
</template>

<style scoped lang="scss"></style>
