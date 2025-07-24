<script setup lang="ts">
import TheHeaderCallout from './TheHeaderCallout.vue';
import TheHeaderNavbar from './TheHeaderNavbar.vue';
</script>

<template>
  <header class="header | container">
    <TheHeaderCallout />
    <TheHeaderNavbar />
  </header>
</template>

<style scoped lang="scss">
.header {
  padding-top: 1.75rem;

  @include for-tablet-landscape-up {
    padding-top: 1.25rem;
  }

  > *:not(:first-child) {
    padding-top: 1rem;
  }
}
</style>
