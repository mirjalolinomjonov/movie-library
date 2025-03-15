<script setup lang="ts">
import { onMounted, computed } from 'vue'
import MoviesList from '@/components/MoviesList.vue'
import { useStore } from 'vuex'
import Loading from '@/components/common/Loading.vue'

// DATA
const store = useStore()

// COMPUTED PROPERTY
const isLoading = computed(() => store.getters.isLoading)
const filteredList = computed(() => store.getters.filteredList)
// LIFECYCLE HOOKS
onMounted(() => {
  store.dispatch('fetchList')
})
</script>

<template>
  <main class="app-container">
    <Loading v-if="isLoading" />
    <MoviesList
      v-for="item in filteredList"
      :key="item.id"
      :category="item.category.label"
      :item-data="item.data"
    />
  </main>
</template>

<style scoped lang="scss"></style>
