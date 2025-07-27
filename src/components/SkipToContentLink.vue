<template>
  <a
    class="skip-to-content-link"
    href="#main-content"
  >
    Skip to content
  </a>
</template>

<style scoped lang="scss">
.skip-to-content-link {
  position: absolute;
  left: 50%;
  transform: translateY(-100%) translateX(-50%);
  transition: transform 0.3s;
  background: $color-white;
  padding: 0.5rem;
  text-decoration: underline;
}

.skip-to-content-link:focus {
  transform: translateY(0%) translateX(-50%);
}
</style>
