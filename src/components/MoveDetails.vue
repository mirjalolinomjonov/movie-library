<script setup lang="ts">
interface IProps {
  poster_image: string
  title: string
  genre: string[]
  country: string
  release_date: number
  language: string
  duration: string
  age_limit: string
}

defineProps<IProps>()
</script>

<template>
  <div class="detail flex gap-6">
    <figure class="detail__figure shrink-0">
      <img :src="poster_image" :alt="title" />
    </figure>
    <ul class="detail-list flex-col gap-2 w-full">
      <li class="detail-list__item flex-center">
        <span class="shrink-0">Name</span>
        <span> {{ title }}</span>
      </li>
      <li class="detail-list__item flex-center">
        <span class="shrink-0">Genre</span>
        <span>
          <span v-for="(g, i) in genre" :key="i">{{ g }} / </span>
        </span>
      </li>
      <li class="detail-list__item flex-center">
        <span class="shrink-0">country</span>
        <span> {{ country }}</span>
      </li>
      <li class="detail-list__item flex-center">
        <span class="shrink-0">Release date</span>
        <span> {{ release_date }}</span>
      </li>
      <li class="detail-list__item flex-center">
        <span class="shrink-0">Language</span>
        <span> {{ language }}</span>
      </li>
      <li class="detail-list__item flex-center">
        <span class="shrink-0">Duration</span>
        <span> {{ duration }}</span>
      </li>
      <li class="detail-list__item flex-center">
        <span class="shrink-0">Age limit</span>
        <span> {{ age_limit }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.detail {
  // detail__figure
  &__figure {
    width: 248px;
    height: 368px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid $white;
    background: $light-black;
    img {
      @include img-cover;
    }
  }
  // detail-list
  &-list {
    // detail-list__item
    &__item {
      border-radius: 4px;
      overflow: hidden;
      background: #222933;
      transition: all 0.15s ease-in-out;
      &:hover {
        background: #1d232c;
      }
      & > span {
        display: block;
        @include font(0.8rem, 500, 2rem, #798fa6);
        padding: 6px;
        &:first-child {
          font-size: 0.6rem;
          width: 120px;
          text-align: center;
          background: #304156;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
