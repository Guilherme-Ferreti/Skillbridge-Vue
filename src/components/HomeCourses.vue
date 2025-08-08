<template>
  <section
    class="home-courses"
    aria-labelledby="home-courses__heading"
  >
    <SectionHeader
      id="home-courses__heading"
      title="Our Courses"
      introductoryText="It can be tough to pick the right path for your learning journey. Our courses are designed to make that choice simpler, offering you practical knowledge and skills you can use right away."
    >
      <AppButton
        name="View All"
        aria-label="View all courses"
        color="secondary"
        :to="{ name: 'courses' }"
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
        v-for="course in homeStore.courses"
        class="home-courses__card"
        element="li"
      >
        <div class="home-courses__card-teaser-image">
          <img
            role="presentation"
            :src="course.teaserImage"
            :alt="course.name"
            loading="lazy"
          />
        </div>
        <div class="home-courses__card-details">
          <div class="home-courses__card-badges">
            <AppBadge
              :text="`${course.expectedCompletionWeeks} ${course.expectedCompletionWeeks > 1 ? 'weeks' : 'week'}`"
            />
            <AppBadge :text="course.skillLevel" />
          </div>
          <p class="home-courses__card-instructor">By {{ course.instructorName }}</p>
        </div>
        <div>
          <h3>{{ course.name }}</h3>
          <p class="home-courses__card-teaser-text">{{ course.teaser }}</p>
        </div>
        <AppButton
          name="Get it Now"
          :to="{ name: 'courses' }"
          color="gray"
          :aria-label="`Get ${course.name} now`"
        />
      </AppCard>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import AppBadge from './AppBadge.vue';
import AppButton from './AppButton.vue';
import AppCard from './AppCard.vue';
import AppLoadingIndicator from './AppLoadingIndicator.vue';
import SectionHeader from './SectionHeader.vue';
import { useHomeStore } from '@/stores/homeStore';

const homeStore = useHomeStore();

defineProps<{
  isLoading: boolean;
}>();
</script>

<style lang="scss" scoped>
.home-courses {
  &__card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 39rem;

    .app-button {
      margin-top: auto;
      width: 100%;
    }
  }

  &__card-teaser-image {
    border-radius: $radius--md;
    overflow: hidden;

    img {
      transition: all 350ms;
      aspect-ratio: 2.06;
      width: 100%;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  &__card-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.875rem;
  }

  &__card-badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.625rem;
  }

  &__card-instructor {
    color: inherit;
    font-weight: bold;
  }

  &__card-teaser-text {
    margin-top: 0.625rem;
  }
}
</style>
