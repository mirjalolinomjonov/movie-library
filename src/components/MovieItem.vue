<script setup lang="ts">
import { ref } from 'vue'
import VIcon from './common/VIcon.vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

// DATA
const link: string = 'https://picsum.photos/300/500'
const isFavorite = ref<boolean>(false)

// METHODS
function favorite(): void {
  isFavorite.value = !isFavorite.value
  if (isFavorite.value) {
    toast.success("Sevimlilar ro'yxatiga qo'shildi")
  } else {
    toast.warning("Sevimlilar ro'yxatidan olib tashlandi")
  }
}
</script>

<template>
  <article class="movie-item">
    <figure class="movie-item__figure">
      <img :src="link" loading="lazy" alt="movie item" />
      <div class="movie-item__icons flex-center-between gap-2 w-full">
        <span class="flex-col items-center gap-1">
          25
          <VIcon name="eye" />
        </span>
        <span class="flex-col items-center gap-1">
          1:20:05
          <VIcon name="time" />
        </span>
        <button
          @click="favorite"
          class="flex-col items-center gap-1 favorite"
          :class="{ active: isFavorite }"
        >
          365
          <VIcon name="favorite" />
        </button>
      </div>
    </figure>
    <figcaption class="movie-item__figcaption mt-2">
      <router-link class="underline" to="/fds"> Lorem, ipsum dolor. </router-link>
      <span class="movie-item__created-at mt-2">2025</span>
    </figcaption>
  </article>
</template>

<style scoped lang="scss">
.movie-item {
  width: 100%;
  height: 350px;
  // movie-item__figure
  &__figure {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 4px;
    background: $light-black;
    img {
      @include img-cover;
    }
  }
  // movie-item__icons
  &__icons {
    position: absolute;
    z-index: 2;
    bottom: 0;
    padding: 1rem 2rem;
    background: linear-gradient(to top, #000, transparent);
    span,
    button {
      @include font(0.7rem, 400, 1rem, $white);
    }
  }
  // movie-item__figcaption
  &__figcaption {
    @include font(1.2rem, 500, 1.3rem, $white);
    text-align: center;
  }
  // movie-item__created-at
  &__created-at {
    display: block;
    @include font(0.8rem, 400, 1rem, $light-black);
  }
}
</style>
