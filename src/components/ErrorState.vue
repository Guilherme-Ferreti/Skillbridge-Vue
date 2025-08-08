<template>
  <div class="error-state">
    <p class="error-state__message">There was an error loading the data :(</p>
  </div>
</template>

<style lang="scss" scoped>
.error-state {
  display: flex;
  justify-content: center;
  align-items: center;

  &__message {
    color: $color-gray-35;
    font-weight: bold;
    font-size: $font-size--lg;
    text-align: center;
  }
}
</style>
