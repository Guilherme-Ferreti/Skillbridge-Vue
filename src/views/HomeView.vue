<script setup lang="ts">
import HomeHero from '@/components/HomeHero.vue';
</script>

<template>
  <HomeHero />
</template>

<style scoped lang="scss">
> section {
  margin-top: 1.875rem;

  @include for-tablet-landscape-up {
    margin-top: 5rem;
  }
}

.hero {
  margin-top: 3.125rem;
}
</style>
