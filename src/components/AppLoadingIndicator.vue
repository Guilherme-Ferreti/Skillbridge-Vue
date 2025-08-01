<template>
  <div class="app-loading-indicator__wrapper">
    <div
      class="app-loading-indicator"
      :data-size="size"
    ></div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    size: 'small' | 'medium' | 'large';
  }>(),
  {
    size: 'small',
  },
);
</script>

<style lang="scss" scoped>
.app-loading-indicator {
  border: var(--border-width) solid $color-white;
  border-top-color: $color-primary;
  border-radius: 50%;
  width: var(--width);
  height: var(--height);
  animation: spin 1s linear infinite;

  &[data-size='small'] {
    --border-width: 0.25rem;
    --width: 2rem;
    --height: 2rem;
  }

  &[data-size='medium'] {
    --border-width: 0.375rem;
    --width: 3rem;
    --height: 3rem;
  }

  &[data-size='large'] {
    --border-width: 0.375rem;
    --width: 4rem;
    --height: 4rem;
  }

  &__wrapper {
    display: grid;
    place-items: center;
    width: 100%;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
