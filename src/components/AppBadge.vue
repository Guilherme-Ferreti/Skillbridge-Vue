<template>
  <div class="app-badge">
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ text: string }>();
</script>

<style lang="scss" scoped>
.app-badge {
  border: 1px solid $color-white-95;
  border-radius: $radius--sm;
  background-color: $color-white;
  padding: 0.5rem 0.875rem;
}
</style>
