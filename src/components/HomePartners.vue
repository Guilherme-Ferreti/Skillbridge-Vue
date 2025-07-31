<template>
  <section
    class="home-partners"
    aria-label="Our partners"
  >
    <swiper-container
      class="swiper-container"
      init="false"
      ref="swiper"
    >
      <swiper-slide
        class="home-partners__logo"
        v-for="partner in partners"
      >
        <img
          :src="`/logos/partners/${partner.image}`"
          :alt="partner.alt"
          role="img"
        />
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script lang="ts" setup>
import type { SwiperContainer } from 'swiper/element';
import type { SwiperProps } from 'swiper/react';
import { onMounted, useTemplateRef } from 'vue';

const partners = [
  {
    image: 'adobe.svg',
    alt: 'Adobe logo',
  },
  {
    image: 'amazon.svg',
    alt: 'Amazon logo',
  },
  {
    image: 'netflix.svg',
    alt: 'Netflix logo',
  },
  {
    image: 'new-york-times.svg',
    alt: 'New York Times logo',
  },
  {
    image: 'notion.svg',
    alt: 'Notion logo',
  },
  {
    image: 'spotify.svg',
    alt: 'Spotify logo',
  },
  {
    image: 'zapier.svg',
    alt: 'Zapier logo',
  },
  {
    image: 'zoom.svg',
    alt: 'Zoom logo',
  },
];

const swiper = useTemplateRef<SwiperContainer | null>('swiper');

const swiperOptions: SwiperProps = {
  slidesPerView: 2,
  freeMode: true,
  loop: true,
  speed: 4500,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    475: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
      speed: 6500,
    },
    1024: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: partners.length - 1,
    },
  },
  injectStyles: [
    `.swiper-wrapper {
      align-items: center;
      transition-timing-function: linear !important;
      pointer-events: none;
    }`,
  ],
};

onMounted(() => {
  if (!swiper.value) return;

  Object.assign(swiper.value, swiperOptions);
  swiper.value.initialize();
});
</script>

<style lang="scss" scoped>
.home-partners {
  background-color: $color-white;
  padding: 0.625rem;
  width: 100%;
  user-select: none;

  @include for-tablet-landscape-up {
    padding: 1.5rem;
  }

  &__logo {
    border-right: 1px solid $color-gray-70;
    padding: 1.25rem 1.875rem;
    text-align: center;

    img {
      min-width: 2.5rem;
      height: 2rem;
      object-fit: contain;

      @include for-tablet-landscape-up {
        min-width: 5rem;
      }
    }
  }
}
</style>
