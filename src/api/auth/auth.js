import request from '../axios';
import { LOGIN, REFRESH_TOKEN, SIGNUP } from '../constant/api';

export const signup = (data) => {
  try {
    const response = request.post(SIGNUP, data);
    return response;
  } catch (error) {
    console.error('회원가입 오류:', error.response.data.message);
  }
};

export const login = (data) => {
  try {
    const response = request.post(LOGIN, data);
    const token = response?.data.token;
    localStorage.setItem('token', token);
    return response?.data.message;
  } catch (error) {
    console.error('로그인 오류:', error.response.data.message);
  }
};

export function refreshToken() {
  return request.get(REFRESH_TOKEN, {
    headers: {
      'X-Refresh-Token': localStorage.getItem('refreshToken'),
    },
  });
}
