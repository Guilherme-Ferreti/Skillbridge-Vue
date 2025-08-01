<template>
  <component
    class="app-card"
    :is="element"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineProps<{ element: string }>();
</script>

<style lang="scss" scoped>
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
