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
  <FaqSection class="home-section" />
</template>

<script lang="ts" setup>
import FaqSection from '@/components/FaqSection.vue';
import HomeBenefits from '@/components/HomeBenefits.vue';
import HomeCourses from '@/components/HomeCourses.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomePartners from '@/components/HomePartners.vue';
import HomeTestimonials from '@/components/HomeTestimonials.vue';
import VideoPlayer from '@/components/VideoPlayer.vue';
import { useHomeStore } from '@/stores/homeStore';

const homeStore = useHomeStore();

homeStore.loadData();
</script>

<style lang="scss" scoped>
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
