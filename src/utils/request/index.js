import Request from './Request';
import { BASE_URL, TIME_OUT } from '../../config/request';
import { sessionCache } from '@/utils/storage';

export const HTTP = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token
      const token = sessionCache.getItem('token');

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
  }
});
