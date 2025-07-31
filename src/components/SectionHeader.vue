<template>
  <div class="section-header">
    <h2 :id="id">{{ title }}</h2>
    <div class="section-header__content">
      <p>
        {{ introductoryText }}
      </p>
      <div
        v-if="$slots.default"
        :class="{
          'section-header__side-content': true,
          'section-header__side-content--centered': sideContentCentered,
        }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    id: string;
    title: string;
    introductoryText: string;
    sideContentCentered?: boolean;
  }>(),
  {
    sideContentCentered: false,
  },
);
</script>

<style lang="scss" scoped>
.section-header {
  &__content {
    display: grid;
    column-gap: 2.25rem;
    row-gap: 1.25rem;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;

    @include for-large-tablet-portrait-up {
      grid-template-columns: auto max-content;
    }
  }

  &__side-content--centered {
    place-items: center;
  }
}
</style>
