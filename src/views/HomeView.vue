<template>
  <HomeHero class="hero-section" />
  <HomePartners class="home-section" />
  <section class="home-section video-section">
    <VideoPlayer
      src="/videos/institutional-video.mp4"
      poster="/images/team-members.webp"
    />
  </section>
  <HomeBenefits class="home-section" />
  <HomeCourses class="home-section" />
  <HomeTestimonials class="home-section" />
</template>

<script setup lang="ts">
import HomeBenefits from '@/components/HomeBenefits.vue';
import HomeCourses from '@/components/HomeCourses.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomePartners from '@/components/HomePartners.vue';
import HomeTestimonials from '@/components/HomeTestimonials.vue';
import VideoPlayer from '@/components/VideoPlayer.vue';
</script>

<style scoped lang="scss">
.home-section {
  margin-top: 1.875rem;

  @include for-tablet-landscape-up {
    margin-top: 5rem;
  }
}

.hero-section {
  margin-top: 3.125rem;
}

.video-section {
  display: grid;
  place-items: center;
}
</style>
