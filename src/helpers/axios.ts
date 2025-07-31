import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://skillbridge.com.test/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
