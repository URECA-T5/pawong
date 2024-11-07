import request from '../../../axios';

const LOAD_DIARY_LIST = `/pet/getDetail/`;

export const getDiaryInfo = async (petId) => {
  try {
    const response = await request.get(LOAD_DIARY_LIST + `${petId}`);
    console.log(response);
    return response.data;
  } catch (e) {
    console.error(`임보일지 피드 조회 오류 : ${e.response?.data?.message}`);
  }
};
