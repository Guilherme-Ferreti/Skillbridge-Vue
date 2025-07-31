import axiosInstance from '@/helpers/axios';

export default class HomeService {
  static getBenefits() {
    return axiosInstance.get('/home');
  }

  static getCourses() {
    return axiosInstance.get('/home');
  }

  static getTestimonials() {
    return axiosInstance.get('/home');
  }
}
