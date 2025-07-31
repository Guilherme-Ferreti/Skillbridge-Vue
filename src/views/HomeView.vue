<template>
  <HomeHero class="hero-section" />
  <HomePartners class="home-section" />
  <section class="home-section video-section">
    <VideoPlayer
      src="/videos/institutional-video.mp4"
      poster="/images/team-members.webp"
    />
  </section>
  <HomeBenefits
    class="home-section"
    :benefits="benefits"
  />
  <HomeCourses
    class="home-section"
    :courses="courses"
  />
  <HomeTestimonials
    class="home-section"
    :testimonials="testimonials"
  />
</template>

<script lang="ts" setup>
import api from '@/api';
import HomeBenefits from '@/components/HomeBenefits.vue';
import HomeCourses from '@/components/HomeCourses.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomePartners from '@/components/HomePartners.vue';
import HomeTestimonials from '@/components/HomeTestimonials.vue';
import VideoPlayer from '@/components/VideoPlayer.vue';
import type { HomeBenefit, HomeCourse, HomeTestimonial } from '@/types/home';
import { ref } from 'vue';

const benefits = ref<HomeBenefit[]>([]);
const courses = ref<HomeCourse[]>([]);
const testimonials = ref<HomeTestimonial[]>([]);

async function getData() {
  const { data } = await api.homeService.getData();

  benefits.value = data.benefits;
  courses.value = data.courses;
  testimonials.value = data.testimonials;
}

getData();
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
