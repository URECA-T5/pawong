import request from '../../../axios';

const DIARY_DETAIL_ALL = `/fosterDiary/get/`;

export const getDiaryDetailAll = async (fosterDiaryId) => {
  try {
    const response = await request.get(DIARY_DETAIL_ALL + `${fosterDiaryId}`);
    return response;
  } catch (error) {
    console.error(`임보일지 상세조회 오류 : ${error.response?.data?.message}`);
  }
};
