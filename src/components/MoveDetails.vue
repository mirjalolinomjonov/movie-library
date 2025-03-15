<script setup lang="ts">
const detail = {
  name: `Titanlar hujumi: So'nggi hujum (anime, premyera, o'zbek tilida)
`,
  genre: `Tarjima kinolar / Jangari / Fantastika / Multfilm / Drama / Anime / Fentezi`,
  country: 'Yaponiya',
  year: 2025,
  language: `O'zbekcha sinxron dublyaj`,
  time: '	2 soat 25 daqiqa',
  age_limit: '18+',
}

const link: string = 'https://picsum.photos/300/500'
</script>

<template>
  <div class="detail flex gap-6">
    <figure class="detail__figure shrink-0">
      <img :src="link" alt="" />
    </figure>
    <ul class="detail-list flex-col gap-2 w-full">
      <li v-for="(value, key) in detail" :key="key" class="detail-list__item flex-center">
        <span class="shrink-0">{{ key }}</span>
        <span> {{ value }}</span>
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
      span {
        display: block;
        @include font(0.8rem, 500, 2rem, #798fa6);
        padding: 6px;
        &:first-child {
          font-size: 0.6rem;
          width: 80px;
          text-align: center;
          background: #304156;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
