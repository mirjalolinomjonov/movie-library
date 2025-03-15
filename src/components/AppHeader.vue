<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
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
        <router-link class="header__logo" to="/">Movie</router-link>
        <ul class="nav-list flex-center-between gap-4">
          <input
            v-if="route.name === 'home'"
            v-model="store.state.searchQuery"
            class="nav-list__search"
            placeholder="Search by movie title or genre"
            type="search"
            name=""
            id=""
          />
          <li v-for="item in navbarItems" :key="item.id" class="nav-list__item">
            <router-link :to="item.path" class="text-white nav-list__item-link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 12px;
  background: $black;
  border-bottom: 1px solid $light-black;
  // header__logo
  &__logo {
    @include font(2rem, 600, 2rem, $white);
  }
  .nav-list__search {
    background: $light-black;
    width: 300px;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 6px 12px;
    outline: none;
    @include font(0.9rem, 500, 1rem, $white);
    letter-spacing: 1%;
    &::placeholder {
      color: #939596;
    }
    &:focus {
      border-color: $white;
    }
  }
  .nav-list__item-link {
    @include font(1rem, 600, 1rem, $light-black);
    &.router-link-exact-active {
      color: $white;
    }
  }
}
</style>
