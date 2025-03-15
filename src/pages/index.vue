<script setup lang="ts">
import MovieItem from '@/components/MovieItem.vue'
</script>

<template>
  <main class="app-container">
    <section class="section">
      <h2 class="section__title">Popular</h2>
      <div class="grid grid-cols-4 gap-4 my-6">
        <router-link v-for="item in 5" :key="item" to="/fds">
          <MovieItem />
        </router-link>
      </div>
      <div class="flex-center-center">
        <button class="view-more-btn">View more</button>
      </div>
    </section>
    <section class="section">
      <h2 class="section__title">Series</h2>
      <div class="grid grid-cols-4 gap-4 my-6">
        <router-link v-for="item in 5" :key="item" to="/fds">
          <MovieItem />
        </router-link>
      </div>
      <div class="flex-center-center">
        <button class="view-more-btn">View more</button>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
