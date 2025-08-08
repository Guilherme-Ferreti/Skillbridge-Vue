import api from '@/api';
import type { HomeBenefit, HomeCourse, HomeTestimonial } from '@/types/home';
import { defineStore } from 'pinia';

interface StoreState {
  benefits: HomeBenefit[];
  courses: HomeCourse[];
  testimonials: HomeTestimonial[];
  isLoadingData: boolean;
  errorOnLoad: boolean;
}

export const useHomeStore = defineStore('home', {
  state: (): StoreState => ({
    benefits: [],
    courses: [],
    testimonials: [],
    isLoadingData: true,
    errorOnLoad: false,
  }),
  getters: {
    shouldLoadData: (state) =>
      state.benefits.length === 0 || state.courses.length === 0 || state.testimonials.length === 0,
  },
  actions: {
    async loadData() {
      if (!this.shouldLoadData) return;

      this.isLoadingData = true;
      this.errorOnLoad = false;

      try {
        const { data } = await api.homeService.getData();

        this.benefits = data.benefits;
        this.courses = data.courses;
        this.testimonials = data.testimonials;
      } catch (error) {
        this.errorOnLoad = true;
      } finally {
        this.isLoadingData = false;
      }
    },
  },
});
