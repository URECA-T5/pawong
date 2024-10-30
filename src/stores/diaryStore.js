import { create } from 'zustand';

export const diaryStore = create((set) => ({
  formData: {
    tag: '',
    title: '',
    location: '',
    story: '',
    image: null,
  },
  selectedTag: '',
  isModalOpen: false,

  setFormData: (name, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    })),
  setSelectedTag: (tag) => set({ selectedTag: tag }),
  setToggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
export default diaryStore;
