<script setup lang="ts">
import TheHero from '@/components/TheHero.vue';
</script>

<template>
  <TheHero />
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
