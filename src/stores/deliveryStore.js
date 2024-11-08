import { create } from 'zustand';
import { patchMyAddress } from '../api/donation/history/listHistory';

export const AddressStore = create((set) => ({
  postcode: '',
  address: '',
  detailAddress: '',
  phoneNumber: '',
  setPostcode: (postcode) => set({ postcode }),
  setAddress: (address) => set({ address }),
  setDetailAddress: (detailAddress) => set({ detailAddress }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  acceptDontaion: async (donationId, data) => {
    try {
      const response = await patchMyAddress(donationId, data);
      return response.data.message;
    } catch (e) {
      console.log(`[error : acceptDontaion] >> ${e}`);
    }
  },
}));
