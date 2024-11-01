import request from '../axios';
import { LOCAL_LOGIN, REFRESH_TOKEN, SIGNUP } from '../constant/api';

export const signup = async (data) => {
  try {
    const response = await request.post(SIGNUP, data);
    return response;
  } catch (error) {
    console.error('회원가입 오류:', error.response?.data?.message);
  }
};

export const localLogin = async (data) => {
  try {
    const response = await request.post(LOCAL_LOGIN, data);
    const { accessToken, refreshToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    return response;
  } catch (error) {
    console.error('로그인 오류:', error.response?.data?.message);
  }
};

export const refreshToken = async () => {
  try {
    const response = await request.get(REFRESH_TOKEN, {
      headers: {
        'X-Refresh-Token': localStorage.getItem('refreshToken'),
      },
    });
    return response;
  } catch (error) {
    console.error('리프레시 토큰 오류:', error.response?.data?.message);
  }
};
