import axiosInstance from '@/helpers/axios';
import type { Home } from '@/types/home';

export default class HomeService {
  static getData() {
    return axiosInstance.get<Home>('/home');
  }
}
