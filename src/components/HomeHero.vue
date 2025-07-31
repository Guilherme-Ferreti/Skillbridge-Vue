<template>
  <section
    class="hero"
    aria-labelledby="hero__heading"
  >
    <h1
      class="hero__heading"
      id="hero__heading"
    >
      <div class="hero__first-line-title-wrapper">
        <AbstractLineIcon
          class="hero__abstract-line"
          role="presentation"
        />
        <div class="hero__icon-wrapper"><BoltIcon role="presentation" /></div>
        <span class="hero__first-line-title">
          <span>Unlock</span>
          Your Creative Potential
        </span>
      </div>
      <span class="hero__second-line-title"> with Online Design and Development Courses</span>
    </h1>

    <p class="hero__text">Learn from Industry Experts and Enhance Your Skills.</p>

    <div class="hero__buttons-wrapper">
      <AppButton
        name="Explore Courses"
        color="primary"
        :to="{ name: 'courses' }"
      />
      <AppButton
        name="View Pricing"
        color="secondary"
        :to="{ name: 'pricing' }"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import AbstractLineIcon from '@/assets/icons/AbstractLine.svg';
import BoltIcon from '@/assets/icons/Bolt.svg';
import AppButton from './AppButton.vue';
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  place-items: center;
  color: $color-gray-10;
  text-align: center;

  &__heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__first-line-title-wrapper {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: 1px solid $color-white-95;
    border-radius: $radius--sm;
    background-color: $color-white;
    padding: 0.75rem;
    padding-right: 1.6rem;
    width: fit-content;
  }

  &__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-orange-95;
    padding: 0.75rem;
  }

  &__first-line-title {
    font-weight: bold;
    font-size: $font-size--md;

    @include for-tablet-portrait-up {
      font-size: $font-size--2xl;
    }

    @include for-tablet-landscape-up {
      font-size: $font-size--3xl;
    }

    span {
      color: $color-primary;
    }
  }

  &__abstract-line {
    position: absolute;
    top: -16px;
    left: -5%;
    width: 2.5rem;
    height: 2.5rem;

    @include for-tablet-portrait-up {
      top: -28px;
      left: -5%;
    }

    @include for-tablet-landscape-up {
      top: -32px;
      left: -5%;
      width: 3rem;
      height: 3rem;
    }
  }

  &__second-line-title {
    margin-top: 1rem;
    font-weight: 500;
    font-size: $font-size--xl;

    @include for-tablet-landscape-up {
      margin-top: 2rem;
    }
  }

  &__text {
    margin-top: 0.5rem;
    color: $color-gray-10;
  }

  &__buttons-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    margin-top: 2rem;

    @include for-tablet-landscape-up {
      margin-top: 3rem;
    }
  }
}
</style>
