import axiosInstance from '@/helpers/axios';
import type { FaqQuestion } from '@/types/faq';

export default class FaqService {
  static async getFaqQuestions() {
    return axiosInstance.get<FaqQuestion[]>('/faq');
  }
}
