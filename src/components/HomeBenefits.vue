<template>
  <section
    class="home-benefits"
    aria-labelledby="home-benefits__heading"
  >
    <SectionHeader
      id="home-benefits__heading"
      title="Benefits"
      introductory-text="Experience the future of education with flexible schedules, expert instructors, and a wide range of courses. Build your skills with practical projects and an engaging learning environment."
      side-content-centered
    >
      <AppButton
        name="View All"
        aria-label="View all benefits"
        color="secondary"
        :to="{ name: 'courses' }"
      />
    </SectionHeader>
    <AppLoadingIndicator
      v-if="isLoading"
      size="large"
    />
    <ol
      v-else
      class="flex-grid"
    >
      <AppCard
        v-for="(benefit, index) in homeStore.benefits"
        class="home-benefits__card"
        element="li"
        :value="index"
      >
        <div class="home-benefits__card-heading">
          <span class="home-benefits__card-number">{{ benefit.number }}</span>
        </div>

        <div class="home-benefits__card-body">
          <h3>{{ benefit.title }}</h3>
          <p class="home-benefits__card-description">{{ benefit.description }}</p>
        </div>

        <div class="home-benefits__card-footer">
          <AppIconButton
            aria-label="Learn more about our benefits"
            :icon="ArrowUpRightIcon"
            background="secondary"
            :to="{ name: 'courses' }"
          />
        </div>
      </AppCard>
    </ol>
  </section>
</template>

<script lang="ts" setup>
import ArrowUpRightIcon from '@/assets/icons/ArrowUpRight.svg';
import AppButton from './AppButton.vue';
import AppCard from './AppCard.vue';
import AppIconButton from './AppIconButton.vue';
import AppLoadingIndicator from './AppLoadingIndicator.vue';
import SectionHeader from './SectionHeader.vue';
import { useHomeStore } from '@/stores/homeStore';

const homeStore = useHomeStore();

defineProps<{
  isLoading: boolean;
}>();
</script>

<style lang="scss" scoped>
.home-benefits {
  &__card {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    max-width: 24rem;

    @include for-tablet-landscape-up {
      gap: 2.5rem;
    }
  }

  &__card-heading,
  &__card-footer {
    text-align: right;
  }

  &__card-number {
    font-weight: bold;
    font-size: $font-size--4xl;
  }

  &__card-description {
    margin-top: 0.625rem;
  }

  &__card-footer {
    margin-top: auto;

    .app-icon-button {
      color: $color-orange-50;
    }
  }
}
</style>
