<script setup lang="ts">
import AppLogoIcon from '@/assets/icons/AppLogo.svg';
import BarsThreeBottomRightIcon from '@/assets/icons/BarsThreeBottomRight.svg';
import XMarkIcon from '@/assets/icons/XMark.svg';
import * as focusTrap from 'focus-trap';
import { nextTick, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import AppButton from './AppButton.vue';

const routes = [
  {
    name: 'home',
    label: 'Home',
  },
  {
    name: 'courses',
    label: 'Courses',
  },
  {
    name: 'about',
    label: 'About Us',
  },
  {
    name: 'pricing',
    label: 'Pricing',
  },
  {
    name: 'contact',
    label: 'Contact',
  },
];

const isOpen = ref(false);

let focusTrapInstance: ReturnType<typeof focusTrap.createFocusTrap> | null = null;

onMounted(() => {
  focusTrapInstance = focusTrap.createFocusTrap('.mobile-nav__drawer', {
    escapeDeactivates: false,
    allowOutsideClick: true,
  });
});

function toggle(): void {
  if (isOpen.value) {
    isOpen.value = false;
    nextTick(() => focusTrapInstance?.deactivate());
  } else {
    isOpen.value = true;
    nextTick(() => focusTrapInstance?.activate());
  }
}
</script>

<template>
  <div class="mobile-nav__wrapper">
    <nav
      :class="{ 'mobile-nav': true, 'mobile-nav--open': isOpen }"
      aria-label="Main navigation"
    >
      <ul class="mobile-nav__links">
        <li class="mobile-nav__logo">
          <RouterLink
            :to="{ name: 'home' }"
            aria-label="Home"
          >
            <AppLogoIcon />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'sign-up' }"
            class="mobile-nav__link"
          >
            Sign Up
          </RouterLink>
        </li>
        <li>
          <AppButton
            name="Log In"
            color="primary"
          />
        </li>
        <li>
          <button
            class="mobile-nav__open-button"
            aria-label="Open sidebar"
            aria-controls="mobile-nav__drawer"
            :aria-expanded="isOpen"
            @click="toggle"
          >
            <BarsThreeBottomRightIcon />
          </button>
        </li>
      </ul>
      <div
        class="mobile-nav__drawer"
        id="mobile-nav__drawer"
        :inert="!isOpen"
        @keyup.escape="toggle"
      >
        <div class="mobile-nav__drawer-head">
          <AppLogoIcon role="presentation" />
          <button
            class="mobile-nav__close-button"
            @click="toggle"
            aria-label="Close sidebar"
          >
            <XMarkIcon />
          </button>
        </div>
        <ul>
          <li
            class="mobile-nav__drawer-link"
            v-for="route in routes"
          >
            <RouterLink :to="{ name: route.name }">
              {{ route.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <div
      id="overlay"
      aria-hidden="true"
      @click="toggle"
    ></div>
  </div>
  <nav
    class="desktop-nav"
    aria-label="Main navigation"
  >
    <ul class="desktop-nav__links">
      <li
        class="desktop-nav__logo"
        aria-label="Skillbridge logo"
      >
        <AppLogoIcon />
      </li>
      <li
        class="desktop-nav__link"
        v-for="route in routes"
      >
        <RouterLink :to="{ name: route.name }">
          {{ route.label }}
        </RouterLink>
      </li>
      <li class="desktop-nav__link">
        <RouterLink :to="{ name: 'sign-up' }">Sign Up</RouterLink>
      </li>
      <li>
        <AppButton
          name="Log In"
          color="primary"
          :to="{ name: 'login' }"
        />
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.mobile-nav {
  display: block;

  @include for-tablet-landscape-up {
    display: none;
  }

  &--open {
    .mobile-nav__drawer {
      right: 0;
    }

    ~ #overlay {
      display: block;
    }
  }

  &__wrapper {
    display: block;

    @include for-tablet-landscape-up {
      display: none;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  &__logo {
    margin-right: auto;

    a {
      display: flex;
    }
  }

  &__open-button,
  &__close-button {
    display: flex;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  &__drawer {
    display: flex;
    position: fixed;
    top: 0;
    right: -100%;
    flex-direction: column;
    z-index: 10;
    transition: right 400ms ease-in-out;
    border-left: 1px solid $color-white-95;
    background-color: $color-white;
    width: 100%;
    max-width: 20rem;
    height: 100vh;
  }

  &__drawer-head,
  &__drawer-link a {
    padding: 1rem 1rem 1rem 2.5rem;
  }

  &__drawer-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__drawer-link {
    a {
      display: block;
      position: relative;
      transition: background-color 0.4s ease-in-out;
      outline-offset: -2px;
      width: 100%;
      height: 100%;
      overflow: hidden;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        z-index: -1;
        transition: transform 0.4s ease-in-out;
        background-color: $color-white-95;
        width: 100%;
        height: 100%;
        content: '';
      }

      &:hover,
      &:focus {
        &::before {
          transform: translateX(0);
        }
      }
    }
  }
}

.desktop-nav {
  display: none;

  @include for-tablet-landscape-up {
    display: block;
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  &__logo {
    margin-right: 3.5rem;
  }

  li:nth-last-child(2) {
    margin-left: auto;
  }
}

.mobile-nav,
.desktop-nav {
  border-bottom: 1px solid $color-white-95;
  padding-bottom: 0.875rem;

  &__link {
    &:has(.router-link-active),
    &:hover {
      border-bottom: 3px solid $color-primary;
    }
  }
}

#overlay {
  display: none;
  position: fixed;
  z-index: 9;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
