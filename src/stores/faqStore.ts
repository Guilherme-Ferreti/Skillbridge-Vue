import api from '@/api';
import type { FaqQuestion } from '@/types/faq';
import { defineStore } from 'pinia';

interface StoreState {
  questions: FaqQuestion[];
  isLoadingData: boolean;
  errorOnLoad: boolean;
}

export const useFaqStore = defineStore('faq', {
  state: (): StoreState => ({
    questions: [],
    isLoadingData: true,
    errorOnLoad: false,
  }),
  getters: {
    shouldLoadData: (state) => state.questions.length === 0,
  },
  actions: {
    async loadData() {
      if (!this.shouldLoadData) return;

      try {
        this.isLoadingData = true;
        this.errorOnLoad = false;

        const { data } = await api.faqService.getFaqQuestions();

        this.questions = data;
      } catch (error) {
        this.errorOnLoad = true;
      } finally {
        this.isLoadingData = false;
      }
    },
  },
});
