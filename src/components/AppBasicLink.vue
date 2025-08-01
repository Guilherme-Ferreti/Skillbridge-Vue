<template>
  <AppLink
    class="app-basic-link"
    :to="to"
  >
    {{ name }}
  </AppLink>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
import AppLink from './AppLink.vue';

defineProps<{
  to: RouteLocationRaw;
  name: string;
}>();
</script>

<style lang="scss" scoped>
.app-basic-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  text-align: center;

  &:hover,
  &:focus {
    color: $color-gray-35;
    text-decoration: underline;
  }
}
</style>
