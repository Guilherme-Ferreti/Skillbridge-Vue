<template>
  <section
    class="home-testimonials"
    aria-labelledby="home-testimonials__heading"
  >
    <SectionHeader
      id="home-testimonials__heading"
      title="Our Testimonials"
      introductoryText="Explore our collection of inspiring testimonials where past students share their experiences with our e-learning courses."
    >
      <AppButton
        name="View All"
        aria-label="View all testimonials"
        :to="{ name: 'home' }"
        color="secondary"
      />
    </SectionHeader>
    <AppLoadingIndicator
      v-if="isLoading"
      size="large"
    />
    <ul
      v-else
      class="flex-grid"
    >
      <AppCard
        v-for="testimonial in testimonials"
        class="home-testimonials__card"
        element="li"
      >
        <blockquote>
          <p class="home-testimonials__card-content">{{ testimonial.quote }}</p>
        </blockquote>
        <div class="home-testimonials__card-footer">
          <div class="home-testimonials__card-author">
            <img
              :src="testimonial.authorImage"
              :alt="`${testimonial.authorName}'s profile picture`"
              loading="lazy"
            />
            <p>{{ testimonial.authorName }}</p>
          </div>
          <AppButton
            name="Read Full Story"
            :to="{ name: 'home' }"
            color="gray"
            :aria-label="`Read ${testimonial.authorName}'s full story`"
          />
        </div>
      </AppCard>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import type { HomeTestimonial } from '@/types/home';
import AppButton from './AppButton.vue';
import AppCard from './AppCard.vue';
import AppLoadingIndicator from './AppLoadingIndicator.vue';
import SectionHeader from './SectionHeader.vue';

defineProps<{
  testimonials: HomeTestimonial[];
  isLoading: boolean;
}>();
</script>

<style lang="scss" scoped>
.home-testimonials {
  --content-padding: 1.875rem;
  --footer-padding: 1.25rem;

  &__card {
    display: flex;
    flex-direction: column;
    padding: 0;
    max-width: 39rem;
  }

  &__card-content {
    padding: var(--content-padding);
  }

  &__card-footer {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: var(--footer-padding);
    margin-top: auto;
    border-top: 1px solid $color-white-95;
    background-color: $color-white-99;
    padding: var(--footer-padding);

    @include for-tablet-portrait-up {
      grid-template-columns: 1fr 1fr;
      place-items: unset;

      .app-button {
        place-self: end;
      }
    }
  }

  &__card-author {
    display: flex;
    align-items: center;
    gap: var(--footer-padding);

    img {
      border-radius: $radius--sm;
      width: 3.125rem;
      height: 3.125rem;
    }

    p {
      color: $color-gray-20;
    }
  }

  @include for-tablet-landscape-up {
    --content-padding: 2.5rem;
    --footer-padding: 1.875rem;
  }
}
</style>
