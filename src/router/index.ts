import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import CoursesView from '@/views/CoursesView.vue';
import ContactView from '@/views/ContactView.vue';
import PricingView from '@/views/PricingView.vue';
import SignUpView from '@/views/SignUpView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Power Your Potential',
      },
    },
    {
      path: '/courses',
      name: 'courses',
      component: CoursesView,
      meta: {
        title: 'Courses',
      },
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About Us',
      },
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView,
      meta: {
        title: 'Pricing',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact',
      },
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView,
      meta: {
        title: 'Sign Up',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Log In',
      },
    },
  ],
});

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | Skillbridge` : 'Skillbridge';
});

export default router;
