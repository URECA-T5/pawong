import request from '../axios';

const LOAD_ITEM_DATA = '/donationItem/getAll';
const LOAD_DETAIL_DATA = '/donationItem/getDetail';

export const getAllInfo = async () => {
  try {
    const response = await request.get(LOAD_ITEM_DATA);
    console.log(`** getAllInfo >> ${response}`);
    return response.data;
  } catch (e) {
    console.log(`후원 아이템 조회 오류`);
  }
};

export const getDetailInfo = async (item_id) => {
  try {
    console.log(`[path] >> ${LOAD_DETAIL_DATA}/${item_id}`);
    const response = await request.get(`${LOAD_DETAIL_DATA}/${item_id}`);
    console.log(`** getDetailInfo >> ${response}`);
    return response.data;
  } catch (e) {
    console.log(`후원 아이템 조회 오류`);
  }
};
