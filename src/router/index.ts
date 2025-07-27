import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Power Your Potential',
      },
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('@/views/CoursesView.vue'),
      meta: {
        title: 'Courses',
      },
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About Us',
      },
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/views/PricingView.vue'),
      meta: {
        title: 'Pricing',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact',
      },
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('@/views/SignUpView.vue'),
      meta: {
        title: 'Sign Up',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
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
