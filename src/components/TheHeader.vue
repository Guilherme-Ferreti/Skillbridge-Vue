<template>
  <header class="header | container">
    <TheHeaderCallout />
    <TheHeaderNavbar />
  </header>
</template>

<script lang="ts" setup>
import TheHeaderCallout from './TheHeaderCallout.vue';
import TheHeaderNavbar from './TheHeaderNavbar.vue';
</script>

<style lang="scss" scoped>
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
