<template>
  <SkipToContentLink />
  <TheHeader />
  <main
    class="container"
    id="main-content"
  >
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import SkipToContentLink from '@/components/SkipToContentLink.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>
