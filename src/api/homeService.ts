import axiosInstance from '@/helpers/axios';

export default class HomeService {
  static getBenefits() {
    return axiosInstance.get('/home');
  }
}
