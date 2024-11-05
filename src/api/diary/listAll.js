import request from '../axios';

const Diary_ALL = '/fosterDiary/getAll';

export const getDiaryALL = async () => {
  try {
    const response = await request.get(Diary_ALL);
    return response;
  } catch (error) {
    console.error('일지 조회 오류:', error.response?.data?.message);
  }
};
