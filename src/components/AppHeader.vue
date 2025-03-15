<script setup lang="ts">
// DATA
const navbarItems = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Favorites', path: '/favorites' },
]
</script>

<template>
  <header class="header">
    <div class="app-container">
      <div class="flex-center-between gap-4">
        <router-link to="/">Movie</router-link>
        <ul class="nav-list flex-center-between gap-4">
          <li v-for="item in navbarItems" :key="item.id" class="nav-list__item">
            <router-link :to="item.path" class="nav-list__item-link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 12px;
  background: #1e2324;
}
</style>
