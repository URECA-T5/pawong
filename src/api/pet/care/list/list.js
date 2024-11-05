import request from '../../../axios';

const LOAD_CARE_LIST = '/pet/getAll';

export const getCareInfo = async () => {
  try {
    const response = await request.get(LOAD_CARE_LIST);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(`임보 목록 조회 오류 : ${e.response?.data?.message}`);
  }
};
