import request from '../../axios';

const DonationHistory_List = '/donation/getList/';

export const getDonationHistory = async (petId) => {
  try {
    const response = await request.get(DonationHistory_List + `${petId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('후원 내역 조회 오류:', error);
  }
};
