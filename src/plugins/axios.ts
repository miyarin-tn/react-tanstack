import axios, { AxiosError } from 'axios';

const axiosCustom = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

axiosCustom.interceptors.request.use(
  (config) => {
    if (config.baseURL !== '/' && !config.url?.includes('://')) {
      config.baseURL = config.baseURL || baseUrl;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosCustom.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error),
);

export default axiosCustom;
