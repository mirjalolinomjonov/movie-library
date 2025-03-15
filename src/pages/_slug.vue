<script setup lang="ts">
import { ref } from 'vue'
import VIcon from '@/components/common/VIcon.vue'
import MoveDetails from '@/components/MoveDetails.vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

// DATA
const isFavorite = ref<boolean>(false)

// METHODS
function favorite() {
  isFavorite.value = !isFavorite.value
  if (isFavorite.value) {
    toast.success("Sevimlilar ro'yxatiga qo'shildi")
  } else {
    toast.warning("Sevimlilar ro'yxatidan olib tashlandi")
  }
}
</script>

<template>
  <main class="app-container">
    <section class="section">
      <div class="flex-center-between gap-4">
        <h2 class="section__title">
          Titanlar hujumi: So'nggi hujum (anime, premyera, o'zbek tilida)
        </h2>
        <button @click="favorite" class="favorite" :class="{ active: isFavorite }">
          <VIcon name="favorite" />
        </button>
      </div>
      <div class="bg-[#24303D] p-8 mt-4 rounded-[4px]">
        <MoveDetails />
      </div>
    </section>
    <div class="description flex gap-2">
      <VIcon class="-mt-3" name="quote-up" />
      Erenning halokatli harakatlaridan so‘ng, uning do‘stlari va sobiq dushmanlari unga qarshi
      birlashadilar. Armin, Mikasa va tirik qolgan razvedka korpusi askarlari Reyner Braun hamda
      Marley armiyasining qolgan qismi bilan vaqtinchalik ittifoq tuzadilar. Insonlar va titanlar
      o‘rtasidagi qarama-qarshilik cho‘qqisiga yetadi.
      <VIcon class="self-end -mb-3" name="quote-down" />
    </div>
    <section class="section">
      <video class="rounded-[4px] w-full" controls>
        <source src="" />
      </video>
    </section>
  </main>
</template>

<style scoped lang="scss">
.section__title {
  border-left: 3px solid $blue;
  padding-left: 1rem;
}

.description {
  @include font(0.9rem, 400, 1rem, $white);
  padding: 2.25rem 1.5rem;
  background: #24303d;
  border-radius: 4px;
}
</style>
