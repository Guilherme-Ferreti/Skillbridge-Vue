import api from '@/api';
import type { HomeBenefit, HomeCourse, HomeTestimonial } from '@/types/home';
import { defineStore } from 'pinia';

interface StoreState {
  benefits: HomeBenefit[];
  courses: HomeCourse[];
  testimonials: HomeTestimonial[];
  isLoadingData: boolean;
}

export const useHomeStore = defineStore('home', {
  state: (): StoreState => ({
    benefits: [],
    courses: [],
    testimonials: [],
    isLoadingData: true,
  }),
  getters: {
    shouldLoadData: (state) =>
      state.benefits.length === 0 || state.courses.length === 0 || state.testimonials.length === 0,
  },
  actions: {
    async loadData() {
      if (!this.shouldLoadData) return;

      this.isLoadingData = true;

      try {
        const { data } = await api.homeService.getData();

        this.benefits = data.benefits;
        this.courses = data.courses;
        this.testimonials = data.testimonials;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoadingData = false;
      }
    },
  },
});
