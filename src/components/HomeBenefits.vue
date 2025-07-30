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
        color="secondary"
        :to="{ name: 'courses' }"
        aria-label="View all benefits"
      />
    </SectionHeader>

    <ol class="flex-grid">
      <AppCard
        v-for="(benefit, index) in benefits"
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
            :icon="ArrowUpRightIcon"
            background="secondary"
            :to="{ name: 'courses' }"
            aria-label="Learn more about our benefits"
          />
        </div>
      </AppCard>
    </ol>
  </section>
</template>

<script setup lang="ts">
import ArrowUpRightIcon from '@/assets/icons/ArrowUpRight.svg';
import AppButton from './AppButton.vue';
import AppCard from './AppCard.vue';
import AppIconButton from './AppIconButton.vue';
import SectionHeader from './SectionHeader.vue';

const benefits = [
  {
    number: '01',
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.',
  },
  {
    number: '02',
    title: 'Expert Instruction',
    description:
      'Learn from industry experts who have hands-on experience in design and development.',
  },
  {
    number: '03',
    title: 'Diverse Course Offerings',
    description: 'Explore a wide range of design and development courses covering various topics.',
  },
  {
    number: '04',
    title: 'Updated Curriculum',
    description:
      'Access courses with up-to-date content reflecting the latest trends and industry practices.',
  },
  {
    number: '05',
    title: 'Practical Projects and Assignments',
    description: 'Develop a portfolio showcasing your skills and abilities to potential employers.',
  },
  {
    number: '06',
    title: 'Interactive Learning Environment',
    description:
      'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
  },
];
</script>

<style scoped lang="scss">
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
