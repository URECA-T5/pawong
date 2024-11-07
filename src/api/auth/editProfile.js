import request from '../axios';
import serverBaseUrl from '../../config/serverConfig';

// 프로필 수정 요청
export const updateProfile = async (profileData) => {
  try {
    const response = await request.put(
      `${serverBaseUrl}/auth/update`,
      profileData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('프로필 업데이트 실패:', error);
    throw new Error('프로필 업데이트에 실패했습니다.');
  }
};
