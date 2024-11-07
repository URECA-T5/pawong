import request from '../../../axios';

const ADD_DIARY_DATA = 'fosterDiary/register';

export const diaryUpload = async (data) => {
  try {
    const response = await request.post(ADD_DIARY_DATA, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (e) {
    console.error(`임보 일지 등록 오류: ${e.response?.data?.message}`);
  }
};

const UPDATE_DIARY_DATA = '/fosterDiary/update';

export const diaryUpdate = async (fosterDiaryId, data) => {
  try {
    const response = await request.put(
      `${UPDATE_DIARY_DATA}/${fosterDiaryId},`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (e) {
    console.error(`임보 일지 수정 오류: ${e.response?.data?.message}`);
  }
};
