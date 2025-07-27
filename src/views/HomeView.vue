<script setup lang="ts">
import HomeHero from '@/components/HomeHero.vue';
import HomePartners from '@/components/HomePartners.vue';
</script>

<template>
  <HomeHero class="hero-section" />
  <HomePartners class="home-section" />
</template>

<style scoped lang="scss">
.home-section {
  margin-top: 1.875rem;

  @include for-tablet-landscape-up {
    margin-top: 5rem;
  }
}

.hero-section {
  margin-top: 3.125rem;
}
</style>
