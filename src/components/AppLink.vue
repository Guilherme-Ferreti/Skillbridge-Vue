<template>
  <a
    v-if="isExternal"
    :href="to as string"
    target="_blank"
    rel="external noopener"
  >
    <slot />
  </a>
  <router-link
    v-else
    :to="to"
  >
    <slot />
  </router-link>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { RouterLink, type RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to: RouteLocationRaw;
}>();

const isExternal = computed(() => {
  return (
    typeof props.to === 'string' &&
    (props.to.startsWith('http') || props.to.startsWith('mailto') || props.to.startsWith('tel'))
  );
});
</script>
