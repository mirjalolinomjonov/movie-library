<script setup lang="ts"></script>

<template>
  <div class="loading flex-center-center">
    <span>loading...</span>
  </div>
</template>

<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000af;
  z-index: 999;
  span {
    color: $white;
  }
}
</style>
