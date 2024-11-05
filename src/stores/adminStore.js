import { create } from 'zustand';

export const adminStore = create((set) => ({
  formData: {
    productImg: [],
    tag: '',
    name: '',
    price: '',
    brand: '',
    productDetailImg: null,
    material: '',
    size: '',
    expirationDate: '',
    csInfo: '',
  },
  selectedTab: { tabName: '1', direction: 1 },
  selectedTag: '',
  setFormData: (newData) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...newData,
      },
    })),
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
