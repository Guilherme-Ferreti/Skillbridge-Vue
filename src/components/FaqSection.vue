<template>
  <section
    class="faq"
    aria-labelledby="faq__heading"
  >
    <AppCard
      class="faq__card"
      element="div"
    >
      <div class="faq__header">
        <h2 id="faq__heading">Frequenty Asked Questions</h2>
        <p>
          Still you have any questions? Contact our Team via
          <AppBasicLink
            name="support@skillbridge.com"
            to="mailto:support@skillbridge.com"
          />
        </p>
      </div>
      <div class="faq__questions">
        <AppLoadingIndicator
          v-if="faqStore.isLoadingData"
          size="large"
        />
        <ErrorState v-else-if="faqStore.errorOnLoad" />
        <template v-else>
          <details
            v-for="question in faqStore.questions"
            class="faq__question-wrapper"
            name="faq-question"
          >
            <summary class="faq__question">
              <span class="faq__question-text">{{ question.question }}</span>
              <div class="faq__question-icon">
                <PlusIcon />
              </div>
            </summary>
            <p class="faq__answer">{{ question.answer }}</p>
          </details>
        </template>
      </div>
    </AppCard>
  </section>
</template>

<script lang="ts" setup>
import AppBasicLink from './AppBasicLink.vue';
import AppCard from './AppCard.vue';
import PlusIcon from '@/assets/icons/Plus.svg';
import AppLoadingIndicator from './AppLoadingIndicator.vue';
import { useFaqStore } from '@/stores/faqStore';
import ErrorState from './ErrorState.vue';

const faqStore = useFaqStore();

faqStore.loadData();
</script>

<style lang="scss" scoped>
.faq {
  &__card {
    @include for-tablet-landscape-up {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 2rem;
    }
  }

  &__header {
    p {
      margin-top: 0.5rem;
    }
  }

  &__questions {
    margin-top: 2.5rem;

    @include for-tablet-landscape-up {
      margin-top: 0;
    }
  }

  &__question-wrapper {
    @include details-opening-animation;

    border: 1px solid $color-white-95;
    border-radius: $radius--lg;

    &:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  &__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.875rem;
    cursor: pointer;
    outline-offset: -3px;
    padding: 1.5rem;
    font-weight: bold;

    &::marker {
      content: none;
    }
  }

  &__question-icon {
    display: flex;
    align-items: center;
    align-self: baseline;
    border-radius: $radius--sm;
    background-color: $color-orange-95;
    padding: 0.75rem;

    svg {
      transition: transform 350ms ease-in-out;
      color: $color-gray-15;
    }
  }

  &__question-wrapper[open] .faq__question-icon svg {
    transform: rotate(45deg);
  }

  &__answer {
    border-top: 1px solid $color-white-95;
    padding: 1.25rem 1.5rem 1.5rem;
  }
}
</style>
