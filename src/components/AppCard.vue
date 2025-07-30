<template>
  <component
    :is="element"
    class="app-card"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{ element: string }>();
</script>

<style scoped lang="scss">
.app-card {
  border-radius: $radius--lg;
  background-color: $color-white;
  padding: 1.875rem;
  width: 100%;

  @include for-tablet-landscape-up {
    padding: 2.5rem;
  }
}
</style>
