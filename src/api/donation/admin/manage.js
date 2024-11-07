import request from '../../axios';

const ADD_DONATION_ITEM = 'donationItem/register';

export const addDonationItem = async (formData) => {
  try {
    const response = await request.post(ADD_DONATION_ITEM, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(`[ response ] >>> ${response}`);
    return response;
  } catch (e) {
    console.error(`후원 상품 등록 오류: ${e.response?.data?.message}`);
  }
};
