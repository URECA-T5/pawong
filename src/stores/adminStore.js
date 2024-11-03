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
  selectedTab: { tabName: '1', tabIndex: 0, direction: 1 },
  selectedTag: '',
  setFormData: (newData) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...newData,
      },
    })),
  selectTab: (tabName, tabIndex) =>
    set((state) => ({
      selectedTab: {
        tabName,
        tabIndex,
        direction: state.selectedTab.tabIndex < tabIndex ? 1 : -1,
      },
    })),
  setSelectedTag: (tag) => set({ selectedTag: tag }),
}));

export default adminStore;
