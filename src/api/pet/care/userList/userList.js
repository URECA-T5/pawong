import request from '../../../axios';

const LOAD_USER_CARE_LIST = '/pet/getCareList';

export const getUserCareList = async () => {
  try {
    const response = await request.get(LOAD_USER_CARE_LIST);

    return response.data;
  } catch (e) {
    console.error(`유저 임보 목록 조회 오류 : ${e.response?.data?.message}`);
  }
};
