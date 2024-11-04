import axios from 'axios';
import { refreshToken } from './auth/auth';

const request = axios.create({
  baseURL: 'http://3.23.104.89:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const handle401Error = async (error) => {
  const originalRequest = error.config;
  const savedRefreshToken = localStorage.getItem('refreshToken');

  if (!savedRefreshToken) {
    alert('인증 정보가 만료되었습니다. 다시 로그인 해주세요.');
    localStorage.clear();
    window.location.href = 'http://localhost:3000/login';
    return Promise.reject(error);
  }

  try {
    const { headers } = await refreshToken();
    localStorage.setItem('accessToken', headers.access);
    localStorage.setItem('refreshToken', headers.refresh);
    originalRequest.headers.Authorization = `Bearer ${headers.access}`;
    return request(originalRequest);
  } catch {
    localStorage.clear();
    alert('다시 로그인해주세요.');
    window.location.href = 'http://localhost:3000/login';
    return Promise.reject(error);
  }
};

request.interceptors.response.use(
  (response) => response,
  (error) =>
    error.response.status === 401
      ? handle401Error(error)
      : Promise.reject(error),
);

export default request;
