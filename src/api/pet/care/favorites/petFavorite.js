import request from '../../../axios';

const BASE_URL = 'http://pawong.store:8080';

export const toggleFavorite = async (petId) => {
  try {
    const response = await request.post(
      `${BASE_URL}/favorites/add/${petId}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(
      '북마크 추가/삭제 오류:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};
