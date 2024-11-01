import { create } from 'zustand';

export const AddressStore = create((set) => ({
  postcode: '',
  address: '',
  detailAddress: '',
  phoneNumber: '',
  setPostcode: (postcode) => set({ postcode }),
  setAddress: (address) => set({ address }),
  setDetailAddress: (detailAddress) => set({ detailAddress }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
}));

export default AddressStore;
