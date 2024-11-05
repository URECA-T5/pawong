import request from '../../../axios';

const ADD_PET_DATA = '/pet/register';

export const upload = async (data) => {
  try {
    const response = await request.post(ADD_PET_DATA, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (e) {
    console.error(`임보 등록 오류: ${e.response?.data?.message}`);
  }
};
