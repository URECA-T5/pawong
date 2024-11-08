import { create } from 'zustand';
import { addDonationItem } from '../api/donation/admin/manage';

export const adminStore = create((set) => ({
  formData: {
    productImg: [],
    tag: '',
    name: '',
    price: '',
    brand: '',
    productDetailImg: [],
  },
  selectedTab: { tabName: '1', direction: 1 },
  selectedTag: '',
  setFormData: (newData) => {
    set((state) => ({
      formData: {
        ...state.formData,
        ...newData,
      },
    }));
  },

  addData: async (data) => {
    try {
      const response = await addDonationItem(data);
      console.log(`[ response ] >>> ${response}`);
      return response;
    } catch (e) {
      console.error('== adminStore.js == 오류발생');
    }
  },

  selectTab: (tabName) => {
    set((state) => ({
      selectedTab: {
        tabName,
        direction: state.selectedTab.tabName < tabName ? 1 : -1,
      },
    }));
  },
  setSelectedTag: (tag) => set({ selectedTag: tag }),
}));

export default adminStore;
