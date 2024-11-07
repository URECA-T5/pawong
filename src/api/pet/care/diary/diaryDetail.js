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

const DELETE_DIARY_DATA = '/fosterDiary/delete';

export const diaryDelete = async (fosterDiaryId) => {
  console.log(`${DELETE_DIARY_DATA}/${fosterDiaryId}`);
  try {
    const response = await request.delete(
      `${DELETE_DIARY_DATA}/${fosterDiaryId}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log('삭제 API응답', response);
    return response.message;
  } catch (e) {
    console.error(`임보 일지 삭제 오류: ${e.response?.data?.message}`);
  }
};
