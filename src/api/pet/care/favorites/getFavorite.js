import request from '../../../axios';

const LOAD_USER_FAVORITE_LIST = '/favorites/getAll';

export const getUserFavList = async () => {
  try {
    const response = await request.get(LOAD_USER_FAVORITE_LIST);
    return response.data;
  } catch (e) {
    console.error(`유저 즐겨찾기 목록 조회 오류${e.response?.data?.message}`);
  }
};
