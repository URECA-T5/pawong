import request from '../../axios';

const DonationHistory_List = '/donation/getList/';
const DonationHistory_ACCEPT = '/donation/accept/';
const DonationHistory_REFUSE = '/donation/refuse/';

export const getDonationHistory = async (petId) => {
  try {
    const response = await request.get(DonationHistory_List + `${petId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('후원 내역 조회 오류:', error);
  }
};

export const getDonationSentHistory = async () => {
  try {
    const response = await request.get(DonationHistory_List);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('후원 내역 조회 오류:', error);
  }
};

export const patchAcceptDonation = async (donationId) => {
  try {
    const response = await request.patch(
      DonationHistory_ACCEPT + `${donationId}`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('후원 내역 조회 오류:', error);
  }
};

export const patchRefuseDonation = async (donationId) => {
  try {
    const response = await request.patch(
      DonationHistory_REFUSE + `${donationId}`,
    );
    console.log(`[patcthRefuseDonation] >> ${response.data.message}`);
    return response.data.message;
  } catch (error) {
    console.error('후원 내역 조회 오류:', error);
  }
};
