<template>
  <div class="header-callout | breakout">
    <RouterLink
      :to="{ name: 'home' }"
      class="header-callout__link"
    >
      <span>Free Courses 🌟 Sale Ends Soon, Get It Now</span>
      <ArrowRightIcon />
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import ArrowRightIcon from '@/assets/icons/ArrowRight.svg';
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.header-callout {
  border-radius: $radius--sm;
  background-color: $color-primary;
  padding: 0.625rem 1rem;
  width: 100%;
  color: $color-white;
  font-size: $font-size--sm;

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }

    .icon {
      flex-shrink: 0;
    }
  }
}
</style>
