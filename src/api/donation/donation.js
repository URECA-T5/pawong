import request from '../axios';

export const registerDonation = async (petId, donationId, data) => {
  return request
    .post(`/donation/register/${petId}/${donationId}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
